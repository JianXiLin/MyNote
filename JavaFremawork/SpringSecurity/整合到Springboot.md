# 基本使用

## 1. jar包导入

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
```

## 2. 默认参数

导入SpringSecurity的jar包后，则生效。
SpringSecurity默认拦截了所有请求，提供了表单登录，默认提供了一个User对象记录了默认的用户名、密码、角色等。

从SecuriryProperies类中可得出，用户名默认为user等信息。

```java
//SecuriryProperies类中的内部类
public static class User {
    /**
        * Default user name.
        */
    private String name = "user";
    /**
        * Password for the default user name.
        */
    private String password = UUID.randomUUID().toString();
    /**
        * Granted roles for the default user name.
        */
    private List<String> roles = new ArrayList<>();
    ...
```

可修改的自动配置参数：

```yml
# ----------------------------------------
# SECURITY PROPERTIES
# ----------------------------------------
# SECURITY (SecurityProperties)
spring.security.filter.order=0 # Security filter chain order.
spring.security.filter.dispatcher-types=ASYNC,ERROR,REQUEST # Security filter chain dispatcher types.
spring.security.user.name=user # Default user name.
spring.security.user.password= # Password for the default user name.
spring.security.user.roles= # Granted roles for the default user name.

# SECURITY OAUTH2 CLIENT (OAuth2ClientProperties)
spring.security.oauth2.client.provider.*= # OAuth provider details.
spring.security.oauth2.client.registration.*= # OAuth client registrations.

```

## 3. 配置认证信息

SpringSecurity中认证信息的配置通过WebSecurityConfigurerAdapter接口内的configure(AuthenticationManagerBuilder auth)方法来配置。

### 3.1. 使用固定的认证信息

```java
@Override
protected void configure(AuthenticationManagerBuilder auth) throws Exception {
    auth.inMemoryAuthentication()
            .withUser("xi").password("xi").roles("admin")
            .and()
            .withUser("ming").password("ming").roles("user");
}
```

### 3.2. 使用数据库中的信息

在配置类中认证信息方法上，添加UserService类实例，该类需实现<b>UserDetailsService接口</b>,重写以下该方法：
<b>UserDetails loadUserByUsername(String var1) </b>
该方法将返回的内容是与数据库相互映射的user实体类，其需实现<b>UserDetails接口</b>

🔹 配置类

```java
@Autowired
UserService userService;

@Override
protected void configure(AuthenticationManagerBuilder auth) throws Exception {
    auth.userDetailsService(userService);
}
```

🔹 service

```java
@Service
public class UserService implements UserDetailsService {

    @Autowired
    UserMapper userMapper;

    @Override
    public User loadUserByUsername(String username) {
        User user = userMapper.loadUserByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("用户不存在");
        }
        user.setRoles(userMapper.getRolesByUserId(user.getId()));
        return user;
    }
}

```

🔹 user实体类

```java
public class User implements UserDetails {

    private Integer id;
    private String username;
    private String password;
    private boolean enabled;
    private boolean locked;  //是否被锁定

    private List<Role> roles;
    ....
}
```

### 3.3. 密码加密

🔹 设置密码加密方式

可在配置类中注入PasswordEncoder类。
注入其子类后，数据库则需存储其相应的加密后的密码（可使用该加密类中加密方法来手动获取加密后的密码）

数据库无需存储盐值（）
```java
@Bean
PasswordEncoder passwordEncoder(){
    return new BCryptPasswordEncoder();
}
```

💬 BCrypt为单向Hash加密,破解成本很高，
> BCrypt = BCrypt版本号 + salt盐 + Hash结果值
> 其中Hash结果值 = Hash(明文密码)
  
🔹 取消密码加密（已过时）
在配置类中注入NoOpPasswordEncoder.getInstance()

```java
@Bean
PasswordEncoder passwordEncoder(){
    return NoOpPasswordEncoder.getInstance();
}
```

### 3.4.设置角色继承关系

```java
@Bean
RoleHierarchy roleHierarchy() {
    RoleHierarchyImpl roleHierarchy = new RoleHierarchyImpl();
    String hierarchy = "ROLE_dba > ROLE_admin \n ROLE_admin > ROLE_user";
    roleHierarchy.setHierarchy(hierarchy);
    return roleHierarchy;
}
```

## 4. HttpSecurity

httpSecurity相关配置通过WebSecurityConfigurerAdapter的configure(HttpSecurity http)方法来配置。

### 4.1 控制请求路径权限（赋予角色）

#### 4.1.1. 使用固定的资源路径权限信息

```java
@Override
protected void configure(HttpSecurity http) throws Exception {

    http.authorizeRequests()
            .antMatchers("/admin/**").hasRole("admin")
//          .antMatchers("user/**").hasAnyRole("admin","user")
            .antMatchers("user/**").access("hasAnyRole('admin','user')")
            .anyRequest().authenticated()
            .and();
}

```

#### 4.1.2. 动态更改

需要向容器注入两个类：

1. 实现FilterInvocationSecurityMetadataSource接口的类
2. 实现AccessDecisionManager接口的类

之后再将这两个类添加到HttpSecurity中。

FilterInvocationSecurityMetadataSource主要返回请求所需认证信息（角色）。
AccessDecisionManager主要用来决定请求是否通过，通过返回，不通过则抛AccessDeniedException异常。

🔹 注入FilterInvocationSecurityMetadataSource

```java
@Component
public class MyFilter implements FilterInvocationSecurityMetadataSource {
    //用于匹配url
    AntPathMatcher pathMatcher = new AntPathMatcher();

    @Autowired
    MenuService menuService;

    /**
     * 根据请求地址设置所需要的角色
     * 请求地址与数据库中无匹配项，则添加为需要登录
     * @param o  req + resp + chain
     * @return
     * @throws IllegalArgumentException
     */
    @Override
    public Collection<ConfigAttribute> getAttributes(Object o) throws IllegalArgumentException {
        //获取请求地址
        String requestUrl = ((FilterInvocation) o).getRequestUrl();
        //获取数据库中所有资源请求地址(含角色)
        List<Menu> allMenus = menuService.getAllMenus();
        //查找当前请求路径与数据库中哪个资源请求匹配
        // 匹配则返回其所需的认证信息（角色）
        for (Menu menu : allMenus) {
            if (pathMatcher.match(menu.getPattern(), requestUrl)) {
                List<Role> roles = menu.getRoles();
                String[] rolesStr = new String[roles.size()];
                for (int i = 0; i < roles.size(); i++) {
                    rolesStr[i] = roles.get(i).getName();
                }
                return SecurityConfig.createList(rolesStr);
            }
        }
        // 无匹配项，默认返回 ROLE_login
        return SecurityConfig.createList("ROLE_login");
    }
    ......
}
```

🔹 注入AccessDecisionManager

```java
@Component
public class MyAccessDecisionManager implements AccessDecisionManager {
    /**
     * 根据当前角色信息，判断是否符合当前请求所需角色的要求
     * @param authentication 当前登录用户的信息
     * @param o 当前请求对象
     * @param collection    当前请求对象所需的角色 对应着FilterInvocationSecurityMetadataSource
     * @throws AccessDeniedException
     * @throws InsufficientAuthenticationException
     */
    @Override
    public void decide(Authentication authentication, Object o, Collection<ConfigAttribute> collection) throws AccessDeniedException, InsufficientAuthenticationException {
        // 遍历所需角色信息
        // 若当前角色在所需角色内，则返回，否则则抛异常
        for (ConfigAttribute attribute : collection) {
            if ("ROLE_login".equals(attribute.getAttribute())) {
                if (authentication instanceof AnonymousAuthenticationToken) {
                    throw new AccessDeniedException("非法请求!");
                } else {
                    return;
                }
            }
            Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
            for (GrantedAuthority authority : authorities) {
                if (authority.getAuthority().equals(attribute.getAttribute())) {
                    return;
                }
            }
        }
        throw new AccessDeniedException("非法请求!");
    }

    @Override
    public boolean supports(ConfigAttribute configAttribute) {
        return true;
    }

    @Override
    public boolean supports(Class<?> aClass) {
        return true;
    }
}

```

🔹 将自定义的两个类添加到HttpSecurity中

1. 设置请求资源路径认证信息
2. 判断请求内容是否符合认证信息

```java
@Override
protected void configure(HttpSecurity http) throws Exception {
    http.authorizeRequests()
            .withObjectPostProcessor(new ObjectPostProcessor<FilterSecurityInterceptor>() {
                @Override
                public <O extends FilterSecurityInterceptor> O postProcess(O o) {
                    o.setAccessDecisionManager(myAccessDecisionManager);
                    o.setSecurityMetadataSource(myFilter);
                    return o;
                }
            })
            .and()
            .formLogin()
            .permitAll()
            .and()
            .csrf().disable();

}
```

### 4.2. 配置登录表单

```java
@Override
protected void configure(HttpSecurity http) throws Exception {

    http.authorizeRequests()
        .formLogin()
        .loginProcessingUrl("/doLogin")
        // .loginPage("/login") //自定义登录页面
        // .usernameParameter("uname") //自定义参数名称
        // .passwordParameter("password") //
        // .successForwardUrl("/") //登录成功后跳转到url
        .permitAll()
    ......
}

```

### 4.3. 登录成功\失败后的操作

```java
@Override
protected void configure(HttpSecurity http) throws Exception {

    http.authorizeRequests()
        //登录成功后的操作
        .successHandler((req, resp, authentication) -> {
            //authentication :登录成功的信息
            PrintWriter writer = resp.getWriter();
            resp.setContentType("application/json;charset=utf-8");
            HashMap<String,Object> map = new HashMap<>();
            map.put("status",200);
            map.put("message",authentication.getPrincipal());

            //向相应请求中写入信息
            writer.write(new ObjectMapper().writeValueAsString(map));

            writer.flush();
            writer.close();
        })
        // 登录失败后的操作
        .failureHandler((req, resp, e) -> {

            PrintWriter writer = resp.getWriter();
            resp.setContentType("application/json;charset=utf-8");
            HashMap<String,Object> map = new HashMap<>(10);
            map.put("status",401);

            //判断失败的异常类型
            if (e instanceof LockedException){
                map.put("message","账号被锁定，登陆失败");
            }else if (e instanceof BadCredentialsException){
                map.put("message","账号或密码错误，登陆失败");
            }else if (e instanceof DisabledException){
                map.put("message","账号被禁用，登陆失败");
            }else if (e instanceof AccountExpiredException){
                map.put("message","账号过期，登陆失败");
            }else if (e instanceof CredentialsExpiredException){
                map.put("message","密码过期，登陆失败");
            }else{
                map.put("message","登录失败");
            }
            //向相应请求中写入信息
            writer.write(new ObjectMapper().writeValueAsString(map));

            writer.flush();
            writer.close();

        })
    ......
}

```

### 4.4. 退出登录

```java
@Override
protected void configure(HttpSecurity http) throws Exception {

    http.authorizeRequests()
    ...
        .logout()
        .logoutUrl("/logout") //退出登录的请求url
        //退出成功后的操作
        .logoutSuccessHandler((req, resp, authentication) -> {
            PrintWriter writer = resp.getWriter();
            HashMap<String,Object> map = new HashMap<>();
            resp.setContentType("application/json;charset=utf-8");
            map.put("status",200);
            map.put("message","注销成功");
            writer.write(new ObjectMapper().writeValueAsString(map));

            writer.flush();
            writer.close();
        })
    ......
}
```

### 4.5. 关闭csrf

测试时使用。关闭csrf攻击的预防操作。

```java
@Override
protected void configure(HttpSecurity http) throws Exception {

    http.authorizeRequests()
    ...
        csrf().disable();
    ......
}
```

## 5. 多个HttpSecurity

当多个HttpSecurity时，需在类上添加@order(value)注解来标明优先级。value值越低，优先级越高。

```java
@Configuration
public class MuitlHttpSecurityConfig {

    @Configuration
    @Order(1)
    static class AdminSecurity extends WebSecurityConfigurerAdapter{

        @Override
        protected void configure(HttpSecurity http) throws Exception {
//            http.authorizeRequests() 无效？
//                    .antMatchers("/admin/**").hasRole("admin");
//                    .antMatchers("user/**").hasAnyRole("admin","user");
            http.antMatcher("/admin/**").authorizeRequests()
                    .anyRequest().hasRole("admin");
//                    .and()
//                    .antMatcher("user/**").authorizeRequests()
//                    .anyRequest().hasAnyRole("admin","user");
            // 报错。why？？nested exception is java.lang.IllegalStateException: Can't configure anyRequest after itself
        }
    }

    @Configuration
    static class OtherSecurity extends WebSecurityConfigurerAdapter{

        @Override
        protected void configure(HttpSecurity http) throws Exception {
            http.authorizeRequests()
                    .anyRequest().authenticated()
                    .and()
                    .formLogin().loginProcessingUrl("/doLogin")
                    .and()
                    .csrf().disable();
        }
    }
}

```

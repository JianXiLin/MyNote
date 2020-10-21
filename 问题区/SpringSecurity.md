
## 1. SpringBoot 配置 SpringSecurity时，无法发送登录Post请求。

### 问题描述

在SpringSecurity中的HttpSecurity配置了登录页面请求为`/login`,登录的post请求为`/doLogin`,但当发送/doLogin的post请求却跳转到/login请求。

HttpSecurity:
```java
    @Configuration
    public class SecurityConfig extends WebSecurityConfigurerAdapter {
        @Override
        protected void configure(HttpSecurity http) throws Exception {
            http.authorizeRequests()
            .anyRequest().authenticated()
            .and()
            .formLogin()
            .usernameParameter("username").passwordParameter("password")
            .loginPage("/login")
            .loginProcessingUrl("/doLogin")
            //登录后的操作
            .successHandler((req, resp, authentication) -> {
                ...
            })
            .failureHandler((req, resp, authenticationException) -> {
    .                ...
            })
            .permitAll()
            .and()
            .logout()
            .logoutUrl("/logout")
            .logoutSuccessHandler((req, resp, authentication) -> {
                ...
            });
            .and()
            .cors().disable();
        }
    }
```

/login:
```java
@RestController
    public class LoginController {

        @GetMapping("/login")
        public ResponseBean Login(){
            return ResponseBean.fail("尚未登录");
        }
    }
```

### 导致原因

&emsp;&emsp;缺乏csrf认证信息。
&emsp;&emsp;由于登录post请求 `/dologin` 存在csrf拦截，但在传参时没有添加csrf认证信息，故请求失效，便会被SpringSecurity拦截、重定向到`/login`。

&emsp;&emsp;从SpringSecurity自带的登录页面表单中，也可看出csrf拦截的存在，如下图：
![SpringSecurity/2020-08-14-14-52-21](https://jianxi-md-pics.oss-cn-beijing.aliyuncs.com/note-md-imgs/SpringSecurity/2020-08-14-14-52-21.png?x-oss-process=image/resize,p_100/sharpen,100)

### 解决方法

<b>方法一： 后端关闭csrf拦截</b>

在SpringBoot + HttpSecurity中配置`.csrf().disable()`,如下

HttpSecurity:
```java
    @Configuration
    public class SecurityConfig extends WebSecurityConfigurerAdapter {
        @Override
        protected void configure(HttpSecurity http) throws Exception {
            http.authorizeRequests()
            ... //同前面的HttpSecurity配置
            .and()
            .csrf().disable(); // 此处为csrf 非 cors
        }
    }
```

### 补充：csrf与cors

#### 1. CSRF（Cross-site request forgery）,跨站请求伪造。

CSRF 为一种网站攻击方式，通过获取用户认证信息来假冒用户对网站发送恶意请求。

![SpringSecurity/20200814152010](https://jianxi-md-pics.oss-cn-beijing.aliyuncs.com/note-md-imgs/SpringSecurity/20200814152010.png?x-oss-process=image/resize,p_100/sharpen,100)
[图片来源：hyddd的"浅谈CSRF攻击方式"一文](https://www.cnblogs.com/hyddd/archive/2009/04/09/1432744.html)

#### 2. CORS（cross-origin sharing standard）,跨域资源共享。

&emsp;&emsp;CORS是作为网站请求跨域资源的通行证。允许网站访问来自不同源服务器上的指定的资源。不同源服务器则指的是与本服务器域、协议或端口不同的服务器。
&emsp;&emsp;由于浏览器出于安全考虑，会对跨站的请求结果进行拦截。但响应报文中包含CORS响应头时，则会进行放行。

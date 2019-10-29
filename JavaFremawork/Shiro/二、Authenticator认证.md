## 二、认证
### 1、身份认证
    principals （身份）和 credentials（证明）
    principals：即主体的标识属性。  
                以有多个 principals，
                但只有一个 Primary principals
    credentials：有主体知道的安全值
![image.png](https://i.loli.net/2019/10/29/zlrij9I1XtySpU7.png)
### 2、登录项目例子
#### 2.1、导入jar包
#### 2.2、配置log4j
```log4j.rootLogger=debug, stdout
log4j.appender.stdout=org.apache.log4j.ConsoleAppender
log4j.appender.stdout.layout=org.apache.log4j.PatternLayout
log4j.appender.stdout.layout.ConversionPattern=%d %p [%c] - %m %n

```
#### 2.3、配置shiro.ini
    ini文件——优势：数据分组
```
[users]
zhangsan=1111
lisi=1111

```
#### 2.4、代码
```//用户登录和退出
@Test
public void testAuthenticator(){
   // 构建 SecurityManager 工厂，
   IniSecurityManagerFactory 可以
   从 ini 文件中初始化 SecurityManager 环境
  Factory<SecurityManager> factory = new
  IniSecurityManagerFactory("classpath:shiro.ini");
   //通过工厂获得 SecurityManager 实例
   SecurityManager securityManager =factory.getInstance();
//将 securityManager 设置到运行环境中
SecurityUtils.setSecurityManager(securityManager);
//获取 subject 实例
Subject subject = SecurityUtils.getSubject();
//创建用户名,密码身份验证 Token
UsernamePasswordToken token = new
UsernamePasswordToken("zhangsan", "1111");
try {
//登录，即身份验证
subject.login(token);
} catch (AuthenticationException e) {
e.printStackTrace();
//身份认证失败
}
//断言用户已经登录
Assert.assertEquals(true, subject.isAuthenticated());
//退出
subject.logout();
}


```

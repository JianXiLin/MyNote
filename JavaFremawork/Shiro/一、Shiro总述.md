# 一、shiro总述 
## 1、简介
    作为一个安全框架。
    可用于认证、 授权、加密、会话管理、与 Web 集成、缓存等。
## 2、基本功能图：
![image.png](https://i.loli.net/2019/10/29/2i4QPAGSRXC5Bo8.png)
##### 2.1、Authentication:
    身份验证
##### 2.2、Authorization:
    授权、认证
##### 2.3、Session Management:
    会话管理，即用户登录后就是一次会话，在没有退出之前，  
    它的所有信 息都在会话中；会话可以是普通 JavaSE 环境的， 
    也可以是如 Web 环境的；
##### 2.4、web Support:
    web支持
##### 2.5、Concurrency:
    多线程应用并发

## 3、框架
 ![image.png](https://i.loli.net/2019/10/29/9QW4irFp5kuUZ7g.png)  
##### 3.1、Subject 
	外部应用与之交互，例如WebMVC。外部通过Subject进行认证，Subject再通过  
    Security Manager进行认证。
##### 3.2、Security Manager  
    继承了Authenticator(认证)、Authorizer(授权)、SessionManager(会话管理)接口
##### 3.3、Authenticator
    ModularRealmAuthenticator实现类。
## Realm
### 1、默认Realm为Shiro.ini
### 2、自定义Realm
#### 2.1、Realm接口
![image.png](https://i.loli.net/2019/10/29/N5r9mZb2YO4LAge.png)
#### 2.2、自定义Realm类实现simpleAccountRealm接口。
        （实现doGetAuthenticationInfo-认证）
        （实现doGetAuthorizaitonInfo-认证）
![image.png](https://i.loli.net/2019/10/29/EfBvkzF8iKXtr63.png)
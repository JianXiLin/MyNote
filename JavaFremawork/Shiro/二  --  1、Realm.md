# Realm
## 1、默认Realm为Shiro.ini
![image.png](https://i.loli.net/2019/11/06/JF6hkK8OBEdiAsG.png)
## 2、自定义Realm
### 2.1、Realm接口
![image.png](https://i.loli.net/2019/10/29/N5r9mZb2YO4LAge.png)
### 2.2、自定义Realm类实现simpleAccountRealm接口。
        （实现doGetAuthenticationInfo-认证）
        （实现doGetAuthorizaitonInfo-授权）
#### 2.2.1、代码
![image.png](https://i.loli.net/2019/10/29/EfBvkzF8iKXtr63.png)
#### 2.2.2、设置ini文件--配置Realm类
```
[main]
#自定义 realm
userRealm=cn.siggy.realm.UserRealm
#将 realm 设置到 securityManager
securityManager.realms=$userRealm

```
### 3、使用JdbcReaml
![image.png](https://i.loli.net/2019/11/06/8uealmkzYwyLXnj.png)
#### 3.1、步骤
1.创建相应的数据库表格
2.配置ini文件 设置datasource
![image.png](https://i.loli.net/2019/11/06/Fz2agPurlUD68C3.png)
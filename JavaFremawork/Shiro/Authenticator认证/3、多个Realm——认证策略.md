## 一、配置多个Realm
eg:
securityManager.realms = \$jdbcRealm,\$userRealm

## 二、认证策略种类(三种)：
![image.png](https://i.loli.net/2019/11/20/GCfq4Jk1hbEPnRN.png)

#### 默认：AtleastOneSuccessfulStrategy
不同： AtLeastOne... : 所有的都验证
      First... : 第一个成功后不再验证

## 三、设置认证策略：
eg:
![image.png](https://i.loli.net/2019/11/20/wc9XyCPvNRJ8Tho.png)

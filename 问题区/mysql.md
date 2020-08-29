#

## 1. 数据库连接错误

### 问题描述

```
java.sql.SQLException: Access denied for user ''@'localhost' (using password: NO)
```

### 导致原因

Springboot中的数据库配置写错,例如将username 错写成data-username

application.yml内容如下,

```yml

spring:
  datasource:
    type:
      com.alibaba.druid.pool.DruidDataSource
    data-username:
      root
    data-password:
      123456
    url:
      jdbc:mysql://localhost:3306/xxx?useUnicode=true&characterEncoding=UTF-8&serverTimezone=Asia/Shanghai

```

### 解决方法

修改配置信息

```yml

spring:
  datasource:
    type:
      com.alibaba.druid.pool.DruidDataSource
    username:
      root
    password:
      123456
    url:
      jdbc:mysql://localhost:3306/xxx?useUnicode=true&characterEncoding=UTF-8&serverTimezone=Asia/Shanghai

```

### 内容补充

appication.properties文件中数据库配置内容解释
```
#初始化数据库的时候，如果错误，是否继续启动。
spring.datasource.continue-on-error=false
#jdbc driver.默认通过uri来自动检测。
spring.datasource.driver-class-name=com.mysql.jdbc.Driver
#使用的db名称
spring.datasource.name=test
#是否随机生成db名称
spring.datasource.generate-unique-name=false
#jdbc url.连接数据库的uri
spring.datasource.url=
#数据库连接用户名
spring.datasource.username=
#数据连接密码
spring.datasource.password=
#DML的用户名(如果数据库专门设置了对应的用户名和密码)
spring.datasource.data-username=
#DML的密码(如果数据库专门设置了对应的用户名和密码)
spring.datasource.data-password=
#DDL的用户名(如果数据库专门设置了对应的用户名和密码)
spring.datasource.schema-username=
#DDL的密码(如果数据库专门设置了对应的用户名和密码)
spring.datasource.schema-password=
#全限定名，连接池。默认自动检测classpath
spring.datasource.type=com.zaxxer.hikari.HikariDataSource
#sql脚本字符
spring.datasource.sql-script-encoding=UTF-8
#sql脚本分割符，默认为分号。
spring.datasource.separator=;

#dbcp2的连接参数
spring.datasource.dbcp2.*
#hikari的连接参数
spring.datasource.hikari.*
#tomcat的连接参数
spring.datasource.tomcat.*
```


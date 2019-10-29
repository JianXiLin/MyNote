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
#### 2.3、配置shiro。
ini文件 数据分组
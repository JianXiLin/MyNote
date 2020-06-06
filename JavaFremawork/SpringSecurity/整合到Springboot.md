# 基本使用

## 

🔹 错误信息描述

```java
java.lang.IllegalArgumentException: There is no PasswordEncoder mapped for the id "null"
```
🔹 解决方法
方案一：在ioc中注入NoOpPasswordEncoder（过时）

```java
@Bean
PasswordEncoder passwordEncoder(){
    @Bean
    PasswordEncoder passwordEncoder(){
        // 设置密码不加密
        return NoOpPasswordEncoder.getInstance();
    }
.getInstance();
}
```

方案二: 给密码加密（见..）
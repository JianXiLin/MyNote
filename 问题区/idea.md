# idea question

## 1. 数据库连接时区错误

### 1.1. 错误描述

Server returns invalid timezone. Go to 'Advanced' tab and set 'serverTimezone' property manually..

### 1.2. 解决方案

🔹 第一种：在 Advanced 设置serverTImezone的值

🔹 第二种：在数据库url后添加serverTImezone的值

```
jdbc.url=jdbc:mysql://localhost:3306/demo?serverTimezone=UTC&characterEncoding=utf-8
```

🔹 第三种：修改mysql数据库时区

```cmd

show variables like “%time_zone%”; // 查看当前设置的时区

SET time_zone = ‘+0:00’; // 修改为utc，正0时区，世界统一时间

```
🔹 第四种：修改配置文件my.ini

添加默认时区设置
```ini
[mysqld]
#设置默认时区
default-time_zone = ‘+0:00’
```

💬 补充：
serverTimezone的值：
1）GMT+8；东八区。需填写为GMT%2B8
2) Asia/Shanghai
3) UTC 世界标准时间

> CST——China Standard Time = UTC+8:00 中国标准时间


# mysql相关操作记录

## 1. 重置密码（CentOS7.3）

1️⃣ 停止mysql数据库

systemctl stop mysqld

2️⃣ 以不检查权限的方式启动mysql

mysqld --user=root --skip-grant-tables &

3️⃣ 更新密码

```shell
//进入mysql
mysql
use mysql

//修改密码（mysql5.7以下版本）
UPDATE mysql.user SET Password=PASSWORD('123456') where USER='root';

//修改密码（mysql5.7版本）
UPDATE mysql.user SET authentication_string=PASSWORD('123456') where USER='root';

```

4️⃣ 刷新权限

flush privileges

## 2. 允许外部连接（CentOS7.3）

1️⃣ 查看host设置

use mysql
select user,host from user;

2️⃣ 开放权限

GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '123456' WITH GRANT OPTION;
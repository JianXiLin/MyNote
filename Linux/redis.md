#

## 安装redis-cli

```shell
# 下载redis
wget http://download.redis.io/redis-stable.tar.gz
# 解压
tar -zxvf redis-stable.tar.gz
cd redis-stable
# 编译
make
# 添加redis-cli到系统bin目录下,方便运行
cp src/redis-cli /usr/local/bin/
# 修改redis-cli权限
chmod 755 /usr/local/bin/redis-cli
```

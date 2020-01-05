## 1、连接Redis
进入Redis目录，启动Redis，连接Redis。
连接Redis命令：redis-cli -h 127.0.0.1 -p 6379
测试连接：ping
## 2、常用命令
- keys pattern（？(1)、*(0-~)、[范围始-范围末]、\）
——查询key
- Exists key
——判断key是否存在
- del key[key...]
——删除key，返回删除数量
- Type key
——获取类型
## 3、数据类型
### 3.1 string
- get\set key——获取\设置值
- incr key——自增设置值，从0开始，1为递增值
- incrby key num ——num为递增值
- decr、decrby ——自减、不能为负值
- append key value ——后追加
- strlen key——获取长度
- MSET key value[key value...]——设置多个值
- MGET key[key...]——获取多个值
### 3.2 hash

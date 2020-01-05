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
- ==get== \ ==set== key——获取\设置值
- ==mset== key value[key value...]——设置多个值
- ==mget== key[key...]——获取多个值
- ==incr== key——自增设置值，从0开始，1为递增
- ==incrby== key num ——num为递增值
- ==decr==、decrby ——自减、不能为负值
- ==append== key value ——后追加
- ==strlen== key——获取长度

### 3.2 hash
- ==hset== region_key key value ——设置域及其值
- ==hmset== region_key key value[key value...]
- ==hget== region_key key ——获取对应域的值
- ==hmget== region_key key[key...]
- ==hgetall== region_key ——获取对应域的所有的key、value
- ==hexists== region_key 
- ==hdel==、==hlen==
- ==hkeys== region_key 获取域名
- ==hvals== region_key 获取域名中的key

### 3.3 list（双向链表）
- lpush key value[value...] ——左添加值
- rpush key value[value...]
- lpop key ——左删除一个值
- rpop key
- llen
- lrange key start-end ——获取片段
- lrem key count value ——删除值（count = 0 ）



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
- move key DB
——移动key到某号库
- Type key
——获取类型
- DBSize
——查看key数量
- flushDB 、 flushAll
——清除本仓库、清除所有库 


## 3、数据类型
#### 五大数据类型：String、Hash、List、Set、Sorted set
### 3.1 string
- ==get== \ set key——获取\设置值
  已存在则覆盖
- ==mset== key value[key value...]——设置多个值
- ==mget== key[key...]——获取多个值 
- ==append== key value ——后追加
- ==strlen== key——获取长度
- ==incr== key——自增设置值，从0开始，1为递增
- incrby key num ——num为递增值
- ==decr==、decrby ——自减、不能为负值
- ==getRange== key start end 获取范围内的值 (0到-1则是全部)
- ==setRange== key start value... 设置某范围的值
- ==setex== key timeout秒 value 设置过期时间 set with expire
- ==setnx== key value 设置值 set if not exist
  若已存在则不修改
- ==msetnx== 多个设值
  若有一个不存在则无法设置

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
- ==lpush== key value[value...] ——左添加值
- ==rpush== key value[value...]
- ==lpop== key ——左删除一个值
- ==rpop== key
- ==lindex== key index ——获取指定值 （从0开始）
- ==llen== 获取长度
- ==lrange== key start-end ——获取片段
- ==lrem== key count value ——删除n个值（count = 0/全、 > 0/左、< 0/右 ）
- ltrim key startIndex endIndex 截取 

### 3.4 set 
- ==sadd== key value[value...]
- ==srem== key value[value...]
- ==smembers== key —— 获取所有值
- ==sismembers== key value —— 是否存在该值
- ==scard== key —— 获取值的数量 

### 3.5 sorted set （散列表）
- ==zadd== sset_key score value[score value...] —— 设置值
(值唯一，若值存在则修改score)
- ==zrange== sset_key start end （withscores）—— 获取片段值（含key）
- ==zRemrangeByRank== sset_key startNum endNum ——删除片段（以rank排名）
- ==zremrangebyscore== sset_key startScore endScore——删除片段（以Score排名）

## 4、生存时间（TTL）
- ==expire== key num ——设置生存时间（秒）
- ==pexpire== key num ——设置生存时间（毫秒） 
- ==TTL== key —— 查看生成时间
  -1：表示永不过期
-2：表示已过期（即已删除）

- ==persist== key —— 删除生存时间

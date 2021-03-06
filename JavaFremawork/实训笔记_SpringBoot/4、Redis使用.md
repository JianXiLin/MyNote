## 1、连接Redis

- window：进入Redis目录，启动Redis，连接Redis。
- linux：开启Redis服务：redis-server redis.conf文件
- 连接Redis命令：redis-cli -h 127.0.0.1 -p 6379
- 退出：shutdown 再exit
- 查看Redis线程是否启动

	- 方法1：ps -ef|grep redis
	- 方法2：lsof -i ：6379

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
- help @指令
——查询帮助文档

## 3、数据类型

<b> 五大数据类型：String、Hash、List、Set、Sorted set</b>

### 3.1 string

- **get** \ set key——获取\设置值
  已存在则覆盖
- **mset** key value[key value...]——设置多个值
- **mget** key[key...]——获取多个值 
- **append** key value ——后追加，返回总长度
- **strlen** key——获取长度
- **incr** key——自增设置值，从0开始，1为递增
- incrby key num ——num为递增值
- **decr**、decrby ——自减、不能为负值
- **getRange** key start end ——获取范围内的值 (0到-1则是全部)
- **setRange** key start value... ——设置某范围的值
- **setex** key timeout秒 value ——设置过期时间 set with expire
- **setnx** key value ——设置值 set if not exist
  若已存在则不修改
- **msetnx** 多个设值
  若有一个不存在则无法设置

### 3.2 （重点） hash

k-v，v中也为k-v，
以下region_key表示hash的key，key表示hash的value中的key

- <b>（重点）设置、获取值:</b>

	- **hset** region_key key value ——设置域及其值
	- **hmset** region_key key value[key value...]
	- **hget** region_key key ——获取对应域的值
	- **hmget** region_key key[key...]
	- **hgetall** region_key ——获取对应域的所有的key、value

- <b>（重点）获取所有的key或者value</b>
	- **hkeys** region_key ——获取hash中所有的key
	- **hvals** region_key ——获取hash中所有的value
- **hexists** region_key 
- **hdel**、**hlen** region_key

- <b> 增长值</b>
	- **hincrby** region_key key 增值
	- **hincrbyfloat** region_key key 增值
- **hsetnx** region_key key value ——如果不存在则可添加（返回0/1，0已存在，1不存在）

### 3.3 list（双向链表）

- **lpush** key value[value...] ——左添加值
- **rpush** key value[value...]
- **lpop** key ——左删除一个值
- **rpop** key
- **lindex** key index ——获取指定值 （可用负数。-0效果同0）
- **llen** ——获取长度
- **lrange** key start end ——获取片段（start、end可不存在，只是划范围）
- **lrem** key count value ——删除n个值（count = 0/全、 > 0/左、< 0/右 ）
- **ltrim** key startIndex endIndex ——截取value中某范围的值，重新赋给value 
（不能使用负数）
- **rpoplpush** key1 key2 ——将key1中的尾部元素添加到key2值的0位置。 
- **lset** key index value ——设置某个位置的值
- **linsert** key before/after value newValue ——在某个值前面/后面插入一个值 
 （只对添加一个值）

### 3.4 set

- **sadd** key value[value...] ——添加
  若有已存在的，不报错，只加不存在的值
- **srem** key value[value...] ——删除
- **smembers** key —— 获取所有值
- **sismember** key value —— 是否存在该值
- **scard** key —— 获取值的数量，获取长度
- **srandmember** key 整数数量 ——随机获取set中几个值
    整数:无重复值.负数:有可能存在重复值
- **spop** key ——随机出栈
- **smove** key1 key2 key1中的值 ——将key1中某个值移动到key2中
- 数学集合:
1.差集 sdiff key1 key2 （在key1中）
2.交集 sinter
3.并集 sunion

### 3.5 zset——sorted set （散列表）

set的基础上，在value值中添加一个score值（浮点型数据）。
set：key v1 v2 v3...
zset： key scoure1 v1 scoure2 v2...
- **zadd** key score value[score value...] —— 设置值
(值唯一，若值存在则修改score，未存在返回1，存在返回0)
- **zrem** key value ——删除值
- **zrange（/zrevrange）** key start end （withscores）—— 获取(/逆向)片段值（含key）
- **zrangeByScore（/zrev...）** key start（/end） end（/start）—— 获取以Scoure（/逆向）排序片段值
- **zRemrangeByRank** key startNum endNum ——删除片段（以rank排名）
- **zRemrangeByScore** key startScore endScore——删除片段（以Score排名）
  (Score 表示不包含该score
  limit start num 
  withscores
- **zcard** key ——获取数量，scoure与value为一个整体
- **zcount** key scoureStart scoureEnd ——获取某Scoure区间的数量
- **zrank（/zrevrank）** key value ——获取（/逆向）下标值
- **zscore** key value ——获取对应的scoure值

## 4、生存时间（TTL）

- **expire** key num ——设置生存时间（秒）
- **pexpire** key num ——设置生存时间（毫秒）
- **TTL** key —— 查看生成时间
  -1：表示永不过期
-2：表示已过期（即已删除）

- **persist** key —— 删除生存时间

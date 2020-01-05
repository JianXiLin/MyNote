## 步骤：
### 1、添加Redis依赖
```xml
      <!--redis依赖配置-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-redis</artifactId>
        </dependency>
```
### 2、在SpringBoot中设置Redis配置。
在Spring下添加：
```xml
  redis:
    host: localhost # Redis服务器地址
    database: 0 # Redis数据库索引（默认为0）
    port: 6379 # Redis服务器连接端口
    password: # Redis服务器连接密码（默认为空）
    jedis:
      pool:
        max-active: 8 # 连接池最大连接数（使用负值表示没有限制）
        max-wait: -1ms # 连接池最大阻塞等待时间（使用负值表示没有限制）
        max-idle: 8 # 连接池中的最大空闲连接
        min-idle: 0 # 连接池中的最小空闲连接
    timeout: 3000ms # 连接超时时间（毫秒）
```
### 3、同Spring中的RedisTemplate实现对Redis的操作
#### StringRedisTemplate中Redis的字符串操作
- xx.opsForValue().set(key, value); —— 设置值
- xx.opsForValue().get(key); —— 获取值
- xx.opsForValue().increment(key,delta); —— 递增
- xx.expire(key, expire, TimeUnit.SECONDS); ——  设置生存时间，秒为单位
- xx.delete(key); —— 删除值

### 4、对Redis服务进行封装
#### 常数：
```xml
# 自定义redis key
redis:
  key:
    prefix:
      authCode: "portal:authCode:"
    expire:
      authCode: 120 # 验证码超期时间

```
#### service(impl)：
```java
@Service
public class RedisServiceImpl implements RedisService {
    @Autowired
    private StringRedisTemplate stringRedisTemplate;

    @Override
    public void set(String key, String value) {
        stringRedisTemplate.opsForValue().set(key, value);
    }

    @Override
    public String get(String key) {
        return stringRedisTemplate.opsForValue().get(key);
    }

    @Override
    public boolean expire(String key, long expire) {
        return stringRedisTemplate.expire(key, expire, TimeUnit.SECONDS);
    }

    @Override
    public void remove(String key) {
        stringRedisTemplate.delete(key);
    }

    @Override
    public Long increment(String key, long delta) {
        return stringRedisTemplate.opsForValue().increment(key,delta);
    }
}

```
#### controller:






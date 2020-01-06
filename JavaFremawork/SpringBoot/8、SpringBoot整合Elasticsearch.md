## SpringBoot整合Elasticsearch
### 1、添加Elasticsearch依赖
```java
<!--Elasticsearch相关依赖-->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-elasticsearch<artifactId>
</dependency>
```
2、添加SpringBoot配置
```xml
data:
  elasticsearch:
    repositories:
      enabled: true
    cluster-nodes: 127.0.0.1:9300 # es的连接地址及端口号
    cluster-name: elasticsearch # es集群的名称
```


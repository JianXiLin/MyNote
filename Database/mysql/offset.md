# 

## offset+limit --> (select id) + limit

### 1. 问题

使用offset+limit对大数据量进行分页查询，效率低
offset的值越大，效率越低下

### 2. 原因

使用offset进行偏移数据时，仍会查询offset前的数据。数据库在这个过程中，会先从数据文件中查询offset前的数据，确定offset偏移量的位置，再将offset位置前的数据去除。即会读取大量无用的数据行（offset位置前的数据），然后去除

### 3. 解决方法

先通过查询id来获取offset的位置，再从数据文件中获取对应行的数据。

```sql
-- 原sql
select × from table_name
limit 10 offset 9999888

-- 优化后sql——1
select * from table_name a
    (select id from table_name
     order by id asc
     limit 10 offset 9999888) b
where a.id = b.id

-- 优化后sql——2
select * from table_name a
where id > 9999888
limit 10
```

SQL参考--
https://www.db-fiddle.com/f/3JSpBxVgcqL3W2AzfRNCyq/1?ref=hackernoon.com
limit分析--
https://github.com/zhangyachen/zhangyachen.github.io/issues/117
1、order by
（1）结合使用convert函数，将值转换为rgb编码，可进行首字母排序。
eg：
select * FROM test ORDER BY CONVERT(class USING gbk),age;  
（2）ASC(ascend)：升序  
    DESC：降序

2、limit
（1）limit num：获取num个值
（2）limit start，num：获取从start开始的num个值。
（3）limit 可结合update等语句使用
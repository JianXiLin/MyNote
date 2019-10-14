1、order by
结合使用convert函数，将值转换为rgb编码，可进行首字母排序。
eg：
select * FROM test ORDER BY CONVERT(class USING gbk),age;  

2、limit
limit num：获取num个值
limit start，num：获取从start开始的num个值。
1、order by
结合使用convert函数，将值转换为rgb编码，可进行首字母排序。
eg：
select * FROM test ORDER BY CONVERT(class USING gbk),age;  

2、limit
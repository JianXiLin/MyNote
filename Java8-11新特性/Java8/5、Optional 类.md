# <font color=[[4caf50]] > 1 、Optional </font>
[[Java8]]
## <font color=[[4caf50]] >1） 简介 </font>

Optional 是一个 可保存一个T类型的值的容器类。

用于防止出现空指针异常。

Optional 是一个可以为null的对象。

## <font color=[[4caf50]] >2） 类中的方法 </font>

![image.png](https://i.loli.net/2020/02/23/rOgCDjW6ZEbNX9M.png)

- 当明确 t不为空时，可使用：

  ​Optional.of (T t)
  ​get ()

- 当不明确 t 是否为空时，可使用以下方法：

  Optional.ofNullable( T t )
  orElse ( T other )
  
# <font color=#4caf50>Stream API </font>

## <font color=#4caf50>1、简介</font>

### <font color=#4caf50>1.1、作用 </font>

Stream 可对集合进行操作，例如查询、过滤、映射等。

### <font color=#4caf50> 1.2、Stream 与 Collection的区别：</font>

​		Stream是对集合内容进行操作、计算，不存储数据。

​		Collection是对集合内容进行存储。

### <font color=#4caf50> 1.3、Stream 的特点：</font>

 A、==不存储==集合的数据。

 B、==不改变源对象==，返回一个含结果数据的Stream。

 C、Stream的操作是==延时==执行的。

​	   在Stream创建到中间操作，都不会执行，终止时，才执行操作。

 D、==一次性==。执行终止操作后，该Stream对象即关闭，不可用。



## <font color=#4caf50>2、操作步骤 </font>

创建  - > 中间操作 - > 终止

### <font color=#4caf50>2.1、创建Stream</font>

#### <font color=#4caf50> 1）通过Collection 获取。==（已存在集合）==</font>

​	Collection 中的方法：

​		stream() 			—— 获取一个顺序流

​		parallelStream() —— 获取一个并行流

#### <font color=#4caf50> 2）通过Array 获取。==（数组）== </font>

​	Array.stream( 数组 )  

#### <font color=#4caf50> 3）使用Stream的静态方法 of（）。==(value…)== </font>

​	Stream.of ( value… )

#### <font color=#4caf50> 4) 创建==无限流==  </font>

​		Stream.iterate     —— 迭代

```java
 public static<T> Stream<T> iterate (final T seed, final UnaryOperator<T> f)
     // seed    	      —— 起始值
     // UnaryOperator  —— 一个参数、一个返回值，同一类型 (函数式接口)
```

​		Stream.generate —— 生成 

```java
public static<T> Stream<T> generate(Supplier<T> s)
    // Supplier —— 无参数、一个返回值 （ 供应型函数式接口,例如Math.ramdom() ）
```

eg:

```java
//1. Collection 提供了两个方法  stream() 与 parallelStream()
List<String> list = new ArrayList<>();
Stream<String> stream = list.stream(); //获取一个顺序流
Stream<String> parallelStream = list.parallelStream(); //获取一个并行流

//2. 通过 Arrays 中的 stream() 获取一个数组流
Integer[] nums = new Integer[10];
Stream<Integer> stream1 = Arrays.stream(nums);

//3. 通过 Stream 类中静态方法 of()
Stream<Integer> stream2 = Stream.of(1,2,3,4,5,6);

//4. 创建无限流
//迭代
Stream<Integer> stream3 = Stream.iterate(5, (x) -> x + 2).limit(10);
stream3.forEach(System.out::println);

//生成
Stream<Double> stream4 = Stream.generate(Math::random).limit(2);
stream4.forEach(System.out::println);
```

### <font color=#4caf50>2.2、中间操作 </font>

#### <font color=#4caf50>1) 筛选与切片 </font>

![image.png](https://i.loli.net/2020/02/23/rL7BiIFy6jZnJWM.png)

```java

```



#### <font color=#4caf50>2) 映射 </font>

​				 ![image.png](https://i.loli.net/2020/02/23/6fSIO42zleg3Z5q.png)



#### <font color=#4caf50>3) 排序 </font>

![image.png](https://i.loli.net/2020/02/23/oRnDWVbjGCvda2L.png)

### <font color=#4caf50>2.3、终止操作</font>

#### <font color=#4caf50>1) 匹配与查找</font>

![image.png](https://i.loli.net/2020/02/23/QBpXJuSWi8ebz4Z.png)

![image.png](https://i.loli.net/2020/02/23/fQ9hzb4lNoVILWx.png)



#### <font color=#4caf50>2) 规约</font>

![image.png](https://i.loli.net/2020/02/23/fBVGEYD2vwP7Q8F.png)







#### <font color=#4caf50>3) 收集</font>

![image.png](https://i.loli.net/2020/02/23/X53iSGPYghVCAEM.png)

![image.png](https://i.loli.net/2020/02/23/UcHx3KMrJYLqzO2.png)
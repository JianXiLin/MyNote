## Lambda表达式
### 1、简介
	Lambda表达式类似js中的匿名函数。可简洁代码。
- “->” 为Lambda表达式的操作符。
- 格式：
	表达式的参数 -> 执行的功能
### 2、	例子
#### 2.1、无参、无返回值
```java
Runnable r = （）-> System.out.println("...");
```
#### 2.2、带参
```java
Consumer<String> fun = (args) -> System.out.print("");
```
#### 2.3、带参、返回值

## Lambda表达式
### 1、简介
	Lambda表达式类似js中的匿名函数。可简洁代码。
==仅针对于接口，且接口只有一个抽象方法。==
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
//仅一个参数时，小括号可省略
Consumer<String> fun = arg01 -> System.out.print("");
Consumer<String> fun = (arg01,arg02) -> System.out.print("");
```
#### 2.3、带参、返回值
```java
//由于"类型推断"，数据类型可省略
BinaryOperator<Long> bo = (x，y) -> {
    System.out.print();
    return x+y;
}
```
# ES6

## 1. ES5内容

### 1.1. use strict

&emsp;&emsp;指定js的运行模式为严格模式。该模式用于严格化JavaScript的语法，使JavaScript的语法更加严谨，提高代码的安全性。

限制内容:

- 禁止重名变量
- 禁止在自定义函数中将this指向window
- 构造函数需通过new来实例化对象
- 函数必须声明在顶层

```js
"use strict"
console.log(s)  //undefined
var s = 'a';

```

## 2. ES6

### 2.1. 定义变量

#### let、const

🔹 var变量的缺陷：

- 可重复声明
- 无块区域作用域
- 无法限制修改

🔹 let、const变量的特点：

|特点|let|const|
|-|-|-|
|1|不可重复定义||
|2|块级作用域|
|3|可修改|不可修改|

#### 解构赋值

```js
//数组
let [a,b,c=3] = [1,2];              //a=1,b=2,c=3
let [a,b,c=3] = [1,2,null];         //a=1,b=2,c=null
let [a,b,c=3] = [1,2,undifined];    //a=1,b=2,c=3
//对象
let {a,b} = {b:2,a:1}
(a = {a:3})                         //重复赋值
//字符串
let [a,b,c] = "abc";                //a='a',b='b',c='c'
```

### 2.2. 数组操作

#### 循环遍历

🔹 for...of 循环
&emsp;&emsp;可用于循环数组或Map

```js
for (let val of array){}
```

🔹 fonEach

```js
var arr = [1, 1, 4, 9, 4]
var result = arr.forEach(item => console.log(item))
var result = arr.forEach((item, index)=>console.log(item, index))
```

#### filter过滤器

`xx.filter(func(e))`, 保留 func(e) 返回值为true的元素e

```js
let arr = [
    { title: 'phone01', price: 5000 },
    { title: 'phone02', price: 2000 },
]
let result = arr.filter(json => json.price >= 4000)

//result = [{ title: 'phone01', price: 5000 }]

```

#### map 映射

`xx.map(func(e))`,将各个值（e） 映射为新的值（func(e)的返回值）

```js
let score = [18, 100, 88, 10]
let result = score.map(item => item == 100 ? '100' : '0')
// result = ['0','100','0','0']

```

#### reduce 组合

`xx.reduce(func(temp,item,index))`,将多个值组合为一个值，例如累加、拼接等。

temp:上一个值，item:当前值，index:索引(从1开始)

```js
var arr = [1, 2, 3, 4]
var result = arr.reduce(function (tmp, item, index) {
    return tmp + item
})
// result = 10

```

### 2.3. 字符串

#### 字符串模板

```js
let s = "defg";
let string = ` a
b c ${s}`;

// string =  a
//           b c defg
```

#### startsWith、endWith方法

```js

var url = 'abcdefg'
console.log(url.startsWith('ab'))  // true
console.log(url.endsWith('fg'))    // true
```

#### 2.4. 对象

类似Java语法，
继承：  extends
构造器： constructor()
父构造器： super()

### 2.5. 函数

#### 箭头函数

```
()=>{}
```

### 2.6 Object.assign()

[参考](https://blog.csdn.net/qq_30100043/article/details/53422657)
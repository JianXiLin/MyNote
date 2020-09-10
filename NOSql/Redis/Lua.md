# Lua

## 1. 简介

## 2. Lua安装 使用

安装

```shell
# ubuntu
sudo apt install lua5.3

# arh-- manjaro
yay -Sy lua5.3

```

## 3. Lua语法

### 3.1. 符号

算术、关系运算符同其它语言，仅不等于号不相同，为`~=`
逻辑运算符为 and or not

#### 注意

🔹and or的值非true、false，而是与操作数相关
eg:

```lua
-- 结果为10
false or 10
-- 结果为29
8 and 9 and 29
```

### 3.2. 数据类型

|类型|值\|说明|
|-|-|
|`nil`|空值(同redis中的nil)|
|Boolean|false 和 nil 为false,其它为true|
|Number|数值|
|String|字符串,可用'',"",[[]]来表示单行字符串和多行字符串|
|`Function`|函数,即函数可作为参数|

#### String注意点

🔹 字符串与数值做算术运算时，会自动转为Numbers类型
🔹 字符串的连接符号为 `..`,且连接数字时，连接符与数字间需空格隔开

### 3.3. 函数及控制语句

函数和控制语句都需`end结尾`

函数语法类似于python

#### 函数

```lua
-- 普通函数
function name(params)
    return xxx
end

-- 多参数使用
function name(params,...)
    other = {...}
    return xxx
end
```

#### if

```lua
-- 单if
if conditions then
    xxx
end
-- 多if
if conditions then
    xxx
elseif conditions then
    xxx
end
```

#### 循环

for

```lua
-- 循环3次
for i=1，3 do
    xxx
end
-- 
```

while

```lua
while conditions do
    xxx
end
```

### 3.4 变量

默认为全局变量

临时变量：

```lua
local 变量名称 = 值
```

## 4. redis使用lua

### 4.1. redis调用lua

```shell
redis-cli --eval xxx.lua key1 key2 ... , 参数...
```

> 参数前的 , 的前后都需要加上空格

### 4.2. lua中使用redis

#### 4.2.1. 接收key

KEYS[number]

#### 4.2.2. 接收参数

ARGS[number]

#### 4.2.3.调用redis命令

redis.call("指令",参数)

#### 4.2.4.案例

##### 通过lua实现 某key的乘法运算

lua脚本：

```lua
local num = redis.call("get",KEYS[1])

if not num then
        redis.call("SET",KEYS[1],0)
        return 0
else
        local result = num * ARGV[1];
        redis.call("SET",KEYS[1],result);
        return result;
end
```

调用lua脚本:

```shell
# 将a的值乘以10
redis-cli --eval test.lua a , 10
```

#####  
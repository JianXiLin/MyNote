#

## 1. Failed to resolve directive: key

### 1.1 问题描述

Vue项目运行报错 Failed to resolve directive: key
![vue/20200815105434](https://jianxi-md-pics.oss-cn-beijing.aliyuncs.com/note-md-imgs/vue/20200815105434.png?x-oss-process=image/resize,p_100/sharpen,100)

### 1.2 导致原因

v-key指令不存在
Vue指令书写错误,:key错写成v-key

### 1.3 解决方法

将v-key 修改成 :key

### 1.4 补充

在v-for中,需要给每个循环项添加一个不同于其它项的标识,在标签中添加一个key属性即可.不需要vue指令,也不存在v-key指令.

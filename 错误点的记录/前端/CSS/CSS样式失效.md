# [总结]CSS样式失效的原因

## 1. 在外部CSS中不能使用单行注释

在CSS选择器上使用单行注释，将导致该注释下的这个CSS选择器里面的内容失效。
如下代码所示,“.post-readmore__link{}”将失效,“.post-readmore__link:hover{}”有效，不会受到影响。

```css
//readmore button （第一个CSS选择器无效）
.post-readmore__link{
    background-color: [[27ae60]];
}
.post-readmore__link:hover{
    background-color: [[1f7f47]];
}
```

而单行注释添加在CSS样式内，该CSS仍有效

```css
.post-readmore__link{
    background-color: [[27ae60]]; //green （有效）
}
```

若需要使用注释，可使用多行注释。如下：

```css
/* readmore button */
.post-readmore__link{
    background-color: [[27ae60]]; //green （有效）
}
```

## 2. CSS选择器优先级低于原有的CSS选择器

### 2.1. 当多个CSS选择器选择目标相同时

🔹 级别相同，后加载的CSS选择器覆盖前CSS选择器中相同的样式。
🔹 级别不同，高级别CSS选择器覆盖低级别CSS选择器中相同的样式。

### 2.2. 级别判断

🔹 内嵌式CSS级别高于外部CSS，可视为最高级别。

🔹 #==ID== > .==Class==、属性选择器([type="button"])和伪类(:hover)  >  ==标签==类型和伪元素(::after)
级别计算案例：
![keng/CSS/20200511114245](https://jianxi-md-pics.oss-cn-beijing.aliyuncs.com/note-md-imgs/keng/CSS/20200511114245.png?x-oss-process=image/resize,p_100/sharpen,50)
图片内容来源：[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#Specificity_2)

🔹 使用!important覆盖任何样式声明

```css
.post-readmore__link{
    background-color: [[27ae60]] !important;
}
```

对于都添加！important的样式，则再由其选择器优先级来判断。

## 3.chrome浏览器存在缓存

🔹 原因:
&emsp;&emsp;chrome浏览器为了提高加载效率，缓存了JS、CSS文件，故修改后的文件无法立即生效。

🔹 解决方法：
方式一：来回切换开启缓存来重置缓存内容（不一定有效）。
&emsp;&emsp;F12打开开发者工具，进入Network，在Disable cache前打勾✔，刷新页面。再把Disable cache关闭，取消✔，再次刷新页面。

![keng/CSS/20200511130923](https://jianxi-md-pics.oss-cn-beijing.aliyuncs.com/note-md-imgs/keng/CSS/20200511130923.png?x-oss-process=image/resize,p_100/sharpen,50)

方式二：来回切换开启缓存来重置缓存内容
&emsp;&emsp;F12打开开发者工具，然后在浏览器的刷新按钮右击，选择“清空缓存并硬性重新加载”

![keng/CSS/20200511154213](https://jianxi-md-pics.oss-cn-beijing.aliyuncs.com/note-md-imgs/keng/CSS/20200511154213.png?x-oss-process=image/resize,p_100/sharpen,50)

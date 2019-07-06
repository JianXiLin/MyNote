### 1、jsp页面中无法通过类.属性获取数值。
#### 错误： 
![error](https://i.loli.net/2019/07/06/5d2091a43b68411532.png)  
![error](https://i.loli.net/2019/07/06/5d2091c0d28e841392.png)  
#### 问题：  
    这是由于jsp在通过对象获取属性值时，  
    是通过对象中的get方法进行获取值。  
    而原对象缺get方法。  
  
###  2、Cannot forward after response has beencommitted  （请求多次提交。）  
![error](https://i.loli.net/2019/07/06/5d2092d415b7037090.png)   
参考：https://blog.csdn.net/ljheee/article/details/51049773

### 3、IDEA创建servlet时找不到 import javax.servlet...相关类包的问题  
#### 问题：
	缺少tomcat的servlet-api.jar。  
#### 解决方法： 
	在lib中导入该包
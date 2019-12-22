## 一、JavaScript方式：
### 1、创建对象
	XMLHttpRequest，ActiveX(IE5、IE6)

	eg:xmlhttp = new XMLHttpRequest();
### 2、向服务器发送请求
	open（method,url,async）
	send(String)--用于post

	eg：get：			
		xmlhttp.open("GET","/try/ajax/demo_get.php?t=" +Math.random(),true);
		xmlhttp.send();	
	   post:
		xmlhttp.open("POST","/try/ajax/demo_post2.php",true);
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp.send("fname=Henry&lname=Ford");

### 3、onreadystatechange事件（函数）——回调函数
	XMLHttp中的属性：
	（1）readyState
		0: 请求未初始化
		1: 服务器连接已建立
		2: 请求已接收
		3: 请求处理中
		4: 请求已完成，且响应已就绪	
	（2）status	
		200: "OK"
		404: 未找到页面
	获取返回信息：
		XMLHttp.responsetext
		XMLHttp.responseXML

## 二、JQuery方式
### 1、例子
	  $.ajax({ 
		url: "test.html", 
		context: document.body,
		success: function(){
       	 	 	$(this).addClass("done");
      		 }
	 });
### 2、对象
	data(可为JSON)，url，type、datatype
		

## 三、跨域问题
       由于JavaScript中的“同源策略”，即JavaScript出于安全考虑，
  	禁止浏览器中的JavaScript访问其它服务器。对于域名、端 
 	口、协议中，有任意一个出现与JavaScript所处环境不一样，
  	则为跨域请求。
   
  ### 解决方法一
	设置响应头内容"Access-Control-Allow-Origin"，  
	内容为将跨域请求的url 或者为 *
 	
	例如：
	1.使用tomcat服务器、servlet
        （可封装在filter中）
              response.setHeader("Access-Control-Allow-Origin", "*");     //允许所有请求
               response.setHeader("Access-Control-Allow-Origin", "http://www.baidu.com:80");    //只允许来自。    http://www.baidu.com:80的请求
    2.使用node.js 
       
### 解决方法二
    使用JSONP 
      JSONP是JSON的的一种使用模式。而JSON则是一个数据交换格式（key-value）。
     JSONP模式：在请求中传入callback属性，其为回调函数，共同被请求的服务器返回相应的JSON数据，其数据作为回调函数的参数。
      实际上服务端返回的是一段可执行的JavaScript代码，包含 “ 回调函数名（JSON）”
     由于Html中Script标签具有开放性，所以可以使用该标签的src属性请求需跨域的服务器。
      eg：
       

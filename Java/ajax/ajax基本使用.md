## JavaScript方式：
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

## JQuery方式
### 1、
	```$.ajax({ 
		url: "test.html", 
		context: document.body,
		 success: function(){
        $(this).addClass("done");
      }});

```

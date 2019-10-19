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

### 3、onreadystatechange事件
	readyState	
存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。

0: 请求未初始化
1: 服务器连接已建立
2: 请求已接收
3: 请求处理中
4: 请求已完成，且响应已就绪
status	200: "OK"
404: 未找到页面
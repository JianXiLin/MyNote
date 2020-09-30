#### 1、Git master branch has no upstream branch的解决:  
	转载自：  
	https://blog.csdn.net/benben_2015/article/details/78803753  
#### 2、error: failed to push some refs to '...'
	本地仓库缺少远程仓库的内容 
	解决方法：  
		- pull\close（git pull --rebase origin master）	
		- 强制提交   
		- 或参考  
		- https://www.jianshu.com/p/ea6ec80ad5f2
#### eg：![强制提交](https://i.loli.net/2019/07/05/5d1e2d98b7bc069700.png)  

#### 3、超出大小限制
	
	error: RPC failed; HTTP 413 curl 22 The   
		requested URL returned error: 413

	参考  
	https://www.cnblogs.com/feiyujun/p/7755764.html  
 	https://www.cnblogs.com/lihaiping/p/6021813.html  
	解决方法：  
	git config http.postBuffer 524288000

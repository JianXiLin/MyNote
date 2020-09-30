### 错误信息如下：
![title](https://i.loli.net/2019/12/03/9UDP5r3LuBz6cHj.png)
#### 出错原因：
	1、排除掉url填写出错。
 	2、由于后台对该url请求的处理中，没有设置注解
	@ResponseBody 导致该问题我出现。
![title](https://i.loli.net/2019/12/03/9hF3TZWUBS8cr4C.png)
#### 疑惑：
	为何在后台处理请求时，在参数中添加HttpResponse，
	也可解决该错误出现？
![title](https://i.loli.net/2019/12/03/HEMyO34jh2iARcI.png)

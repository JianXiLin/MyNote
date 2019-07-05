### 1、 <-resultMap->中的property的值应与实体类中的属性一致。
	<resultMap>可解决实体类属性名称与数据库列名称不一致的问题。   
	同时也常用于n+1查询方式中。
![one](https://i.loli.net/2019/07/05/5d1eee00c28aa38594.png)
### 2、sqlSession.selectMap("mapper名"，"实体类中作主键的属性")  
![two](https://i.loli.net/2019/07/05/5d1eee00c582c51040.png)


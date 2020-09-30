## MongoDB
### 一、简介
	MongoDB是一个非关系型数据库中的文档数据库。
	MongoDB的数据模型是面向文档，可存储JSON。
### 二、安装
#### 1. MongoDB的版本偶数版本为稳定版，奇数 版本为开发版。 
#### 2. 启动配置。
- 命令行窗口启动服务器，窗口关闭服务器即关闭
（1）可将MongoDB的bin目录添加到path环境变量中
（2）在c盘下创建data文件夹、并在data下创建db文件夹
（3）cmd ——> mongod (启动MongoDB服务器)
（4）指定db路径和端口（可选）
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; mongod --dbpath 路径 --port 端口号 	
- 服务方式启动服务器
（1）在安装目录下添加mongod.cfg文件，内容如下：
```
systemLog: 
	destination: file 
	path: c:\data\log\mongod.log //日志路径 
storage: 
	dbPath: c:\data\db //数据库文档文件路径

```
（2）在管理员模式下的安装路径的cmd下，输入以下命令：
```
sc.exe 
create MongoDB binPath= "\"mongo bin路径\mongod.exe\" 
--service -config=\"mongo路径\mongod.cfg\"" 
DisplayName= "MongoDB" start= "auto"
```
### 三、启动客户端
命令：mongo。
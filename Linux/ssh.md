#

## SSH相关操作

1.查看ssh版本（V为大写）

```cmd
ssh -V
```

2.检查是否安装

```cmd
sudo ps -e |grep ssh
```

3.启动|暂停 ssh服务

```cmd
// 启动
sudo service ssh start
// 暂停
sudo service ssh stop
```

4.安装ssh

```cmd
sudo apt-get install ssh
```

5.安装ssh客户端

```cmd
sudo apt-get install openssh-server
```

6.连接服务器

```cmd
ssh ip地址
ssh 角色名称@ip地址

参数:
 -l 角色名称
 -p 端口号
 ...
```


[👉其它配置](https://blog.csdn.net/netwalk/article/details/12952051)

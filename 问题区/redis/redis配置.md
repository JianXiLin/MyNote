# redis配置出错

## 1. 在CentOS7.06安装redis时，make出错

🔹 错误信息：

```cmd
....
server.c: In function ‘writeCommandsDeniedByDiskError’:
server.c:3788:1: warning: control reaches end of non-void function [-Wreturn-type]
 }
 ^
server.c: In function ‘iAmMaster’:
server.c:4962:1: warning: control reaches end of non-void function [-Wreturn-type]
 }
 ^
make[1]: *** [server.o] Error 1
make[1]: Leaving directory `/opt/redis-6.0.4/src'
make: *** [all] Error 2

```
🔹 解决方法
这是由于gcc版本低于5.3。

```cmd
// 安装gcc 9
yum -y install centos-release-scl
yum -y install devtoolset-9-gcc devtoolset-9-gcc-c++ devtoolset-9-binutils
scl enable devtoolset-9 bash
gcc -v
//执行以下命令永久使用该gcc版本
echo "source /opt/rh/devtoolset-9/enable" >> /etc/profile
```

## 2. 外部无法连接redis

原因：
    1) 配置文件中绑定了ip | 进入了保护模式
    2) 被防火墙拦截

### 2.1. 去除掉ip绑定和退出保护模式

编辑redis的配置文件，关闭保护模式，配置完成后重启redis。

🔹 去除ip绑定

![redis/20200605080310](https://jianxi-md-pics.oss-cn-beijing.aliyuncs.com/note-md-imgs/redis/20200605080310.png?x-oss-process=image/resize,p_100/sharpen,50)

🔹 退出保护模式

![redis/20200605080926](https://jianxi-md-pics.oss-cn-beijing.aliyuncs.com/note-md-imgs/redis/20200605080926.png?x-oss-process=image/resize,p_100/sharpen,50)

🔹 重启redis

```cmd
//关闭redis
redis-cli shutdown
//启动redis
redis-server ./6379.conf(配置文件的路径)
```

### 2.2. 设置防火墙

🔹 方案一：开放相应的端口（eg：6379端口）

```cmd
//开放6379
firewall-cmd --zone=public --add-port=6379/tcp --permanent

//重启防火墙
systemctl restart firewalld

//redis关闭
redis-cli -h 127.0.0.1 -p 6379 shutdown
//启动


```

🔹 方案二：关闭防火墙

```cmd
// 查看防火墙状态
systemctl status firewalld
// 关闭防火墙
systemctl stop firewalld
```

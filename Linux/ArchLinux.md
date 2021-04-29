#

## 重新调整分区

以调整 挂载/opt的分区空间为例子

<b type="h">1. 使用df查分区</b>

```bash
df

文件系统           1K-块     已用      可用 已用% 挂载点
dev              6013036        0   6013036    0% /dev
run              6022960     1708   6021252    1% /run
/dev/sda8      113402108 26406660  82054804   25% /
tmpfs            6022960   143004   5879956    3% /dev/shm
tmpfs               4096        0      4096    0% /sys/fs/cgroup
tmpfs            6022960    75488   5947472    2% /tmp
/dev/sda10      83585248  9371812  69897892   12% /opt
/dev/sda12     205375464 90630328 104242992   47% /home
/dev/sda7         613184      308    612876    1% /boot/efi
tmpfs            1204592      128   1204464    1% /run/user/1000

```

由df信息可知,挂载/opt的文件系统名称为/dev/sda10

<b type="h">2. 使用fuser 关闭/dev/sda10上的程序</b>

```bash
fuser -m -v -k /dev/sda10
```

<b type="h">3. 借助工具KDE分区助手完成对/opt的空间大小的修改 </b>

1)卸载/opt
2)重新调整/opt分区大小
3)挂载分区到/opt
4)执行操作

<b type="h">4. 查看/etc/fstab</b>

检查自动挂载配置文件,查看`/etc/fstab`文件中/opt的uuid是否与分区助手中`/opt的uuid`一致.

<b type="h" >5. 修改网易云字体大小</b>

修改 /opt/netease/netease-cloud-music/netease-cloud-music.bash内容

（在最后一行中添加--force-device-scale-factor=1.6）

```bash
#!/bin/sh
HERE="$(dirname "$(readlink -f "${0}")")"
export LD_LIBRARY_PATH="${HERE}"/libs
export QT_PLUGIN_PATH="${HERE}"/plugins 
export QT_QPA_PLATFORM_PLUGIN_PATH="${HERE}"/plugins/platforms
exec "${HERE}"/netease-cloud-music --force-device-scale-factor=1.2 $@
```

<b type="h">6. 修改微信字体大小</b>

```bash
env WINEPREFIX="$HOME/.deepinwine/Deepin-WeChat" winecfg
```

<b type="h">7. 搜狗输入法</b>

- 隐藏搜狗浮窗

修改文件`~/.config/sogoupinyin/conf/env.ini`中的`StatusAppearance`为`0`。

```bash
StatusAppearance=0
```

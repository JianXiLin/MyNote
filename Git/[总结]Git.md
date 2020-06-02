# Git内容总结


> Git作为一个版本控制的工具,在我们学习过程中是必不可少的。不仅是Git仓库GitHub、Gitee，还是在编辑器VSCode，Git在管理文件、控制文件版本、回退文件、多人协作、并发开发等有着重要的地位。
>以下将对Git的基本使用继续总结、记录。

## 1. Git与SVN的简单区分

🔹 实现方式上
&emsp;SVN : 集中版本控制。SVN所控制的所有版本内容存储在单一服务器上，本地用户在未联网的情况下，只能看到所同步的版本内容。
&emsp;Git : 分布式版本控制。不同于SVN，本地的每个本地用户都能获取到所有版本内容，且Commit操作是在用户本地进，之后再push到远端仓库。
&emsp;Git相比SVN，空间成本增加了，且安全性也有所下降，但也减少了数据损失而无法恢复的风险。

🔹 克隆多分支项目
&emsp;SVN克隆所有分支的内容
&emsp;Git克隆master分支,其它分支只获取相关元素，节省了时间。

## 2. Git的基本使用

### 2.1 配置信息

🔹 获取配置信息：

```cs
// 获取全部配置信息
git config -l
// 获取系统级别配置信息，对应 \git主目录\etc\gitconfig
git config --system -l
// 获取用户(全局)级别的配置信息，对应 \user\Administrator\.gitconfig
git config --global -l
```

🔹 配置全局的用户信息

```cs
git config --global user.name "用户名"
git config --global user.email 邮箱
```

### 2.2 操作仓库内容

🔹 初始化本地仓库

```cs
git init
```

🔹 添加到缓存并提交到本地仓库

```cs
git add .  
git commit -m "注释\提交的说明信息"  
```

🔹 提交到远程仓库

```cs
git push 地址 master
```

🔹 克隆远程仓库 \ 获取远程代码

```cs
git clone 地址 分支(eg:master)
git pull 地址 分支(eg:master)
```

🔹 查看本地文件状态

```cs
git status
```
![git/20200513120026](https://jianxi-md-pics.oss-cn-beijing.aliyuncs.com/note-md-imgs/git/20200513120026.png?x-oss-process=image/resize,p_50/sharpen,100)

## 3.HEAD

HEAD 指当前分支的最近一次提交
head 指commit对象

head 包含 HEAD

🔹 占位符 ~ 与 ^

\~ ： 表示祖先commit
&emsp;&emsp;eg : HEAD~ = HEAD~1 = 前一代commit（父辈）
&emsp;&emsp;&emsp;HEAD~~ = HEAD~2 = 前两代commit（爷爷辈）
^ :  单个父辈时，与 ~ 基本一致。
&emsp;&emsp;多个父辈时，^ = ^1 = 第一个父辈

🔹 案例

![git/20200512233813](https://jianxi-md-pics.oss-cn-beijing.aliyuncs.com/note-md-imgs/git/20200512233813.png?x-oss-process=image/resize,p_50/sharpen,100)

```cs
G   H   I   J
 \ /     \ /
  D   E   F
   \  |  / \
    \ | /   |
     \|/    |
      B     C
       \   /
        \ /
         A
A =      = A^0
B = A^   = A^1     = A~1
C = A^2  = A^2
D = A^^  = A^1^1   = A~2
E = B^2  = A^^2
F = B^3  = A^^3
G = A^^^ = A^1^1^1 = A~3
H = D^2  = B^^2    = A^^^2  = A~2^2
I = F^   = B^3^    = A^^3^
J = F^2  = B^3^2   = A^^3^2

```

[👉此内容参考来源](https://scarletsky.github.io/2016/12/29/tilde-and-caret-in-git/)

## 4. 信息查看

🔹 获取本地文件状态

```cs
git status
```

🔹 获取commit历史信息

```cs
git log
git log --oneline
```

🔹 查看当前索引(暂存区)

```cs
git ls-files -s
```

🔹 显示了 HEAD 快照实际的目录列表

```cs
git cat-file -p HEAD
```

🔹 查看HEAD的当前指向

```cs
cat .git/HEAD
```

🔹 查看HEAD各个祖先

```cs
git rev-parse HEAD~ //前一个祖先(父辈)
```

## 5. 撤销操作

🔹 git checkout [不写|HEAD] \<file> //旧版

🔹 git  restore [不写|--staged] \<file> //新版

🔹 git reset [--hard|soft|mixed(默认)|merge|keep] [commit|HEAD]
(1) --soft : 回退到暂存区状态
(2) --mixed : 回退到本地状态（本地修改的内容存在）
(3) --hard : 回退到某次提交，清除所有历史状态，包括本地文件内容。

🔹 git revert HEAD^
    重新提交，保留历史记录
    git reset不保留历史记录
    ![git/20200513010450](https://jianxi-md-pics.oss-cn-beijing.aliyuncs.com/note-md-imgs/git/20200513010450.png?x-oss-process=image/resize,p_50/sharpen,100)
    ![git/20200513120122](https://jianxi-md-pics.oss-cn-beijing.aliyuncs.com/note-md-imgs/git/20200513120122.png?x-oss-process=image/resize,p_80/sharpen,100)

🔹 重写最后一次commit

```cs
 git commit --amend -m
```

![git/20200513114355](https://jianxi-md-pics.oss-cn-beijing.aliyuncs.com/note-md-imgs/git/20200513114355.png?x-oss-process=image/resize,p_100/sharpen,50)

## 6. 冲突解决

🔹 提交时，发生冲突

执行git pull，发生冲突后，git会将两个版本的内容合并在一起。
解决：先git status，查找发生冲突的文件，自行修改冲突内容后再提交，pull

🔹 回退commit，发生冲突

执行revert HEAD^，发生冲突。
解决：同样查看冲突、修改冲突后，执行git revert --continue。

## 7. Git的分支处理

🔹 常用命令

```cs

# 列出所有本地分支
git branch

# 列出所有远程分支
git branch -r

# 新建一个分支，但依然停留在当前分支
git branch [branch-name]

# 新建一个分支，并切换到该分支
git checkout -b [branch]

# 切换分支
git checkout [branch]

# 合并指定分支到当前分支
$ git merge [branch]

# 删除分支
$ git branch -d [branch-name]

# 删除远程分支
$ git push origin --delete [branch-name]
$ git branch -dr [remote/branch]

```

[👉此内容来源](https://mp.weixin.qq.com/s/Bf7uVhGiu47uOELjmC5uXQ)

>参考文章：
[狂神说 聊Git📘](https://mp.weixin.qq.com/s/Bf7uVhGiu47uOELjmC5uXQ)
[CSDN 奋飛 Git Pro深入浅出（二）📘](https://blog.csdn.net/ligang2585116/article/details/51816372#t7)


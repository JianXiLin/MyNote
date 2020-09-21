#

## 1. 在linux下因文件权限限制无法启动ES

### 1.1. 问题描述

由于文件权限问题，而使用sudo来运行es，将将报以下错误，即无法使用root角色来运行es

```bash
org.elasticsearch.bootstrap.StartupException:
java.lang.RuntimeException: can not run elasticsearch as root

```

### 1.2. 解决方法

创建新角色，并赋予新角色操作es文件到权限

1. 创建新角色

```bash
useradd es
```

2.赋予新角色权限

```bash
# /opt/elasticsearch 为 elasticsearch的主目录
sudo chown -R es:es /opt/elasticsearch
```

## 2. 无法映射Elasticsearch的data文件

```bash
uncaught exception in thread [main]
java.lang.IllegalStateException: failed to obtain node locks, tried [[/usr/share/elasticsearch/data]] with lock id [0]; 
    maybe these locations are not writable or multiple nodes were started without increasing [node.max_local_storage_nodes] (was [1])?
Likely root cause: java.nio.file.AccessDeniedException: /usr/share/elasticsearch/data/nodes/0/node.lock
```

## 3. 无法从5.6.12 升级至 7.9.1

```bash
2020-09-21T02:00:14.431861124Z "Caused by: java.lang.IllegalStateException: The index [[.kibana/EDK_WpUDQ2CWtjVHTzJ2KQ]] was created with version [5.6.12] but the minimum compatible version is [6.0.0-beta1]. It should be re-indexed in Elasticsearch 6.x before upgrading to 7.9.1.",
```

[](https://www.elastic.co/guide/en/elasticsearch/reference/current/setup-upgrade.html)
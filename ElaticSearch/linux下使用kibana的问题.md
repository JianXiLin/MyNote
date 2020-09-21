
#

## 1. 配置kibana.yml中的elasticsearch.hosts出错

错误信息如下：

```bash
error  [15:56:53.624] [fatal] ValidationError: child "elasticsearch" fails because ["hosts" is not allowed]
    at Object.exports.process (/usr/share/kibana/node_modules/joi/lib/errors.js:181:19)
    at _validateWithOptions (/usr/share/kibana/node_modules/joi/lib/any.js:651:31)
    at root.validate (/usr/share/kibana/node_modules/joi/lib/index.js:121:23)
    at Config._commit (/usr/share/kibana/src/server/config/config.js:114:35)
    at Config.set (/usr/share/kibana/src/server/config/config.js:84:10)
    at Config.extendSchema (/usr/share/kibana/src/server/config/config.js:57:10)
    at /usr/share/kibana/src/server/plugins/plugin_collection.js:19:12
    at next (native)
    at step (/usr/share/kibana/src/server/plugins/plugin_collection.js:49:191)
    at /usr/share/kibana/src/server/plugins/plugin_collection.js:49:361

```

### 1.1. 原因

kibana5.6.12并不使用elasticsearch.hosts，而是使用elasticsearch.url
[配置信息参考](https://www.elastic.co/guide/en/kibana/6.5/docker.html)

### 1.2. 解决方法

方法1. 使用elasticsearch.url
方法2. 使用高版本的kibana

## 2. max virtual memory areas vm.max_map_count [65530] is too low

完整错误信息：

```shell
ERROR: [1] bootstrap checks failed
        [1]: max virtual memory areas vm.max_map_count [65530] is too low, increase to at least [262144]
    [2020-09-20T16:20:32,478][INFO ][o.e.n.Node               ] [mbADzWm] stopping ...
    [2020-09-20T16:20:32,531][INFO ][o.e.n.Node               ] [mbADzWm] stopped
    [2020-09-20T16:20:32,532][INFO ][o.e.n.Node               ] [mbADzWm] closing ...
    [2020-09-20T16:20:32,540][INFO ][o.e.n.Node               ] [mbADzWm] closed

```

### 2.1. 解决方法

修改vm.max_map_count的值

1） 临时修改（重启后恢复）

```bash
sudo sysctl -w vm.max_map_count=262144
```

2） 永久性修改

```bash
echo "vm.max_map_count=262144" > /etc/sysctl.conf
sysctl -p
```

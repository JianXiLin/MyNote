# RESTful API

> REST为一种设计规范
> 通过HTTP来描述操作,URL来定位资源

## 1. HTTP状态码

||具体|类别|描述|
|-|-|-|-|
|1XX|---|信息性|接受到请求且正在处理|
|2XX|---|成功性|请求处理完毕|
||200|| **OK** 请求成功|
||201|| **Created** 创建成功|
||204|| **No Content** 处理成功，但没返回实体内容，无消息体|
|3XX|---|重定向性|需要进行附加操作来完成操作|
||300|| **Multiple Choice** 提供多个内容可选择|
|4XX|4XX|客户端错误|服务端无法处理请求|
||400|| **Bad Requset** 语义有误，参数有误|
||404|| **Not Found** 未在服务器上找到相应的资源|
||405|| **Method Not Allowed** 该请求方法不被允许，例如发送PUT请求到不支持PUT方法的服务器|
||409||**Conflict** 请求的资源发生冲突，返回请求时，需提供修改建议（eg : 差异比较）|
|5XX|---|服务端错误|服务端处理请求出错|
||500|| **Internal Server Error** 服务器不知如何处理该请求|
||504|| **Gateway Timeout** 获取数据超时|
> PUT 与 POST：
> PUT被定义为idempotent（幂等）方法，而POST则不是
> 即重复多个请求，PUT的相应结果是一致的，POST则不是。
>
> - header("HTTP/1.0 409 Conflict", true);
> true：已发送相同的header时，后续将与前面的结果一致。
> false：结果可不一致，即相同请求可并存。

## 2. RESTful设计规则

|Method|操作|状态码|
|-|-|-|
|OPTIONS|询问该接口/端点支持哪些方法|200 OK|
|POST|Create创建| 正常：201；异常：404、409  |
|GET|Read读取| 正常：200；异常：404  |
|HEAD|Read（body为空）| 正常：200；异常：404  |
|PUT|Replace替换| 正常：200；异常：204、404、405  |
|PATCH|Update更新| 正常：200；异常：204、404、405  |
|DELETE|delete| 正常：200、202、204；异常：404、405  |

### 2.1. PATCH 与 PUT

🔹 PATCH为更新某资源的部分数据（部分），PUT则是更新某资源的全部数据（整体）
🔹 但只需修改部分数据时，也可用PUT发送需修改的数据，来替换PATCH。

### 2.2. POST的成功响应

🔹 以HTTP标准而言，POST应返回的成功状态码为201。
🔹 也可直接响应新建资源的所有数据。

### 2.3. DELETE的响应内容

🔹 状态码
200 ：删除成功，返回删除的具体信息（含body：code+message+data）
204 ：删除成功，无返回内容（无body）
202 ：接受删除请求，未执行

## 3. 风格设计

### 3.1. 接口

🔹 不使用动词,使用名词,以请求方法来作为动词
🔹 为了统一,名词尽量为复数
🔹 避免多级URL。
&emsp;除了第一级，其他级别都用查询字符串表达。
&emsp;eg: GET /authors/12?categories=2
&emsp;&emsp;GET /articles?published=true

### 3.2. 响应信息

```json
{
    "code": xxx,
    "message": "",
    "data":{}
}
// 分页响应结果的参数（可选）
{
    // 可放在data中或外部
    "page|currentPage": xxx,            // 当前页码
    "numPerPage": xxx,                  // 每页个数
    "pages|totalPageNum": xxx,          // 总页数
    "total": xxx,                       // 总个数
    "hasPrev": boolean,                 // 是否有上一页
    "hasNext": boolean,                 // 是否有下一页
    "items" : {}                        // 列表数据内容

}
```

-----
📘参考、摘取文章：
[RESTful API 最佳实践--阮一峰](http://www.ruanyifeng.com/blog/2018/10/restful-api-best-practices.html)
[HTTP后台端：RESTful API接口设计](https://crifan.github.io/http_restful_api/website/)

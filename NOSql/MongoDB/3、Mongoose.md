# <font color=#689F38>一、Mongoose</font>

## <font color=#689F38> 1、简介</font>

Mongoose是一个对象文档模型（ODM）库

Mongoose对Node中的MongoDB进行封装及优化。

通过Mongoose可实现Node.js对MongoDB的使用。



## <font color=#689F38> 2、mongoose连接MongoDB </font>

### <font color=#689F38> 1）、导入</font>

先初始化项目，在项目中添加package.json。

```
npm init --yes
```

安装mongoose包

```
npm i mongoose -save
// 或者 npm install mongoose
```

### <font color=#689F38> 2）、加载Mongoose 以及连接数据库

使用node运行js文件

```js
// 1、加载Mongoose
var mongoose = require("mongoose");
// 2、连接MongoDB
mongoose.connect("mongodb://127.0.0.1/my_test",{ useUnifiedTopology: true }) 
```



## <font color=#689F38> 3、mongoose中的对象 </font>

### <font color=#689F38>3.1 、Document</font>

connection对象是对数据库连接的抽象，它提供了对象连接

可以通过open和close事件来监控连接的打开和关闭

```js

// 事件——监控数据库连接
mongoose.connection.once("open",function(){
	console.log("mongoose连接成功")	
});

// 事件——监控数据库断开连接
mongoose.connection.once("close",function(){
	console.log("mongoose连接断开")
});

//关闭连接
mongoose.connection.close()
```

### <font color=#689F38>3.2 、Schema</font>

模式对象，用于约束MongoDB中的文档。

可通过Mongoose的Schema属性获取Schema对象。

#### <font color=#689F38>1)、约束的类型：</font>

```
– String – Number – Boolean – Array – Buffer – Date – ObjectId或Oid – Mixed
```

#### <font color=#689F38>2）、模式对象的创建</font>

```
new Schema(definition,option) 
	• definition（描述模式） 
	• options 配置对象，定义与数据库中集合的交互
```

eg:

```js
var Schema = mongoose.Schema;
var ASchema = new Schema({
	name:  String, // String is shorthand for {type: String}
	age:{
		type:String,
		default :"20"
	}
});
```

option的常用值：

```
• autoIndex – 布尔值，开启自动索引，默认true 
• bufferCommands – 布尔值，缓存由于连接问题无法执行的语句，默认true 
• capped – 集合中最大文档数量 
• collection – 指定应用Schema的集合名称
• id – 布尔值，是否有应用于_id的id处理器，默认true 
• _id – 布尔值，是否自动分配id字段，默认true 
• strict – 布尔值，不符合Schema的对象不会被插入进数据库，默认true
```

eg:

```js
new Schema({ name: String }, { _id: false, autoIndex: false })
```



### <font color=#689F38>3.3 、Model</font>

Model对象就相当于数据库中的集合。

可通过Model 来使Schema对某文档进行约束。

再通过Model对文档进行CRUD

#### <font color=#689F38>1)、创建Model的语法：</font>

```js
– model(name, [schema], [collection] , [skipInit]) 
	• name参数相当于模型的名字，以后可以同过name找到模型。
    • schema是创建好的模式对象。
    • collection是要连接的集合名。
    • skipInit是否跳过初始化，默认是false。
```

eg:

```js
//创建students集合的model
var StudentModel = mongoose.model("student",ASchema); //Mongoose会自动 "student" - > "students"
```

#### <font color=#689F38>2)、Model中部分的方法：</font>

##### <font color=#689F38>A、添加、创建文档数据</font>

> Model.create(doc(s), [callback])
>
> - 用来创建一个或多个文档并添加到数据库中
>  	- 参数：
>  		doc(s) 可以是一个文档对象，也可以是一个文档对象的数组
>  		callback 当操作完成以后调用的回调函数

eg：

```js
AModel.create(
	{
		name:"小红01"
	},
	function(err){
		if(err){
			console.log("添加数据失败")
			mongoose.connection.close()
		}else{
			console.log("添加成功~")
			mongoose.connection.close()
		}
	}
)
```

##### <font color=#689F38>B、查找文档</font>

回调函数中的doc参数 即 model 的实例。可在使用doc 调用model的方法

> - Model.find(conditions, [projection], [options], [callback])
>
>   查询所有符合条件的文档 总会返回一个数组      
>
> - Model.findById(id, [projection], [options], [callback])
>
>   根据文档的id属性查询文档
>
> - Model.findOne([conditions], [projection], [options], callback)
>
>   查询符合条件的第一个文档 总和返回一个具体的文档对象
>
>    		conditions : 查询的条件
>    		projection  : 投影 需要获取到的字段
>
>   ​				两种方式
>    					{name:1,_id:0}
>    					"name -_id"
>    		options     :  查询选项（skip limit）
>    					eg:  {skip:3 , limit:1}
>    		callback (err,doc\docs)    :  回调函数，查询结果会通过回调函数返回
>    					回调函数必须传，如果不传回调函数，压根不会查询

eg：

```js
//find() 查询所有
StudentModel.find({},function (err , docs) {
	if(!err){
		console.log(docs);
	}
});
//find() 查询 name为小红
StudentModel.find(
	{name:"小红"},
	function (err , docs) {
		if(!err){
			console.log(docs);
		}
	}
);
//findById() 查询Id 为 5e5113fa80a06303644abf72
StudentModel.findById("5e5113fa80a06303644abf72",function(err,docs){
	if(!err){
		console.log(docs);
	}
});
//findByOne() 查询第一个name为小红01 
StudentModel.findOne({name:"小红01"},function(err,docs){
	if(!err){
		console.log(docs);
	}
})
```

##### <font color=#689F38>C、修改文档数据</font>

> - Model.update(conditions, doc, [options], [callback])
>
> - Model.updateMany(conditions, doc, [options], [callback])
>
> - Model.updateOne(conditions, doc, [options], [callback])
>
>   用来修改一个或多个文档
>
>   参数：
>           conditions 查询条件
>    		doc 修改后的对象
>    		options 配置参数
>    		callback 回调函
>
> - Model.replaceOne(conditions, doc, [options], [callback])

eg:

```js
// update() 将_id为5e50ef6db61adc2c1cd8d898 的name改为“小黑”
StudentModel.update(
	{_id:Object("5e50ef6db61adc2c1cd8d898")},
	{$set:{name:"小黑"}},
	function(err){
		if(!err){
			console.log("修改成功")
		}
	}
)
// updateMany() 将所有name为小红01 改为 小黄
StudentModel.updateMany(
	{name:"小红01"},
	{$set:{name:"小黄"}},
	function(err){
		if(!err){
			console.log("修改成功")
		}
	}
)
// updateMany() 将第一个name为小红2的文档 改为 {name:小黄1}
StudentModel.updateOne(
	{name:"小红2"},
	{name:"小黄1"},
	function(err,docs){
		if(!err){
			console.log("修改成功")
			console.log(docs)
		}
	}
)
//
StudentModel.replaceOne(
	{name:"小红2"},
	{name:"小黄1"},
	function(err,docs){
		if(!err){
			console.log("修改成功")
			console.log(docs)
		}
	}
)
```



##### <font color=#689F38>D、删除文档数据</font>

>  Model.remove(conditions, [callback])
>  		Model.deleteOne(conditions, [callback])
>  		Model.deleteMany(conditions, [callback])

eg:

```js
//删除所有 name为小红2
StudentModel.remove({name:"小红2"},function(err,query){
	if(!err){
		console.log(query);
	}
})
```

##### <font color=#689F38>E、计数</font>

> Model.count(conditions, [callback])

```js
StuModel.count({},function (err , count) {
	if(!err){
		console.log(count);
	}
});
```

### <font color=#689F38>3.4 、Document</font>

#### <font color=#689F38>1)、简介：</font>

Document继承自Model，代表一个集合中的文档。

Document 即 是一个 Model是实例

eg ：

```js
// 创建一个 Document，即创建一个model实例 (不会添加进数据库)
var MingDoc = new StudentModel({
	name:"小明",
	age:"25"
})

```

#### <font color=#689F38>2)、Document  转JSON、普通的Object：</font>

eg :

```js
//Document - > JSON
var MingJSON =  JSON.stringify(MingDoc);
console.log(MingJSON);

//Document - > Object
var MingObject = MingDoc.toObject();
console.log(MingObject._id); 
console.log(MingObject.id);  //undefined-- Object 对象则不能调用Document中的属性
```

#### <font color=#689F38>3)、Document中的方法</font>

```
• equals(doc) 
• id
	同 document实例._id
• get(path,[type]) 
• set(path,value,[type]) 
• update(update,[options],[callback]) 
• save([callback]) 
	将document保存到数据库中。
• remove([callback]) 
• isNew 
	如果为新对象，则表示是刚创建的Document对象，未添加进数据库
• isInit(path) 
• toObject()
```

eg：

```js
//删除第一个name为小明的文档
StudentModel.find(
	{name:"小明"},
	function(err,docs){
		if(!err){
             //调用document的remove方法
			docs[0].remove(function(err,docs){
				if(!err){
					console.log("已删除："+docs)
				}
			});
		}
	}
);

```



#### <font color=#689F38>4)、注意</font>

Model 的方法会先执行，之后再执行Document的方法

```js
var MingDoc = new StudentModel({
	name:"小明",
	age:"25"
})

MingDoc.save(function(err,docs){
	if(!err){
		console.log("保存成功")
		console.log("save:"+docs)
	}
});

//model 查询结果并不包含上面的MingDoc，
// 这是因为 Model的方法先于 Document的方法 执行
StudentModel.find({},function(err,docs){
	if(!err)
		console.log(docs)
})

```


## MyBatisGenerater 
### 1、概念\功能
通过Generater可实现根据数据库表格生成Dao层代码、mapper代码。
### 2、步骤
#### A、添加jar
```xml
    <!-- MyBatis 生成器 -->
        <dependency>
            <groupId>org.mybatis.generator</groupId>
            <artifactId>mybatis-generator-core</artifactId>
            <version>1.3.3</version>
        </dependency>
```
#### B、配置变量
##### \<context>
	属性：
	    targetRuntime:
	    defaultModelType:
	<property>:
	    beginningDelimiter:开始定界符，默认为双引号
	    endingDelimiter:结束定界符，默认为双引号
	    javaFileEncoding：指定处理Java文件时的编码
	<plugin>:
	   定义插件
	   eg：
		
	<commentGenerator>:
	   设置注释生成器
	   property:
	     suppressAllComments：是否包含任何注释，是否去除自动生成的注释
				（例如get/set方法默认生成的注解）。默认false。
	     suppressDate：设置生成的注释是否不含时间戳。默认false
	     addRemarkComments：设置生成的注释中是否含有数据库中表、列的注释。默认false。
	<jdbcConnection>:
	   数据库连接
	<javaModelGenerator>:
	   指定生成model的路径。绝对路径。
	<sqlMapGenerator>:
	   指定生成mapper.xml的路径。绝对路径。
	<javaClientGenerator>:
	   指定生成mapper接口的路径。绝对路径。
	<table>:
	   选择数据库表格
	   tableName：表格名称
	   alias：别名
	   <generatedKey>
		主键，用于insert中的主键。
		column：列名
		sqlStatement：SQL语句类型
		identity：true 主键不添加到insert中语句
			  false 则将主键添加到insert语句中。
 \<generatedKey> 中identity为true时：   
![title](https://i.loli.net/2020/01/05/cVL79DbUEZsd14A.png)
 \<generatedKey> 中identity为false时：   
![title](https://i.loli.net/2020/01/05/aWiMAyVT3kL9GPm.png)
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE generatorConfiguration
        PUBLIC "-//mybatis.org//DTD MyBatis Generator Configuration 1.0//EN"
        "http://mybatis.org/dtd/mybatis-generator-config_1_0.dtd">

<generatorConfiguration>
    <properties resource="generator.properties"/>
    <context id="MySqlContext" targetRuntime="MyBatis3" defaultModelType="flat">
        <property name="beginningDelimiter" value="`"/>
        <property name="endingDelimiter" value="`"/>
        <property name="javaFileEncoding" value="UTF-8"/>
        <!-- 为模型生成序列化方法-->
        <plugin type="org.mybatis.generator.plugins.SerializablePlugin"/>
        <!-- 为生成的Java模型创建一个toString方法 -->
        <plugin type="org.mybatis.generator.plugins.ToStringPlugin"/>
        <!--可以自定义生成model的代码注释-->
        <commentGenerator type="com.macro.mall.tiny.mbg.CommentGenerator">
            <!-- 是否去除自动生成的注释 true：是 ： false:否 -->
            <property name="suppressAllComments" value="true"/>
            <property name="suppressDate" value="true"/>
            <property name="addRemarkComments" value="true"/>
        </commentGenerator>
        <!--配置数据库连接-->
        <jdbcConnection driverClass="${jdbc.driverClass}"
                        connectionURL="${jdbc.connectionURL}"
                        userId="${jdbc.userId}"
                        password="${jdbc.password}">
            <!--解决mysql驱动升级到8.0后不生成指定数据库代码的问题-->
            <property name="nullCatalogMeansCurrent" value="true" />
        </jdbcConnection>
        <!--1、生成的包名   2、绝对路径-->
        <!--指定生成model的路径-->
        <javaModelGenerator targetPackage="com.macro.mall.tiny.mbg.model" targetProject="E:\General date\MyCodes\Github_clone_projects\mall\mall-learning-master\mall-tiny-01\src\main\java"/>
        <!--指定生成mapper.xml的路径-->
        <sqlMapGenerator targetPackage="com.macro.mall.tiny.mbg.mapper" targetProject="E:\General date\MyCodes\Github_clone_projects\mall\mall-learning-master\mall-tiny-01\src\main\resources"/>
        <!--指定生成mapper接口的的路径-->
        <javaClientGenerator type="XMLMAPPER" targetPackage="com.macro.mall.tiny.mbg.mapper"
                             targetProject="E:\General date\MyCodes\Github_clone_projects\mall\mall-learning-master\mall-tiny-01\src\main\java"/>
        <!--生成全部表tableName设为%-->
        <table tableName="pms_brand">
            <generatedKey column="id" sqlStatement="MySql" identity="true"/>
        </table>
    </context>

</generatorConfiguration>
```
#### C、编写配置文件
resource下的generator.properties文件
```xml
jdbc.driverClass=com.mysql.cj.jdbc.Driver
jdbc.connectionURL=jdbc:mysql://localhost:3306/mall?useUnicode=true&characterEncoding=utf-8&serverTimezone=Asia/Shanghai
jdbc.userId=root
jdbc.password=Xo159357
```

#### D、编写Generator启动类
```java
/**
 * 用于生产MBG的代码
 * Created by macro on 2018/4/26.
 */
public class Generator {
    public static void main(String[] args) throws Exception {
        //MBG 执行过程中的警告信息
        List<String> warnings = new ArrayList<String>();
        //当生成的代码重复时，覆盖原代码
        boolean overwrite = true;
        //读取我们的 MBG 配置文件
        InputStream is = Generator.class.getResourceAsStream("/generatorConfig.xml");
        ConfigurationParser cp = new ConfigurationParser(warnings);
        Configuration config = cp.parseConfiguration(is);
        is.close();

        DefaultShellCallback callback = new DefaultShellCallback(overwrite);
        //创建 MBG
        MyBatisGenerator myBatisGenerator = new MyBatisGenerator(config, callback, warnings);
        //执行生成代码
        myBatisGenerator.generate(null);
        //输出警告信息
        for (String warning : warnings) {
            System.out.println(warning);
        }
    }
}

```
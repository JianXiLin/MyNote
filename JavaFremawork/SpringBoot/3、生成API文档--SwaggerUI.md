## 一、常用注解
##### 1、@Api
用于修饰Controller类，生成Controller相关文档信息
##### 2、@ApiOperation
用于修饰Controller类中的方法，生成接口方法相关文档信息
##### 3、@ApiParam
用于修饰接口中的参数，生成接口参数相关文档信息
##### 4、@ApiModelProperty
用于修饰实体类的属性，当实体类是请求参数或返回结果时，直接生成相关文档信息

## 二、实现步骤：
#### 1、导入Jar包
```xml
   <!--Swagger-UI API文档生产工具-->
        <dependency>
            <groupId>io.springfox</groupId>
            <artifactId>springfox-swagger2</artifactId>
            <version>2.7.0</version>
        </dependency>
        <dependency>
            <groupId>io.springfox</groupId>
            <artifactId>springfox-swagger-ui</artifactId>
            <version>2.7.0</version>
        </dependency>
```
#### 2、设置Swagger-UI的Java启动类\配置类（位于config模块文件下）
```java 
/**
 * Swagger2API文档的配置
 */
@Configuration
@EnableSwagger2
public class Swagger2Config {
	@Bean
	public Docket createRestApi(){
		return new Docket(DocumentationType.SWAGGER_2)
				.apiInfo(apiInfo())
				.select()
				//为当前包下controller生成API文档
				.apis(RequestHandlerSelectors.basePackage("com.macro.mall.tiny.controller"))
				//为有@Api注解的Controller生成API文档q
//                .apis(RequestHandlerSelectors.withClassAnnotation(Api.class))
				//为有@ApiOperation注解的方法生成API文档
//                .apis(RequestHandlerSelectors.withMethodAnnotation(ApiOperation.class))
				.paths(PathSelectors.any())
				.build();
	}

	private ApiInfo apiInfo() {
		return new ApiInfoBuilder()
				.title("SwaggerUI演示")
				.description("mall-tiny")
				.contact("macro")
				.version("1.0")
				.build();
	}
}

```
#### 3、为Controller层代码添加SwaggerUI注解
@Api、@ApiOperation

#### 4、为model层类添加注解
@ApiModelProperty
#### 自动生成：使用MybatisGenerator自动生成model的@ApiModelProperty注解。
A、修改MybatisGenerator的自定义注释生成器的代码

B、

#### 5、启动Swagger-UI的Java启动类。


## <mvc:annotation-driven />
       会自动注册DefaultAnnotationHandlerMapping与 
    AnnotationMethodHandlerAdapter
    两个bean,是spring MVC为@Controllers分发请求所必须的。
    并提供了：
       数据绑定支持，
       @NumberFormatannotation支持， 
       @DateTimeFormat支持，
       @Valid支持，
       读写XML的支持（JAXB）， 
       读写JSON的支持（Jackson）。

### \<mvc:annotation-driven>声明的bean:
 ##### 1、RequestMappingHandlerMapping
 ##### 2、BeanNameUrlHandlerMapping	
 ##### 3、RequestMappingHandlerAdapter	 
 ##### 4、HttpRequestHandlerAdapter	
 ##### 5、SimpleControllerHandlerAdapter
 ##### 6、ExceptionHandlerExceptionResolver
 ##### 7、ResponseStatusExceptionResolver
 ##### 8、DefaultHandlerExceptionResolver
     1: @RequestMapping注解的映射
     2: Conntrol中url中的映射
     3：处理@RequestMapping
     4、5：处理httpRequest、Controller
     6、7、8：处理异常
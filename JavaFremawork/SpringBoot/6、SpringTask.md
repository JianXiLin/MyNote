## 一、SpringTask内容

## 二、SpringBoot中使用SpringTask
### 1、添加依赖
SpringTask已整合在Spring中，故无需额外添加依赖。
### 2、配置SpringTask，即添加配置类，配置则开启
```java
/**
 * 定时任务配置
 * Created by macro on 2019/4/8.
 */
@Configuration
@EnableScheduling
public class SpringTaskConfig {
}

```
### 3、执行定时任务。
在Spring中注入定时任务类，可命名为OrderTimeOutCancelTask。
```java

```
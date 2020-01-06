## 一、SpringTask内容

## 二、SpringBoot中使用SpringTask
### 1、添加依赖
SpringTask已整合在Spring中，故无需额外添加依赖。
### 2、配置SpringTask，即添加配置类
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
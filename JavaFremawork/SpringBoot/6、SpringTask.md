## 一、SpringTask内容
### 1、Cron表达式。
|时间元素|可用字符|范围|
|-|-|-|
|Seconds（秒）|， -  *  / |0-59|
|Minutes（分）|， -  *  / |0-59|
|Hours（时）|， -  *  / |0-23|
|DayofMonth（月份）|， -  *  /  ?  L  W |0-31|
|Month（月份）|， -  *  / |1-12|
|DayofWeek（秒）|， -  *  / ? L #|1-7或SUN-SAT|
### 2、符号
|符号|作用|
|-|-|
|，|列出枚举值，每个值触发一次|
|- |列出范围，每个值触发一次|
### 3、SpringTask相关注解


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
eg：
```java
/**
 * Created by macro on 2018/8/24.
 * 订单超时取消并解锁库存的定时器
 */
@Component
public class OrderTimeOutCancelTask {
    private Logger LOGGER = LoggerFactory.getLogger(OrderTimeOutCancelTask.class);

    /**
     * cron表达式：Seconds Minutes Hours DayofMonth Month DayofWeek [Year]
     * 每10分钟扫描一次，扫描设定超时时间之前下的订单，如果没支付则取消该订单
     */
    @Scheduled(cron = "0 0/10 * ? * ?")
    private void cancelTimeOutOrder() {
        // TODO: 2019/5/3 此处应调用取消订单的方法，具体查看mall项目源码
        LOGGER.info("取消订单，并根据sku编号释放锁定库存");
    }
}
```
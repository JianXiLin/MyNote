
## 1. 简述 

&emsp;Quartz 为一个开源的 “ 资源调度库 ”，为一个任务调度框架。

### 与SpringTask的区别： 

🔹 任务类的数量

&emsp;Quartz 在每次执行时，都会创建一个**新任务对象**Job，而SpringTask则不会。
&emsp;Quartz中，对于存储到JobDateMap的数据，可通过 **@PersistJobDataAfterExecution**来持久化数据

🔹 对异常的处理
&emsp;Quartz某次任务中的**异常不影响**后续任务。SpringTask则会结束掉整个定时器的生命周期。

## 2. 设计模式

### 2.1. Builder模式

JobBuilder、TriggerBuilder

### 2.2. Factory模式

SchedulerFactory

### 2.3. 组件模式

### 2.4. 链式编程

## 3. 基本概念

Jon任务、Trigger触发器、Scheduler调度器

![quartz/20200525145900](https://jianxi-md-pics.oss-cn-beijing.aliyuncs.com/note-md-imgs/quartz/20200525145900.png?x-oss-process=image/resize,p_100/sharpen,50)

🔹 组件

  Job、JobDetail、JobDateMap、JobBuilder、Trigger、TriggerBuilder、Scheduler、

  JobListener、TriggerListener、SchedulerListener

![quartz/20200525145945](https://jianxi-md-pics.oss-cn-beijing.aliyuncs.com/note-md-imgs/quartz/20200525145945.png?x-oss-process=image/resize,p_100/sharpen,50)

🔹 代码：

```java
public static void main(String[] args) {
    try {
        Scheduler scheduler = StdSchedulerFactory.getDefaultScheduler();

        // define the job and tie it to our HelloJob class
        JobDetail job = JobBuilder.newJob(HelloJob.class)
                    .withIdentity("job1", "group1")
                    .build();
        // Trigger the job to run now, and then repeat every 40 seconds
        Trigger trigger = TriggerBuilder.newTrigger()
                    .withIdentity("trigger1", "group1")
                    .startNow()
                    .withSchedule(SimpleScheduleBuilder.simpleSchedule()
                    .withIntervalInSeconds(5)
                    .repeatForever())
                    .build();
        // Tell quartz to schedule the job using our trigger
        job.getJobDataMap().put("第一个数据","数据1");
        trigger.getJobDataMap().put("第二个数据","数据2");
        job.getJobDataMap().put("message","message_1");
        job.getJobDataMap().put("message2","message_2");

        /**
        * 全部 job
        */
        scheduler.getListenerManager().addJobListener(new MyJobListener(), EverythingMatcher.allJobs());

        /**
        * 指定 job
        */
        //scheduler.getListenerManager().addJobListener(new MyJobListener(), KeyMatcher.keyEquals(JobKey.jobKey("job1","group1")));

        /**
        * 全部Trigger
        */
        scheduler.getListenerManager().addTriggerListener(new MyTriggerListener(),EverythingMatcher.allTriggers());

        scheduler.getListenerManager().addSchedulerListener(new MySchedulerListener());

        scheduler.scheduleJob(job, trigger);
        scheduler.start();

    } catch (SchedulerException e) {
        e.printStackTrace();
    }
}
```

🔹 Trigger子类类图

![quarz/image-20200310155448023](https://jianxi-md-pics.oss-cn-beijing.aliyuncs.com/note-md-imgs/quarz/image-20200310155448023.png?x-oss-process=image/resize,p_100/sharpen,50)

## 4. 使用CronTriggerImpl 触发器  

```java
// 秒、分、时 、日、月、周、年
Trigger trigger = TriggerBuilder.newTrigger()
    .withIdentity("trigger1", "group1")
    .startNow()
    .withSchedule(CronScheduleBuilder.cronSchedule("0/5 * * * * ?")) //每5秒一次
    .build();
```

🔹 日期格式案例
![quartz/20200525152510](https://jianxi-md-pics.oss-cn-beijing.aliyuncs.com/note-md-imgs/quartz/20200525152510.png?x-oss-process=image/resize,p_100/sharpen,50)

![](E:\General date\MyNote\JavaFremawork\Quartz\imgs\Quartz_imgs\image-20200310114025809.png)

![image_80](E:\General date\MyNote\JavaFremawork\Quartz\imgs\Quartz_imgs\image_80.png)

![image-20200310114052995](E:\General date\MyNote\JavaFremawork\Quartz\imgs\Quartz_imgs\image-20200310114052995.png)

##  5. 监听器

scheduler中添加实现相应监听接口的监听器类：

```java
/**
* 全部 job
*/
scheduler.getListenerManager().addJobListener(new MyJobListener(), EverythingMatcher.allJobs());

/**
* 指定 job
*/
///scheduler.getListenerManager().addJobListener(new MyJobListener(), KeyMatcher.keyEquals(JobKey.jobKey("job1","group1")));

/**
* 全部Trigger
*/
scheduler.getListenerManager().addTriggerListener(new MyTriggerListener(),EverythingMatcher.allTriggers());

scheduler.getListenerManager().addSchedulerListener(new MySchedulerListener());

```



TriggerListener类下所需实现的方法（JobListener类似）：

![image_86](E:\General date\MyNote\JavaFremawork\Quartz\imgs\Quartz_imgs\image_86.png)

ScheduledListener类所需实现的方法：

![image_85](E:\General date\MyNote\JavaFremawork\Quartz\imgs\Quartz_imgs\image_85.png)
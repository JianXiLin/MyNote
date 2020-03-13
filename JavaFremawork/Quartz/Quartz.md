# <font color=#4caf50>Quartz </font>

## <font color=#4caf50>1、简述</font>

Quartz 为一个开源的 “ 资源调度库 ”。

### <font color=#4caf50>与SpringTask的区别：</font>

- 任务类的数量

  - Quartz 在每次执行时，都会创建一个==新任务对象==Job，而SpringTask则不会。

    Quartz中，对于存储到JobDateMap的数据，可通过==@PersistJobDataAfterExecution==来持久化数据。

- 对异常的处理

  - Quartz某次任务中的==异常不影响后续==任务。SpringTask则会结束掉整个定时器的生命周期。

    



## <font color=#3caf50>2、设计模式</font>

### <font color=#3caf50>（1）Builder模式</font>

JobBuilder、TriggerBuilder

### <font color=#3caf50>（2）Factory模式</font>

SchedulerFactory

### <font color=#3caf50>（3）组件模式</font>

### <font color=#3caf50>（4）链式编程</font>



## <font color=#3caf50>3、基本概念</font>

Jon任务、Trigger触发器、Scheduler调度器

<img src="E:\General date\MyNote\JavaFremawork\Quartz\imgs\Quartz_imgs\image_87.png" alt="image_87" style="zoom: 67%;" />

- <font color=#3caf50>组件：</font>

  Job、JobDetail、JobDateMap、JobBuilder、Trigger、TriggerBuilder、Scheduler、

  JobListener、TriggerListener、SchedulerListener

![image_82](E:\General date\MyNote\JavaFremawork\Quartz\imgs\Quartz_imgs\image_82.png)

- <font color=#3caf50>代码：</font>

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
			scheduler.getListenerManager().addJobListener(new MyJobListener(), 			 EverythingMatcher.allJobs());

			/**
			 * 指定 job
			 */
///			scheduler.getListenerManager().addJobListener(new MyJobListener(), KeyMatcher.keyEquals(JobKey.jobKey("job1","group1")));

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



- <font color=#3caf50>Trigger子类类图：</font>

![image-20200310155448023](E:\General date\MyNote\JavaFremawork\Quartz\imgs\Quartz_imgs\image-20200310155448023.png)



## <font color=#3caf50>4、使用CronTriggerImpl 触发器</font> 

```java
// 秒、分、时 、日、月、周、年
Trigger trigger = TriggerBuilder.newTrigger()
    .withIdentity("trigger1", "group1")
    .startNow()
    .withSchedule(CronScheduleBuilder.cronSchedule("0/5 * * * * ?")) //每5秒一次
    .build();
```

![image_83](E:\General date\MyNote\JavaFremawork\Quartz\imgs\Quartz_imgs\image_83.png)

![](E:\General date\MyNote\JavaFremawork\Quartz\imgs\Quartz_imgs\image-20200310114025809.png)

![image_80](E:\General date\MyNote\JavaFremawork\Quartz\imgs\Quartz_imgs\image_80.png)

![image-20200310114052995](E:\General date\MyNote\JavaFremawork\Quartz\imgs\Quartz_imgs\image-20200310114052995.png)



## <font color=#3caf50>5、监听器</font>

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
### 1、通知获取切面的形参
   	可通过传入JoinPoint类来获取参数数值。
  	Spring会自动对通知的该参数进行注入。
  	当为环绕通知时，则使用processedJoinPoint类来获取。
### 2、切面传入参数。
    注解需使用args属性注入参数名称。
    不同于标签方法：
		标签方式是通过and 连接 execution和args
		注解是通过 && 连接 execution和args  

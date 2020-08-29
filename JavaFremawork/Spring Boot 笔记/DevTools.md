
## 1. 项目重启

### 1.2. 指定文件，触发重启

springboot

```properties
<!-- 方式一 -->
spring.devtools.restart.exclude =静态/ **，公共/ **
<!-- 方式二 -->
spring.devtools.restart.addtional-path = src/main/resources/static
```

### 1.3. 手动重启

仅在代码发送修改的前提下，修改trgger-file文件内容（文件名:.trgger-file）则项目重启。

```properties
spring.devtools.restart.trigger-file = .trgger-file
```

全局配置
在计算机的用户目录下提交文件名为.spring-boot-devtools.properties的文件，并在文件中添加trgger-file的配置。即对所有使用devtools的springboot项目生效。


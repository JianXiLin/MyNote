#

## 1. 无法修改Maven中Java编译的版本

### 1.1. 问题描述

在IDEA中修改Maven项目的Java编译的版本的方法:

- 通过`Project Structure` 中的Moudle来修改Java编译的版本

但通过此方法设置Java版本,在编译后又会恢复到修改前的版本.这可通过`Project Structure`设置中所提示的警告得知:
警告: Module xxx is imported from Maven.Any changes made in its

![Idea](https://jianxi-md-pics.oss-cn-beijing.aliyuncs.com/note-md-imgs%2Fidea%2Fidea.png)

### 1.2. 解决方案

在对应Maven项目的pom.xml文件中指定Java编译的版本,版本号的可设置与IDEA中Java默认编译版本一致.可添加如下内容

```xml
<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-compiler-plugin</artifactId>
            <version>3.8.0</version>
            <configuration>
                <source>1.8</source>
                <target>1.8</target>
            </configuration>
        </plugin>
    </plugins>
</build>
```

<b>补充:</b>
修改IDEA中Java默认编译版本的方法:

- 通过`Setting`->Build,Execution,Deployment->Complier->Java Compiler来修改

## 2. Maven中的pom.xml不可用

### 2.1. 问题描述

pom.xml文件显示为灰色,且带有删除线

![idea](https://jianxi-md-pics.oss-cn-beijing.aliyuncs.com/note-md-imgs%2Fidea%2Fidea1.png)

### 2.2. 解决方案

这是由于IDEA中的Maven忽略了该pom文件.

在`Setting`->Build,Execution,Deployment->Build Tools->Maven -> ignored Files 中取消忽略对应的文件

![idea](https://jianxi-md-pics.oss-cn-beijing.aliyuncs.com/note-md-imgs%2Fidea%2Fidea2.png)
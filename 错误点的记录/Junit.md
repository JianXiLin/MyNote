# <font color=#4CAF50 size=5>1、JUnit-4.12使用报java.lang.NoClassDefFoundError: org / hamcrest / SelfDescribing错误</font>

<font color=#4CAF50 size=4> 1）、原因 : </font>

官方原文：**Starting with version 4.11, Hamcrest is no longer included in this jar.**

即4.11后JUnit不包含Hamcrest。

<font color=#4CAF50 size=4>  2）、解决方法：</font>

A、降低JUnit的版本，可降为JUnit-4.8

B、添加hamcrest-core-1.3.jar。

​	即使用 junit-4.12.jar + hamcrest-core-1.3.jar
符号表格：

| 描述      | 符号类型                     | 符号                                                       | 指向               |
| --------- | ---------------------------- | ---------------------------------------------------------- | ------------------ |
| 关联      | 存在联系                     | ![关联](https://i.loli.net/2019/10/09/eU6AGjBVJFxOot4.png) | 消息接收方         |
| 包含      | -                            | ![包含](https://i.loli.net/2019/10/09/wY2N5UFM68dcuZC.png) | 分解出来的功能用例 |
| 扩展      | -                            | ![扩展](https://i.loli.net/2019/10/09/KXWgon3rc6vjDEx.png) | 基础用例           |
| 泛化/继承 | 父--子                       | ![泛化](https://i.loli.net/2019/10/09/Bmklp7nKXv3Fjx1.png) | 父用例             |
| 实现      |                              | ![实现](https://i.loli.net/2019/10/09/CqkiNz8MDLtbvwo.png) | 接口               |
| 依赖      |                              | ![依赖](https://i.loli.net/2019/10/09/nEdD7T296iqP5tN.png) | 被依赖项           |
| 聚合      | 整体和部分--部分可单独存在   | ![聚合](https://i.loli.net/2019/10/09/Ld8N1rpJVYqPaWQ.png) | 整体               |
| 组合      | 整体和部分--部分不能单独存在 | ![组合](https://i.loli.net/2019/10/09/OyrY7EAVeq1Ux4M.png) | 整体赖项           |

```puml
@startuml
package UML关系 <<Rectangle>>{
    a1 ..> b1 :依赖
    a2 --|> b2 :泛化
    a3 ..|> b3 :实现
    a4 -- b4 : 关联
    a5 --o b5 :组合
    a6 --* b6 :聚合  
}
@enduml
```

```puml
@startmindmap

* UML
** 结构类
*** 类图
*** 对象图
*** 组件图
*** 配置图
** 行为类
*** 用例图
*** 顺序图
*** 通信图
*** 状态图
*** 活动图

@endmindmap
```
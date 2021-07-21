
```dot

digraph a{
    graph [fontname="Inconsolata, Consolas", fontsize=15, penwidth=0.5, labeljust=left]
    node [shape=ellipse, fontname="Inconsolata, Consolas", fontsize=10, penwidth=0.5,
        style=filled, colorscheme=spectral9]
    edge [fontname="Inconsolata, Consolas", fontsize=10, penwidth=0.5]

    subgraph clusterView {
        label="View"
        node [fillcolor=7]
        AccountView, CustomerView
    }

    subgraph clusterModel {
        label="Model"
        node [fillcolor=6]
        Account, Customer
    }

    /* Unidirecitonal association */
    {
        edge [arrowhead=vee]
        AccountView -> Account [label="label"]
        CustomerView -> Customer
        AccountView -> aaa
    }
}

```

```dot
digraph demo {
    label="示例"
    bgcolor="beige"

    node[color="grey"]

    father[label="爸爸", shape="box"]
    mother[label="妈妈", shape="box"]
    brother[label="哥哥", shape="circle"]
    sister[label="姐姐", shape="circle"]
    node[color="[[FF6347]]"]
    strangers[label="路人"]

    edge[color="[[FF6347]]"]

    father->mother[label="夫妻", dir="both"]
    father->brother[label="父子"]
    father->sister[label="父子"]
    father->我[label="父子"]

    mother->{brother,sister,我}[label="母子"]

    {rank=same; father, mother}
    {rank=same; brother,sister,我}
}
```

```dot
digraph G { 

  rankdir = TB;

  A -> B;
  A -> C -> D;
  X -> Y;

  { rank=min; A; X; }
  { rank=max; B; D; Y; }

}
```

```puml
@startuml

skinparam usecase {
    BackgroundColor DarkSeaGreen
    BorderColor DarkSlateGray

    BackgroundColor<< Main >> YellowGreen
    BorderColor<< Main >> YellowGreen
}


(Start) << One Shot >>
(Use the application) as (Use) << Main >>
:iu:
(Start) --> (Use)

@enduml
```

```puml

digraph a{
    graph [nodesep=0.5,fontname="Inconsolata, Consolas", fontsize=15, penwidth=0.5, labeljust=left]
    node [shape=ellipse, fontname="Inconsolata, Consolas", fontsize=10, penwidth=0,
        style=filled, colorscheme=spectral9]
    edge [fontname="Inconsolata, Consolas", fontsize=10, penwidth=0.5]

    subgraph clusterModel {
        label="Model"
        node [fillcolor=7]
        a,b,c
        { rank="min" a,c }

    }

    /* Unidirecitonal association */
    {
        a->b
        a->c
    }
}

```

[](https://itopic.org/graphviz.html)

### rank值

|值|含义|
|-|-|
|same|同级|
|max|最底部|
|min|最顶部|

### 颜色主题 colorshceme

[官方colorshceme](https://graphviz.org/doc/info/colors.html)

### 形状 shape

|值|含义|
|-|-|
|box|矩形|
|ellipse|椭圆形|
|circle|圆行|
|parallelogram|平行四边形|

[官方shape](https://graphviz.org/doc/info/shapes.html)
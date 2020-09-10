
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
        AccountView -> Account
        CustomerView -> Customer
        AccountView -> aaa
    }
}

```
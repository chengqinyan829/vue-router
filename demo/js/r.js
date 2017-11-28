var router=new VueRouter({
    // mode:"history",
    routes:[
        {"path":'/',component:xx},
        {"path":'/one',component:One,children:[
            {path:"",component:Ones,},
            {path:"list/:id",component:Con}
        ]},
        {"path":'/two',component:Two,children:[
            {"path":'',components:{"left":left,"right":right}},
        ]},
        {"path":'/login',component:Login},
        // {"path":'*',redirect:"/"},
    ]
})
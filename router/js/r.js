var router=new VueRouter({
    routes:[
        //首页
        {"path":"/",component:Home},
        //公司简介
        {"path":'/info',component:One,children:[
            {"path":"",component:List},
            {"path":"list/:id",component:Con}
        ]},
        //文档说明
        {"path":'/doc',component:Two,children:[
            {"path":'',components:{
                left:left,
                right:right,
                }
            }
        ]},
        //登录
        {"path":"/login",component:login},
        // {"path":'*',redirect:"/"},
    ]
})
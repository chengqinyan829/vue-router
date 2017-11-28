var index=Vue.component("index",{
    props:["nav"],
    data(){
        return{
            navs:[
                {title:"首页",url:'/'},
                {title:"公司简介",url:'/one'},
                {title:"文档说明",url:"/two"},
            ],
            islogin:false,
            name:"",
            isshow:false
        }
    },
    template:`
        <div class="abc">
            <router-link :to="item.url" v-for="(item,key) in navs" :key="key" exact>{{item.title}}</router-link>
            <router-link to="/login" v-if="!islogin">login</router-link>
       
            <span v-if="islogin" class="info" @click="show">
                {{name}}
            <span  class="logout" v-show="isshow" @click="logout">退出</span>
       </span>
        </div>
        <router-view class="center"></router-view>
    `,
    created(){
        this.name=this.get("login","name");
        this.islogin=this.get("login","name");
    },
    methods:{
        show(){
            this.isshow=!this.isshow
        },
        logout(){
            this.del("login");
            router.push("/")
        }
    }
})
var xx=Vue.component("xx",{
    template:`<div>
                    <div class="xx">
                        <img src="img/11.jpg">
                    </div>
               </div>
`
})
var One=Vue.component("one",{
    template:`<div class="com">
           
        <router-view class="center"></router-view>
</div>`
})
var Ones=Vue.component("ones",{
    template:`<div class="com">
        <router-link to="/one/list/1" tag="a">公司概况</router-link>
        <router-link to="/one/list/2" tag="a">公司发展状况</router-link>
        <router-link to="/one/list/3" tag="a">公司文化</router-link>
        <router-link to="/one/list/4" tag="a">公司主要产品</router-link>
        <router-link to="/one/list/5" tag="a">销售业绩及网络</router-link>
        <router-link to="/one/list/6" tag="a">售后服务</router-link>
	       
        <router-view class="center"></router-view>
</div>`
})
var Con=Vue.component("Con",{
    data(){
      return{
          new:[
              {id:1,con:"这里面可以包括注册时间，注册资本，公司性质，技术力量，规模，员工人数，员工素质等；"},
              {id:2,con:"公司的发展速度，有何成绩，有何荣誉称号等；"},
              {id:3,con:"公司的目标，理念，宗旨，使命，愿景，寄语等；"},
              {id:4,con:"性能，特色，创新，超前；"},
              {id:5,con:"销售量，各地销售点等；"},
              {id:6,con:"主要是公司售后服务的承诺。"},
          ]
      }
    },
    template:`
     <div style="padding-top:44px;position: absolute">
     <li>
        <span style="padding: 0px 50px">
        {{$route.params.id}}
        公司简介是什么，就是对公司，对企业的介绍。这种介绍不是一句话带过，也不是长篇大论，是简单扼要的介绍公司的一段文字，让别人初步了解公司的基本情况。
        </span>
     </li>
     
     </div>
`,
})
var Two=Vue.component("two",{
    template:`<div>
                    <router-view name="left"></router-view>
                    <router-view name="right"></router-view>
                </div>`,
    beforeRouteEnter(to,from,next){

        next(function(vm){
            if(!vm.get("login","name")){
                router.push("/login");
            }
        })
    }
})
var left=Vue.component("left",{
    template:`<div class="left">
                    <ul class="list">
                        <router-link to="#one" tag="li">我是列表1111</router-link>
                        <router-link to="#two" tag="li">我是列表2222</router-link>
                        <router-link to="#three" tag="li">我是列表3333</router-link>
                        <router-link to="#four" tag="li">我是列表4444</router-link>
                        <router-link to="#five" tag="li">我是列表5555</router-link>
                    </ul>
                </div>`,
        watch:{
            $route(){
                var hash=this.$route.hash.slice(1);
                var vm = this;
                function animate () {
                    if (TWEEN.update()) {
                        requestAnimationFrame(animate)
                    }
                }
                new TWEEN.Tween({ tweeningNumber:document.querySelector(".right").scrollTop })
                    .easing(TWEEN.Easing.Quadratic.Out)
                    .to({ tweeningNumber: (document.querySelector("#"+hash).offsetTop)-44 }, 500)
                    .onUpdate(function () {
                        document.querySelector(".right").scrollTop= this.tweeningNumber.toFixed(0)
                    })
                    .start()
                animate()

            }
        }
})
var right=Vue.component("right",{
    template:`<div class="right">
        <div class="floor" id="one">
         
            <h1>我是列表1111</h1><br>
            
            在一个长度为n的数组里的所有数字都在0到n-1的范围内。<br> 数组中某些数字是重复的，但不知道有几个数字是重复的。也不知道每个数字重复几次。<br>请找出数组中任意一个重复的数字。 例如，如果输入长度为7的数组[2,3,1,0,2,5,3]，<br>那么对应的输出是第一个重复的数字2。
         </div>
         
         <div class="floor" id="two">
         
            <h1>我是列表2222</h1><br>
            
            输入一个整数数组，实现一个函数来调整该数组中数字的顺序，<br>使得所有的奇数位于数组的前半部分，所有的偶数位于位于数组的后半部分，<br>并保证奇数和奇数，偶数和偶数之间的相对位置不变
         </div>
         
          <div class="floor" id="three">
         
            <h1>我是列表3333</h1><br>
             
            把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。 输入一个非递减<br>排序的数组的一个旋转，输出旋转数组的最小元素。 <br>例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。<br> NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。
         </div>
         
          <div class="floor" id="four">
            <h1>
            我是列表4444
           </h1>
            创建一个函数，输入一个链表，输出一个数组，<br>数组中的值是链表中的值的逆序输出。
计算机中以1对1方式存数据结构分两种:<br>1.数组 2.链表，如果数据写入和删除操作十分频繁，链表结构优于数组。链表的解释如下：<br>

链表由多个不连续的，独立的节点(LinkNode)链接起来，<br>构成的线性结构。每个节点中最少存在两个属性，一个属性(val)用于保存该节点需要的数据，另一个属性(next)，<br>确切说是引用(指针)，用于找到下一个节点。          
           </div>
           <div class="floor" id="five">
            <h1>
            我是列表5555
           </h1>
            创建一个函数，输入一个链表，输出一个数组，<br>数组中的值是链表中的值的逆序输出。
计算机中以1对1方式存数据结构分两种:<br>1.数组 2.链表，如果数据写入和删除操作十分频繁，链表结构优于数组。链表的解释如下：<br>

链表由多个不连续的，独立的节点(LinkNode)链接起来，<br>构成的线性结构。每个节点中最少存在两个属性，一个属性(val)用于保存该节点需要的数据，另一个属性(next)，<br>确切说是引用(指针)，用于找到下一个节点。          
           </div>
        </div>`,
})
var aaa=Vue.component("aaa",{
    template:"<div>配置当链接被精确匹配的时候应该激活的 class。注意默认值也是可以通过路由构造函数选项 linkExactActiveClass 进行全局配置的。配置当链接被精确匹配的时候应该激活的 class。注意默认值也是可以通过路由构造函数选项 linkExactActiveClass 进行全局配置的。配置当链接被精确匹配的时候应该激活的 class。注意默认值也是可以通过路由构造函数选项 linkExactActiveClass 进行全局配置的。</div>"
})
var bbb=Vue.component("bbb",{
    template:"<div>有时候我们要让激活 class 应用在外层元素，而不是 a 标签本身，那么可以用 router-link 渲染外层元素，包裹着内层的原生 a 标签：有时候我们要让激活 class 应用在外层元素，而不是 a 标签本身，那么可以用 router-link 渲染外层元素，包裹着内层的原生 a 标签：有时候我们要让激活 class 应用在外层元素，而不是 a 标签本身，那么可以用 router-link 渲染外层元素，包裹着内层的原生 a 标签：</div>"
})

var Login=Vue.component("Login",{
    template:`
<div>
<div class="logins">
        <div class="login">
            <span class="back" @click="back"><</span>
            <h1>登录</h1>
            <form>
                <span> 用户名：</span><input type="text" class="name" id="name" placeholder="请输入用户名"> 
                 <span>密码：</span><input type="password" class="pass" id="pass" placeholder="请输入密码">
                 <button type="button" class="denglu" @click="submit">登录</button> 
            </form>
        </div>
        </div>
</div>`,
    methods:{
        back(){
            router.push("/");
        },
        submit(){

            var obj={"name":document.querySelector("#name").value}
            this.save("login",obj);
            router.push("/two")
        }

    }


})



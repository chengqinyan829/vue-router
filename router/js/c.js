var index=Vue.component("index",{
    props:["nav"],
    data(){
        return{
            navs:[
                {title:"首页",a:"/"},
                {title:"公司简介",a:"/info"},
                {title:"文档说明",a:"/doc"},
            ],
            islogin:false,
            name:"",
            isshow:false
        }
    },
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
    },
    //导航
    template:`
    <div id="box">
        <div class="abc">
            <li v-for="item in navs">
                <router-link :to="item.a" exact>
                <span>{{item.title}}</span>
                </router-link>
            </li>
            <!--登录-->
            <router-link to="/login" v-if="!islogin">login</router-link>
       
        <span v-if="islogin" class="info" @click="show">
        {{name}}
            <span  class="logout" v-show="isshow" @click="logout">退出</span>
        </span>
        </div>
        <transition name="slide-fade" mode="out-in">
            <router-view class="center"></router-view>
        </transition>
    </div>
    `,
})
//首页
var Home=Vue.component("home",{
    template:"<div class='picture'><img src='img/06.jpg' alt=''></div>"
})
//公司简介
var One=Vue.component("Info",{
    template:`
     <div class="Info"> 
        <!--<index></index>-->
        <transition name="opacity" mode="out-in">
            <router-view style="text-align: center"> 
            </router-view>
        </transition>
     </div>
`
})
var List=Vue.component("List",{
    template:`<div>
                    <ul class="lists">
                        <router-link tag="li" to="/info/list/1">列表1</router-link>
                        <router-link tag="li" to="/info/list/2">列表2</router-link>
                        <router-link tag="li" to="/info/list/3">列表3</router-link>
                        <router-link tag="li" to="/info/list/4">列表4</router-link>
                    </ul>
              </div>`
})
var Con=Vue.component("Con",{
    template:`
        <div>
            {{$route.params.id}}
            <div>我是列表的内容</div><router-view></router-view>
        </div>
    `
})
//文档说明
var Two=Vue.component("two",{
    template:`
    <div style="position: absolute;left:0;top:0;width:100%">
    <index></index>
      <div class="two">
      <router-view name="left" class="left"></router-view>
      <router-view name="right" class="right"></router-view>
      </div>
     </div>
    `
})
//左边
var left=Vue.component("left",{
    template:`
        <div class="left">
            <div>
                <ul> 
                    <li> 
                        <strong>基础</strong>
                        <ul class="son"> 
                          <li> 
                              <router-link to="#one" tag="li">开始</router-link>
                          </li>
                          <li> 
                          <router-link to="#two" tag="li">动态路由匹配</router-link>
                          </li>
                        </ul>
                    </li>
                    
                    <li> 
                        <strong>进阶</strong>
                        <ul class="son"> 
                        <router-link to="#three" tag="li">导航守卫</router-link>
                        <router-link to="#four" tag="li">路由元信息</router-link>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    `,
    watch:{
        $route(){
            var hash=this.$route.hash.slice(1);
            var vm = this
            function animate () {
                if (TWEEN.update()) {
                    requestAnimationFrame(animate)
                }
            }
            new TWEEN.Tween({ tweeningNumber:document.querySelector(".right").scrollTop })
                .easing(TWEEN.Easing.Quadratic.Out)
                .to({ tweeningNumber: (document.querySelector("#"+hash).offsetTop)-50 }, 500)
                .onUpdate(function () {
                    document.querySelector(".right").scrollTop= this.tweeningNumber.toFixed(0)
                })
                .start()
            animate()

        }
    }
})
//右边
var right=Vue.component("right",{
    template:`
        <div>
         <div class="floor" id="one">
         <h3>动态路由匹配</h3><br>
         我们经常需要把某种模式匹配到的所有路由，全都映射到同个组件。例如，我们有一个 User 组件，对于所有 ID 各不相同的用户，都要使用这个组件来渲染。
         </div>
         
         <div class="floor" id="two">
         <h3>响应路由参数的变化</h3><br>
         提醒一下，当使用路由参数时，例如从 /user/foo 导航到 user/bar，原来的组件实例会被复用。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。      </div>
         
          <div class="floor" id="three">
          <h3>高级匹配模式</h3><br>
          vue-router 使用 path-to-regexp 作为路径匹配引擎，所以支持很多高级的匹配模式，例如：可选的动态路径参数、匹配零个或多个、一个或多个，甚至是自定义正则匹配。查看它的 文档 学习高阶的路径匹配，还有 这个例子 展示 vue-router 怎么使用这类匹配。
          </div>

          <div class="floor" id="four">
          <h3>匹配优先级</h3>
           有时候，同一个路径可以匹配多个路由，此时，匹配的优先级就按照路由的定义顺序：谁先定义的，谁的优先级就最高。
           </div>
      </div>
    `
})
//登录
var login=Vue.component("login",{
    template:`
    <div>
<header class="mui-bar mui-bar-nav">
        <a class="mui-icon mui-icon-undo" @click="back"></a>
			<h1 class="mui-title">登录</h1>
</header>
<div class="mui-content">
			<form id='login-form' class="mui-input-group">
				<div class="mui-input-row">
					<label>账号</label>
					<input id='name' type="text" class="mui-input-clear mui-input" placeholder="请输入账号">
				</div>
				<div class="mui-input-row">
					<label>密码</label>
					<input id='password' type="password" class="mui-input-clear mui-input" placeholder="请输入密码">
				</div>
			</form>
		
			<div class="mui-content-padded">
				<button id='login' class="mui-btn mui-btn-block mui-btn-primary" @click="submit">登录</button>
			
			</div>
			<div class="mui-content-padded oauth-area">
			</div>
		</div></div>
    `,
    methods:{
        back(){
            router.push("/");
        },
        submit(){

            var obj={"name":document.querySelector("#name").value}
            this.save("login",obj);
            router.push("/doc")
        }
    }
})
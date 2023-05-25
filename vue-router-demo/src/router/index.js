// 引入vue组件和vue-router路由组件
import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Message from '../components/Message.vue';
import Detail from '../components/Detail.vue';

// 这行代码大概就是在vue中使用VueRouter的意思
Vue.use(VueRouter)

export default new VueRouter({
    // 路由配置，是一个数组的形式，其中包含的是以对象的方式配置的路由
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/about',
            component: About,
            children: [
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            path: 'detail',
                            // path: 'detail/:id/:title', //使用占位符声明接收params参数
                            component: Detail
                        }
                    ]
                }
            ]
        }
    ]
})


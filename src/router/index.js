import Vue from 'vue'
import Router from 'vue-router'
const index = r => require.ensure([], () => r(require('@/view/index')), 'chunkname1')
const home = r => require.ensure([], () => r(require('@/view/home')), 'chunkname2')
const detail = r => require.ensure([], () => r(require('@/view/detail')), 'chunkname3')

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: "/newvuecli",
    routes: [
        /*{ path: '*', component: NotFoundComponent },//404页面*/
        { //菜单内容页面
            path: '/',
            name: '',
            component: index,
            children: [
                /*首页*/
                { //欢迎页面
                    path: '/',
                    name: 'home',
                    component: home
                },
                {
                    path: '/detail',
                    name: 'detail',
                    component: detail
                }
            ]
        }
    ]
})

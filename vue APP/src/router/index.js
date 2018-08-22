//导入模块
import Vue from 'vue';
import Router from 'vue-router';

//注册模块
Vue.use(Router);

const Home = () => import('../components/Home.vue');
const History = () => import('../components/History.vue');
const Chat = () => import('../components/Chat.vue');
const Setting = () => import('../components/Setting.vue');
const Mt = () => import('../components/Homelist/mt.vue');
const Zb = () => import('../components/Homelist/zb.vue');
const Zc = () => import('../components/Homelist/zc.vue');
const Yy = () => import('../components/Homelist/yy.vue');
const Gs = () => import('../components/Homelist/gs.vue');

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        path:'',
        component:Mt
      },
      {
        path:'Gs',
        component:Gs
      },
      {
        path:'Zc',
        component:Zc
      },
      {
        path:'Yy',
        component:Yy
      },
      {
        path:'Zb',
        component:Zb
      }
    ]
  },
  {
    path: '/History',
    name: 'History',
    component: History
  },
  {
    path: '/Chat',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/Setting',
    name: 'Setting',
    component: Setting
  }
];

//路由
export default new Router({
  routes: routes
});

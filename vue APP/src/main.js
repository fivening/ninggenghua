//导入模块
import Vue from 'vue'
import App from './App'
import router from './router'
import 'babel-polyfill'  //IE9兼容箭头函数
import Vant from 'vant'
import 'vant/lib/vant-css/index.css';

Vue.use(Vant);

//开启调试
Vue.config.productionTip = false

//实列化Vue对象
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

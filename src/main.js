import '@/assets/scss/iconfont/iconfont.css';
//import "babel-polyfill";
import Vue from 'vue';
import App from './App.vue';
import router from './vue/router/';
//import FastClick from 'fastclick';
import { Waterfall, Lazyload, Toast, Tag, Dialog, Cell, CellGroup, Field, Icon ,Button } from 'vant';
import { setDocumentTitle } from '@/assets/js/util';
import filters from "@/assets/js/vue-filter";

Vue.use(Waterfall);
Vue.use(Lazyload);
Vue.use(Tag);
Vue.use(Dialog);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Field);
Vue.use(Icon);
Vue.use(Button);

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

router.beforeEach((to, from, next) => {
	Toast.loading({ mask: true });
	next();
})

router.afterEach((to, from) => {
	Toast.clear();
})

//Vue.config.errorHandler = (err, vm, info) => {
//	Toast.fail(`网络错误! 错误代码: ${info}`);
//}
//FastClick.attach(document.body);
//	moment.locale('zh-cn')
//	console.log(moment("20111031", "YYYYMMDD").fromNow());
//	console.log(moment().format('dddd'));
new Vue({
  el: '#app',
	router,
  render: h => h(App)
});

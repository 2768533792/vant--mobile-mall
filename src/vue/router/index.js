import Vue from 'vue';
import Router from 'vue-router';

import home from './home';
import items from './items';
import user from './user';
import order from './order';
import login from './login';

Vue.use(Router);

export default new Router({
		routes:[...home, ...items, ...user, ...order, ...login]
})
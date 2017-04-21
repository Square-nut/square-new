import Vue from 'vue';
import Router from 'vue-router';

//import Recharge from '@/components/recharge-main.vue'

import nav from '@/views/nav';
import login from '@/views/login';
import register from '@/views/register';
import setting from '@/views/setting';
import chatList from '@/views/chatList';
import chat from '@/views/chat';
import contacts from '@/views/contacts';
import active from '@/views/active';
import addContacts from '@/views/addContacts';
import moreFunc from '@/views/moreFunc';

Vue.use(Router);

const router = new Router({
	routes:[
		{path:'/',name:'login',component: login},
		{path:'/register',name:'register',component: register},
		{path:'/qq',name:'qq',component: nav,
			children:[
				{path:'chatList',name:'chatList',component: chatList},
				{path:'chat',name:'chat',component: chat},
				{path:'contacts',name:'contacts',component: contacts},
				{path:'active',name:'active',component: active},
				{path:'setting',name:'setting',component: setting},
				{path:'addContacts',name:'addContacts',component: addContacts},
				{path:'moreFunc',name:'moreFunc',component: moreFunc}
			]
		}
	]
});
// 经测试发现router中不能设置vuex!!!!!!!!!!!!!
// router.beforeEach((to,from,next) =>{
// 		// 在当前路由改变，但是该组件被复用时调用
// 		// 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
// 		// 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
// 		// 可以访问组件实例 `this`
//
// });

export default router;

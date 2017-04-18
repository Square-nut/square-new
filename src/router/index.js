import Vue from 'vue';
import Router from 'vue-router';

//import Recharge from '@/components/recharge-main.vue'

import QQ_nav from '@/views/virtualQQ_nav';
import QQ_login from '@/views/login';
import QQ_register from '@/views/register';
import QQ_setting from '@/views/setting';
import QQ_talkList from '@/views/talkList';
import QQ_talking from '@/views/talking';
import QQ_contacts from '@/views/contacts';
import QQ_active from '@/views/active';
import QQ_addContacts from '@/views/addContacts';
import QQ_moreFunc from '@/views/moreFunc';

Vue.use(Router);

const router = new Router({
	routes:[
		{path:'/',name:'login',component: QQ_login},
		{path:'/register',name:'register',component: QQ_register},
		{path:'/qq',name:'qq',component: QQ_nav,
			children:[
				{path:'talkList',name:'talkList',component: QQ_talkList},
				{path:'talking',name:'talking',component: QQ_talking},
				{path:'contacts',name:'contacts',component: QQ_contacts},
				{path:'active',name:'active',component: QQ_active},
				{path:'setting',name:'setting',component: QQ_setting},
				{path:'addContacts',name:'addContacts',component: QQ_addContacts},
				{path:'moreFunc',name:'moreFunc',component: QQ_moreFunc}
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

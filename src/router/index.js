import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import VueResource from 'vue-resource';

//import Recharge from '@/components/recharge-main.vue'

import Nav from '@/components/Nav';
import Home from '@/components/Home';
import Myself from '@/components/myself';

import VirtualQQ from '@/components/virtualQQ_nav';
import QQ_login from '@/components/virtualQQ/login';
import QQ_register from '@/components/virtualQQ/register';
import QQ_setting from '@/components/virtualQQ/setting';
import QQ_talkList from '@/components/virtualQQ/talkList';
import QQ_talking from '@/components/virtualQQ/talking';
import QQ_contacts from '@/components/virtualQQ/contacts';
import QQ_active from '@/components/virtualQQ/active';
import QQ_addContacts from '@/views/addContacts';
import QQ_moreFunc from '@/views/moreFunc';
Vue.use(Router);
Vue.use(VueResource);

const router = new Router({
	routes:[{
		path:"/",
		component: Nav,
		children: [
			// {path:'home',name:'home',component: Home},
			{path:'login',name:'login',component: QQ_login},
			{path:'register',name:'register',component: QQ_register},
			{path:'qq',name:'qq',component: VirtualQQ,
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
			// {path:'pre',name:'myself',component: Myself},
			// {path:'myself',name:'myself',component: Myself}
		]
	}]

});
// router.beforeEach((to,from,next) =>{
// 		// 在当前路由改变，但是该组件被复用时调用
// 		// 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
// 		// 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
// 		// 可以访问组件实例 `this`
//
// });

export default router;

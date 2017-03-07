import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import Login_main from '@/components/Login-main';
import Login from '@/components/Login';
import Register from '@/components/Register';
//import Recharge from '@/components/recharge-main.vue'

import Nav from '@/components/Nav'
import Home from '@/components/Home'

import VirtualQQ from '@/components/virtualQQ_nav'
import QQ_setting from '@/components/virtualQQ/setting'
import QQ_home from '@/components/virtualQQ/talkList'
import QQ_talk from '@/components/virtualQQ/talking'
import QQ_contacts from '@/components/virtualQQ/contacts'
import QQ_active from '@/components/virtualQQ/active'
import Myself from '@/components/Myself'
Vue.use(Router);

//export default new Router({
//routes: [
//  {
//    path: '/',
//    name: 'Hello',
//    component: Hello
//  }
//]
//})
export default new Router({
	routes:[{
		path:"/",
		component: Login_main,
		children:[
			{path:'login',component:Login},
			{path:'register',component:Register}
		]
	},{
		path:'/home',
		component:Nav,
		children:[
			{path:'main',name:'main',component: Home},
			{
				path:'qq',
				name:'qq',
				component: VirtualQQ,
				children:[
					{path:'setting',name:'setting',component: QQ_setting},
					{path:'talk',name:'talk',component: QQ_talk},
					{path:'contacts',name:'contacts',component: QQ_contacts},
					{path:'active',name:'active',component: QQ_active}
				]
			},
//			{path:'recharge',name:'recharge',component: Recharge},
			{path:'self',name:'self',component: Myself}
		]
	}]
});

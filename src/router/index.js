import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

//import Recharge from '@/components/recharge-main.vue'

import Nav from '@/components/Nav'
import Home from '@/components/Home'
import Myself from '@/components/myself'

import VirtualQQ from '@/components/virtualQQ_nav'
import QQ_login from '@/components/virtualQQ/login';
import QQ_register from '@/components/virtualQQ/register';
import QQ_setting from '@/components/virtualQQ/setting'
import QQ_home from '@/components/virtualQQ/talkList'
import QQ_talk from '@/components/virtualQQ/talking'
import QQ_contacts from '@/components/virtualQQ/contacts'
import QQ_active from '@/components/virtualQQ/active'
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
		component: Nav,
		children: [
			{path:'home',name:'home',component: Home},
			{path:'login',name:'login',component: QQ_login},
			{path:'register',name:'register',component: QQ_register},
			{path:'qq',name:'qq',component: VirtualQQ,
				children:[
					{path:'talk',name:'talk',component: QQ_talk},
					{path:'contacts',name:'contacts',component: QQ_contacts},
					{path:'active',name:'active',component: QQ_active},
					{path:'setting',name:'setting',component: QQ_setting}
				]
			},
			{path:'myself',name:'myself',component: Myself}
//			,
//			{path:'prescription',name:'contacts',component: PreNav,
//				children: [
//					{path:'login',name:'contacts',component: QQ_login},
//					{path:'register',name:'contacts',component: QQ_register}
//				]
//			}
		]
	}]
});

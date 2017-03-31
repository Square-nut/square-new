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
					{path:'talkList',name:'talkList',component: QQ_talkList},
					{path:'talking',name:'talking',component: QQ_talking},
					{path:'contacts',name:'contacts',component: QQ_contacts},
					{path:'active',name:'active',component: QQ_active},
					{path:'setting',name:'setting',component: QQ_setting},
					{path:'addContacts',name:'addContacts',component: QQ_addContacts},
					{path:'moreFunc',name:'moreFunc',component: QQ_moreFunc}
				]
			},
			{path:'pre',name:'myself',component: Myself},
			{path:'myself',name:'myself',component: Myself}
		]
	}]
});

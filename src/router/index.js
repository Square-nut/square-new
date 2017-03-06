import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import Login_main from 'views/Login-main';
import Login from 'components/Login';
import Register from 'components/Register';
import recharge from 'views/recharge-main'

import Nav from 'components/Nav'
import Home from 'views/Home'

import VirtualQQ from 'components/virtualQQ_nav'
import QQ_setting from 'views/virtualQQ/setting'
import QQ_home from 'views/virtualQQ/talkList'
import QQ_talk from 'views/virtualQQ/talking'
import QQ_contacts from 'views/virtualQQ/contacts'
import QQ_active from 'views/virtualQQ/active'
import Recharge from 'views/recharge-main.vue'
import Myself from 'views/Myself'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})

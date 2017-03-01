<template>
	<div class="container">
		<div class='main'>
			<router-view></router-view>
		</div>
		<div class="nav">
			<router-link to='/qq/talkList' class="item icon iconfont icon-talk" :class="{'blue':func == 'talkList'}">
				<!--<img src="../assets/talkCheck.png" class="item-icon" v-if='talkCheck'/>
				<img src="../assets/talk.png" class="item-icon" v-else/>-->
				<p class="item-desc" :class="{'blue':func == 'talkList'}">消息</p>
			</router-link>
			<router-link to='/qq/contacts' class="item icon iconfont icon-contact" :class="{'blue':func == 'contacts'}">
				<!--<img src="../assets/contactsCcheck.png" class="item-icon" v-if='contactsCheck'/>
				<img src="../assets/contact.png" class="item-icon" v-else/>-->
				<p class="item-desc" :class="{'blue':func == 'contacts'}">联系人</p>
			</router-link>
			<router-link to='/qq/active' class="item icon iconfont icon-star" :class="{'blue':func == 'active'}">
				<!--<img src="../assets/activeCheck.png" class="item-icon" v-if='activeCheck'/>
				<img src="../assets/active.png" class="item-icon" v-else/>-->
				<p class="item-desc" :class="{'blue':func == 'active'}">动态</p>
			</router-link>
			<!--<menus :iconSrc='' :link='xxxx/xxx' :menuName='消息'></menus>-->
		</div>
	</div>
</template>
<style scoped>
	.container{
		width: 450px;
		height: 750px;
		margin: auto;
		overflow: hidden;
	}
	.main{
		width: 100%;
	}
	.nav{
		display: flex;
		justify-content: center;
		width: 100%;
		background: #EBECEE;
	}
	.nav .item{
		flex: 1;
		text-align: center;
		text-decoration: none;
		padding-top: 3px;
		color: #7F8293;
	}
	.nav .item:hover{
		color: #108EE9;
	}
	.nav .item .item-icon{
		width: 37.5px;
	}
	.nav .item-desc{
		/*margin: 0;*/
	}
	.nav .blue{
		color: #108EE9;
	}
</style>
<script>
//	import menus from '@/components/virtualQQ/menu'
	export default {
		name: 'qq_navigation',
		data () {
			return {
				talkCheck: true,
				activeCheck: false,
				contactsCheck: false,
				func: 'talkList' // 当前获得焦点的是哪个功能
			}
		},
		beforeRouteUpdate (to, from, next) {
		    // 在当前路由改变，但是该组件被复用时调用
		    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
		    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
		    // 可以访问组件实例 `this`
		    var target = to.path.split('/')[2];
		    if(to.path.split('/')[2] == 'talkList'){
		    	this.talkCheck = true;
		    	this.contactsCheck = false;
		    	this.activeCheck = false;
		    	this.func = 'talkList';
		    }
		    if(to.path.split('/')[2] == 'contacts'){
		    	this.talkCheck = false;
		    	this.contactsCheck = true;
		    	this.activeCheck = false;
		    	this.func = 'contacts';
		    }
		    if(to.path.split('/')[2] == 'active'){
		    	this.talkCheck = false;
		    	this.contactsCheck = false;
		    	this.activeCheck = true;
		    	this.func = 'active';
		    }
		    next(true);
	  	}
	}
</script>
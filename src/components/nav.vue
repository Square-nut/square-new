<template>
	<div class="container">
		<topBar :currFunc="func" ></topBar>
		<router-view class="middle"></router-view>
		<footer class="nav">
			<router-link to='/qq/chatList' class="item icon iconfont icon-talk" :class="{'blue':func == 'chatList'}">
				<p class="item-desc" :class="{'blue':func == 'chatList'}">消息</p>
			</router-link>
			<router-link to='/qq/contacts' class="item icon iconfont icon-contact" :class="{'blue':func == 'contacts'}">
				<p class="item-desc" :class="{'blue':func == 'contacts'}">联系人</p>
			</router-link>
			<router-link to='/qq/active' class="item icon iconfont icon-star" :class="{'blue':func == 'active'}">
				<p class="item-desc" :class="{'blue':func == 'active'}">动态</p>
			</router-link>
			<!--<menus :iconSrc='' :link='xxxx/xxx' :menuName='消息'></menus>-->
		</footer>
	</div>
</template>
<style scoped>
	.container{
		margin: auto;
		overflow: hidden;
	}
	.middle{
		/*width: 100%;*/
		position: relative;
		margin: 0 .13rem;
	}
	.main-header{
		margin: 0 .13rem;
	}
	.main{
		/*width: 100%;*/
	}
	.nav{
		position: fixed;
		bottom: 0;
		display: flex;
		justify-content: center;
		width: 100%;
		height: 1.17rem;
		background: #EBECEE;
	}
	.nav .item{
		flex: 1;
		text-align: center;
		text-decoration: none;
		padding-top: 3px;
		font-size: .64rem;
		color: #7F8293;
	}
	.nav .item .item-desc{
		font-size: .24rem;
	}
	.nav .item:hover{
		color: #108EE9;
	}
	.nav .item .item-icon{
		width: 37.5px;
	}
	.nav .blue{
		color: #108EE9;
	}
</style>
<script>
	import topBar from '@/views/topBar'
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
		components:{
			topBar
		},
		beforeRouteUpdate (to, from, next) {
		    // 在当前路由改变，但是该组件被复用时调用
		    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
		    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
		    // 可以访问组件实例 `this`
		    var target = to.path.split('/')[2];
		    if(target == 'chatList'){
		    	this.talkCheck = true;
		    	this.contactsCheck = false;
		    	this.activeCheck = false;
		    	this.func = target;
		    }
		    if(target == 'contacts'){
		    	this.talkCheck = false;
		    	this.contactsCheck = true;
		    	this.activeCheck = false;
		    	this.func = target;
		    }
		    if(target == 'active'){
		    	this.talkCheck = false;
		    	this.contactsCheck = false;
		    	this.activeCheck = true;
		    	this.func = target;
		    }
		    next(true);
	  	}
	}
</script>

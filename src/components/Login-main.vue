<template>
	<div class="bg">
		<div class="loginContainer">
			<nav>
				<router-link to='/login' :class='{current:true}'>登录</router-link>
				<router-link to='/register'>注册</router-link>
			</nav>
			<div class="login-wrap">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				isLogin:false,
				setCurrentIndex:0
			}
		}
//		,
//		watch:{
//			// 如果路由有变化，会再次执行该方法 只要地址变化，就会执行这个方法'$route':'getNavData'
//			'$route' (to, from) {
//				this.setCurrentIndex(to);
//			}
//		}
	}
</script>
<style scoped>
	.bg{
		width: 100%;
		height: 100%;
		
	}
	nav a {
		display: inline-block;
		height: 80px;
		line-height: 80px;
		padding: 0 32px 0;
		text-decoration: none;
	}
	nav a .current{
		color: #108ee9;
		border-bottom: 4px solid;
	}
	.loginContainer{
		width: 50rem;
		height: 50rem;
	}
	.bar{
		color: #C9E6F2;
		border: 1px solid;
	}
</style>

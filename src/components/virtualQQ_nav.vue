<template>
	<div class="container">
		<div class='main'>
			<router-view></router-view>
		</div>
		<div class="nav">
			<router-link to='/qq/login'>登录</router-link>
			<router-link to='qq/register'>注册</router-link>
			<router-link to='qq/talkList'>聊天列表</router-link>
			<router-link to='qq/contacts'>联系人</router-link>
			<router-link to='qq/active'>动态</router-link>
		</div>
	</div>
</template>
<style scoped>
	.main{
		
	}
</style>
<script></script>
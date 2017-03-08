<template>
	<div class="container">
		<div class='main'>
			<router-view></router-view>
		</div>
		<div class="nav">
			<router-link to='qq/login'>登录</router-link>
			<router-link to='register'>注册</router-link>
			<router-link to='talkList'>聊天列表</router-link>
			<router-link to='contacts'>联系人</router-link>
			<router-link to='active'>动态</router-link>
		</div>
	</div>
	
</template>
<style scoped>
	
</style>
<script></script>
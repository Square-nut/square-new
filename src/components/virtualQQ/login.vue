<template>
	<div class="container">
		<div class="user-icon">
			<div class="user-icon-wrap">
				<img :src='userIcon'/>
			</div>
		</div>
		<div class="input-wrap">
			<input type="text" name="" id="userName" v-model='userName' class="w100"/>
			<input type="password" name="" id="userPWD" v-model='userPWD' class="w100" />
		</div>
		<div class="button-wrap">
			<input type="button" name="" id="" value="登录" @click='login' class="w90" />
		</div>
		<div class="other-wrap"></div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				userIcon: '@/assets/logo.png',
				userName: null,
				userPwd: null
			}
		},
		mounted(){
			
		},
		methods:{
			login(){
				
			}
		}
	}
</script>
<style scoped>
	.w100{
		width: 100%;
	}
	.w90{
		width: 90%;
	}
</style>
<template>
	<div class="container">
		<div class="user-icon">
			<div class="user-icon-wrap">
				<img src='../../assets/headicon.png'/>
			</div>
		</div>
		<div class="input-wrap">
			<input type="text" name="" id="userName" v-model='userName' class="w100"/>
			<p class="err-info">
				
			</p>
		</div>
		<div class="input-wrap">
			<input type="password" name="" id="userPWD" v-model='userPWD' class="w100" />
			<p class="err-info">
				
			</p>
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
				userIcon: '../../assets/logo.png',
				userName: '',
				userPWD: ''
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
	.input-wrap{
		position: relative;
		margin: 20px 0;
	}
	.input-wrap input{
		padding: 10px 0;
		border-radius: 2px;
		border: 1px solid #6e6e6e;
		cursor: pointer;
	}
	/*.input-wrap input:hover{
		border-color: #108EE9;
	}*/
	.button-wrap input{
		padding: 10px 0;
		border-radius: 2px;
		border: 0;
		cursor: pointer;
		color: white;
		background: #108EE9;
	}
	.err-info{
		position: absolute;
		left: 0;
		bottom: 10px;
		text-align: left;
		padding-left: 16px;
		background: url(../../assets/Error_16px_1114051_easyicon.net.png) left center;
	}
	.err{
		border-color: #FF4400;
	}
</style>
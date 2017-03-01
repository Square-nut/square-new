<template>
	<main class="container">
		<div class="user-icon">
			<img src='../../assets/headicon.png'/>
		</div>

		<div class="input-wrap">
			<input type="text" name="" id="userName" v-model='userName' @focus='inpFocus' :class="{'err-inp':nameErr}" class="w100"/>
			<p class="err-info" v-show="nameErr">
				{{ userErrInfo }}
			</p>
		</div>
		<div class="input-wrap">
			<input type="password" name="" id="userPWD" v-model='userPWD' @focus='inpFocus' :class="{'err-inp':pwdErr}" class="w100" />
			<p class="err-info" v-show="pwdErr">
				{{ pwdErrInfo }}
			</p>
		</div>
		<div class="button-wrap w90">
			<input type="button" name="" id="" value="登录" @click='login' class="w100" />
		</div>
		<div class="other-wrap"></div>
	</main>
</template>
<script>
	export default {
		data(){
			return {
				userIcon: '../../assets/logo.png',
				userName: '',
				userPWD: '',
				nameErr: false,
				pwdErr: false,
				userErrInfo: '',
				pwdErrInfo: ''
			}
		},
		mounted(){

		},
		methods:{
			login(){
				this.userName = this.userName.trim();
				if( this.userName == ""){
					this.nameErr = true;
					this.userErrInfo='请填写用户名';
				}else if( this.userPWD == ""){
					this.pwdErr = true;
					this.pwdErrInfo='请填写密码';
				}else{
					this.$router.push('/qq/talkList');
				}

			},
			inpFocus(){
				this.nameErr = false;
				this.pwdErr = false;
			}
		}
	}
</script>
<style scoped>
	.container{
		width: 450px;
		height: 750px;
		margin: auto;
	}
	.w100{
		width: 99%;
	}
	.w90{
		width: 90%;
		margin: auto;
	}
	.w80{
		width: 80%;
		margin: auto;
	}
	.input-wrap{
		height: 58px;
		position: relative;
		margin: 25px 0;
	}
	.user-icon{
		width: 75px;
		margin: auto;
	}
	.input-wrap input{
		padding: 10px 0;
		border-radius: 2px;
		border: 1px solid #6e6e6e;
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
		text-align: center;
	}
	.input-wrap .err-inp{
		border: 1px solid #E33333;
	}
	.err-info{
		color: #E33333;
		padding-left: 16px;
		background: url(../../assets/Error.png) left center no-repeat;
	}
	.err{
		border-color: #FF4400;
	}
</style>

<template>
	<div class="login-wrap">
		<form method="post" class="form">
			<div class="lineWrap">
				<label>用户名：</label><input type="text" name="loginUser" v-model="d_user"/>
			</div>
			<div class="lineWrap">
				<label>密码：</label><input type="password" name="loginPwd" v-model="d_pwd"/>
			</div>	
			<div class="codeWrap lineWrap" v-show="isCode >= 3">
				<label>验证码</label><input type="text" name="logeinCode" /><img :src="imgUrl" id="loginCode"/>
			</div>
			<div class="lineWrap login">
				<!--<input type="submit" value=""/>-->
				<input type="button" name="sub" id="sub" @click="getLogin" value="提交" />
				<input type="button" name="sub" id="sub" value="注册" @click="router.push('/register')"/>
			</div>
		</form>
		
	</div>
</template>
<script>
	
	export default {
		data(){
			return {
				isCode:0,
				imgUrl:'',
				d_user:"",
				d_pwd:""
			}
		},
		method:{
			getLogin(){
				_that = this;
				$.ajax({
					url:'mock',
					data:JSON.stringify({
						'userName':this.d_user,
						'pwd':this.pwd
					}),
					success:function(res){
						if(res.code == '000000'){
							router.push('/home');
						}else{
							this.isCode += 1;
						}
					},
					error:function(e){
						this.isCode += 1;
					}
				});
			}
		}
		
	}
</script>
<style scoped>
	.login-wrap{
		border: 1px solid;
		margin: auto;
	}
	.lineWrap{
		text-align: right;
	}
	.login{
		text-align: center;
	}
</style>
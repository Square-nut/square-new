<template>
	<div class="chat-panel">
		<div class="bubble" v-for="item in chatList" :class="{posRight:'item.userId == userId'}">
			<div class="user-icon"><img :src="item.userIcon" /></div>
			<p>{{ item.paragraph }}</p>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				chatList: [],
				loginId: ''
			}
		},
		mounted(){
			var id = window.sessionStorage.friendId;
			this.loginId = id;
		//			获取当前聊天列表
			this.$http.get('static/mock/talkHis.json').then(function(res){
				if(res.data.code=='000000'){
					this.chatList = res.data.data;
				}
			},function(e){
				console.log('服务器错误');
			})
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
	.bubble{
		text-align: left;
	}
	.bubble .user-icon{
		width: 50px;
		padding: 8px;
	}
	.bubble img{
		width:
	}
	.posRight{
		direction: rtl;
	}
	.chat-panel{
		background: #ecedf1;
	}
</style>

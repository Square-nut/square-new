<template>
	<div>
		<div class="bubble" v-for="item in talkHistory" :class="{posRight:'item.userId == userId'}">
			<img :src="item.userIcon" />
			<p>{{ item.paragraph }}</p>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				a: 'a',
				talkHistory: [],
				userId: ''
			}
		},
		mounted(){
			let that = this;
			let id = window.sessionStorage.friendId;
			that.userId = id;
//			获取右上角获取聊天记录
			this.$http.get('static/mock/talkHis.json').then(function(res){
				 that.talkHistory = res.data.data;
			}).catch(function(e){
				console.log(e);
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
	.posRight{
		text-align: right;
	}
</style>

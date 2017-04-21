<template>
	<div>
		待开发
		<div class="bubble" v-for="item in talkHistory" :class="{right:'item.userId == userId'}">
			<img :src="item.userIcon" />

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
			let id = window.sessionStorage.friendId;
			this.userId = id;
//			获取右上角获取聊天记录
			this.$http.get('static/mock/talkHis.json').then(function(res){
				 this.talkHis = res.data.data;
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
	.right{
		text-align: right;
	}
</style>

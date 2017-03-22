<template>
	<div class="container">
		<header class="talk-list-header">
			<a href="javascript:;" class="user-icon">
				<img src="../../assets/headicon.png"/>
			</a>
			<div class="title">
				<input type="radio" id="title-info" checked="checked" name="title"/><label for="title-info" class="label-info">消息</label>
				<input type="radio" id="title-telep" name="title"/><label for="title-telep" class="label-telep">电话</label>
			</div>
			<div class="add-menu">
				<i class="add-icon iconfont icon-talk"></i>
				<ul class="menu-cont">
					<li v-for="item in menu"><i class="iconfont paR10" :class="item.className"></i>{{ item.name }}</li>
				</ul>
			</div>
		</header>
		<div class="body"></div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				menu: [],
				talkList:[]
			}
		},
		mounted(){
//			获取当前聊天列表
			this.$http.get('static/mock/talkList.json','122333').then(function(res){
				if(res.code='000000'){
					this.talkList = res.data;
				}
			},function(e){
				console.log('服务器错误');
			})
//			获取右上角MENU list
			this.$http.get('static/mock/menuList.json').then(function(res){
				this.menu = res.data.data;
			},function(e){
				console.log('服务器错误');
			})
		},
		methods:{

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
	.container{
		position: relative;
	}
	.talk-list-header {
		display: flex;
		justify-content: space-between;
	}
	.talk-list-header .user-icon{
		/*position: absolute;
		left: 0;
		height: 0;*/
		/*display: block;*/
		/*border-radius: ;*/
	}
	.talk-list-header .title label{
		border: 1px solid;
		color:  #108ee9;
		padding: .2rem 1rem;
		margin: 0;
		background: #fff;
		cursor: pointer;
	}
	.title input{
		display: none;
	}
	.title .label-info{
		border-top-left-radius: .2rem;
		border-bottom-left-radius: .2rem;
	}
	.title .label-telep{
		border-top-right-radius: .2rem;
		border-bottom-right-radius: .2rem;
	}
	input:checked + label{
		background: #108EE9;
		color:#ffffff;
	}
	.talk-list-header .add-menu,
	.talk-list-header .title,
	.talk-list-header .user-icon{
		flex: 1;
	}
	..talk-list-header .add-menu{
		text-align: right;
	}
	.paR10{
		padding-right: 10px;
	}
	.menu-cont{
		position: relative;
		display: none;
		z-index: 2;
		background: #fff;
		width: 123px;
		border-radius: 5px;
		/*border: 1px solid #cdcdcd;*/
	}
	.menu-cont::before{
		position: absolute;
		top: -6px;
		left: 100px;
		z-index: 1;
		background: #fff;
		display: block;
		content: '';
		width: 10px;
		height: 10px;
		/*border: 1px solid #cdcdcd;*/
		transform: rotate(45deg);
	}
	.menu-cont li{
		border-top: 1px solid #cdcdcd;
		padding:8px;
	}
	.menu-cont li:active{
		background: #cdcdcd;
	}
	.menu-cont li:first-child{
		border-top: 0;
	}
	.add-icon:hover + .menu-cont{
		display: block;
	}
</style>

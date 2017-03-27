<template>
	<div class="container">
		<header class="talk-list-header">
			<div class="user-icon">
				<!--<a href="javascript:;" class="">-->
					<img src="../../assets/headicon.png"/>
				<!--</a>-->
			</div>
			<div class="title">
				<input type="radio" id="title-info" checked="checked" name="title"/><label for="title-info" class="label-info">消息</label>
				<input type="radio" id="title-telep" name="title"/><label for="title-telep" class="label-telep">电话</label>
			</div>
			<div class="add-menu">
				<i class="add-icon iconfont icon-add">
					<ul class="menu-cont">
						<li v-for="item in menu"><i class="iconfont paR10" :class="item.className"></i>{{ item.name }}</li>
					</ul>
				</i>
				
			</div>
		</header>
		<div class="body">
			<div class="search-panel w100">
				<input type="text" id="" class="search-bar w90"/>
			</div>
			<div class="talk-list-body w100">
				<div class="talk-list-item w100" v-for='item in talkList'>
					<!--<img :src="item.friendIcon" class="friendIcon"/>-->
					<img src="../../assets/headicon.png" class="friendIcon"/>
					<div class="list-item-body w100">
						<p class="item-body-name"> {{ item.friendName }} </p>
						<p class="item-body-container">
							{{ item.currTalk }}
						</p>
					</div>
					<i class="lastTalkTime"> {{ item.date }} </i>
				</div>
			</div>
		</div>
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
					this.talkList = res.data.data;
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
		/*align-content: center;*/
		align-items: center;
		height: 40px;
	}
	.talk-list-header .user-icon img{
		height: 40px;
		border-radius: 50%;
		/*display: block;*/
		/*border-radius: ;*/
	}
	.talk-list-header .title{
		font-size: 0;
	}
	.title label{
		border: 1px solid;
		color:  #108ee9;
		padding: .5em 3em;
		margin: 0;
		font-size: 12px;
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
	.title input:checked + label{
		border: 1px solid #108ee9;
		background: #108EE9;
		color:#ffffff;
	}
	.talk-list-header .add-menu,
	.talk-list-header .title,
	.talk-list-header .user-icon{
		/*flex: 1;*/
	}
	..talk-list-header .add-menu{
		/*text-align: right;*/
	}
	.paR10{
		padding-right: 10px;
	}
	.menu-cont{
		position: absolute;
		top: 0;
		right: -3px;
		display: none;
		z-index: 5;
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
		/*display: block;*/
		content: '';
		/*width: 10px;
		height: 10px;*/
		border: 10px solid #fff;
		border-bottom: transparent;
		border-right: transparent;
		transform: rotate(45deg);
	}
	.menu-cont li{
		border-top: 1px solid #a9a9a9;
		color: #a9a9a9;
		padding:8px;
	}
	.menu-cont li:active{
		background: #a9a9a9;
		color: #fff;
	}
	.menu-cont li:first-child{
		border-top: 0;
	}
	.add-icon{
		position: relative;
		color: #108EE9;
	}
	.add-icon:hover .menu-cont{
		display: block;
	}
	.body{
		margin-top: 10px;
		height: calc(100% - 50px);
	}
	.body .search-panel .search-bar{
		/*width*/
		margin: auto;
		border-radius: 5px;
		border: 0;
	}
	.body .talk-list-body .talk-list-item{
		position: relative;
		display: flex;
		height: 60px;
		padding: 10px;
	}
	.body .talk-list-body .talk-list-item .friendIcon{
		flex: 1.2;
		height: 100%;
		border-radius: 50%;
	}
	.body .talk-list-body .talk-list-item .list-item-body{
		flex: 8;
		margin-left: 10px;
		overflow: hidden;
		border-bottom: 1px solid #cdcdcd;
	}
	.body .talk-list-body .talk-list-item .list-item-body .item-body-name{
		line-height: 30px;
	}
	.body .talk-list-body .talk-list-item .list-item-body .item-body-container{
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		line-height: 30px;
	}
	.body .talk-list-body .talk-list-item .lastTalkTime{
		position: absolute;
		right: 10px;
	}
</style>

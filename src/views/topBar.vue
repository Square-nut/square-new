<template>
	<header class="main-header">
		<section class="func-left">
			<img src="../../static/img/headicon.png" v-show="!isBack" class="user-icon"/>
			<a href="javascript:;" v-show="isBack" @click="lastPage" ><i class="iconfont icon-back"></i> {{ this.$store.state.layoutLeftInfo }} </a>
		</section>
		<section class="func-center">
			<div class="title" v-if="disWhat=='talkList'">
				<input type="radio" id="title-info" checked="checked" name="title"/><label for="title-info" class="label-info">消息</label>
				<input type="radio" id="title-telep" name="title"/><label for="title-telep" class="label-telep">电话</label>
			</div>
			<div class="title" v-else-if="disWhat=='contacts'">
				<span class="lightBlue">联系人</span>
			</div>
			<div class="title" v-else="disWhat=='active'">
				<span class="lightBlue">动态</span>
			</div>
		</section>
		<section class="func-right">
			<div class="add-menu" v-if="disWhat=='talkList'">
				<i class="add-icon iconfont icon-add">
					<ul class="menu-cont">
						<li v-for="item in menu"><i class="iconfont paR10" :class="item.className"></i>{{ item.name }}</li>
					</ul>
				</i>
			</div>
			<div class="add-menu" v-else-if="disWhat=='contacts'">
				<a class="lightBlue" href="javascript:;" @click="toAddPage">
					添加
				</a>
			</div>
			<div class="add-menu" v-else="disWhat=='active'">
				<a class="lightBlue" href="javascript:;" @click="toMorePage">
					更多
				</a>
			</div>
		</section>
	</header>
</template>
<script>
	export default {
		name: 'topBar',
		data(){
			return{
				menu: [],
				isBack: false,
				disWhat: 'talkList' //显示那个功能对应的topbar
			}
		},
		props:['currFunc','isBack'],
		mounted(){
//			获取右上角MENU list
			this.$http.get('static/mock/menuList.json').then(function(res){
				this.menu = res.data.data;
			},function(e){
				console.log('服务器错误');
			})
		},
		watch:{
			currFunc(value,oldValue){
				this.disWhat = value;
			}
		},
		methods:{
			lastPage(){
				window.history.go(-1);
			},
			toAddPage(){
				this.$router.push({ path: '/qq/addContacts' });
			},
			toMorePage(){
				this.$router.push({ path: '/qq/moreFunc' });
			}
		}
	}
</script>
<style scoped>
	.main-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 1.28rem;
	}
	.main-header .user-icon {
		height: .91rem;
		border-radius: 50%;
	}
	.main-header .title{
		font-size: 0;
	}
	.func-center,.func-left,.func-right{
		flex: 1;
	}
	.func-right{
		text-align: right;
	}
	.title label{
		border: 1px solid;
		color:  #108ee9;
		padding: .16em .45rem;
		margin: 0;
		font-size: .37rem;
		background: #fff;
		cursor: pointer;
	}
	/*.title span{
		font-size: 18px;
		font-weight: bolder;
		color: #108ee9;
	}*/
	.lightBlue{
		font-size: 56px;
		/*font-weight: bolder;*/
		color: #108ee9;
	}
	.title input{
		display: none;
	}
	.title .label-info{
		border-top-left-radius: .13rem;
		border-bottom-left-radius: .13rem;
	}
	.title .label-telep{
		border-top-right-radius: .13rem;
		border-bottom-right-radius: .13rem;
	}
	.title input:checked + label{
		border: 1px solid #108ee9;
		background: #108EE9;
		color:#ffffff;
	}
	.main-header .add-menu,
	.main-header .title,
	.main-header .user-icon{
		/*flex: 1;*/
	}
	.main-header .add-menu{
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
		width: 1.64rem;
		border-radius: 5px;
		/*border: 1px solid #cdcdcd;*/
	}
	.menu-cont::before{
		position: absolute;
		top: -6px;
		left: 1.33rem;
		z-index: 1;
		/*display: block;*/
		content: '';
		/*width: 10px;
		height: 10px;*/
		border: 10px solid red;
		border-top: 0;
		border-left: transparent;
		border-right: transparent;
		/*transform: rotate(45deg);*/
	}
	.menu-cont li{
		border-top: 1px solid #a9a9a9;
		color: #a9a9a9;
		padding:.11rem;
		font-size: 24px;
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
		font-size: .48rem;
	}
	.add-icon:hover .menu-cont{
		display: block;
	}
</style>

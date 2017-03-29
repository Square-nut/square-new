<template>
	<div class="container">
		<!--<header class="talk-list-header">
			<section class="user-icon">-->
				<!--<a href="javascript:;" class="">-->
					<!--<img src="../../../static/img/headicon.png"/>-->
				<!--</a>-->
			<!--</section>
			<section class="title">
				<input type="radio" id="title-info" checked="checked" name="title"/><label for="title-info" class="label-info">消息</label>
				<input type="radio" id="title-telep" name="title"/><label for="title-telep" class="label-telep">电话</label>
			</section>
			<section class="add-menu">
				<i class="add-icon iconfont icon-add">
					<ul class="menu-cont">
						<li v-for="item in menu"><i class="iconfont paR10" :class="item.className"></i>{{ item.name }}</li>
					</ul>
				</i>
				
			</section>
		</header>-->
		<section class="body">
			<section class="search-panel w100">
				<input type="text" id="" class="search-bar w90"/>
			</section>
			<section class="talk-list-body w100">
				<div class="talk-list-item w100" v-for='item in talkList'>
					<img :src="item.friendIcon" class="friendIcon"/>
					<div class="list-item-body w100">
						<p class="item-body-name"> {{ item.friendName }} </p>
						<p class="item-body-container" :class="item.newInfo > 0? 'w90' : ''">
							{{ item.currTalk }}
						</p>
					</div>
					<i class="lastTalkTime"> {{ item.date | filterTime }} </i>
					<i class="newCounts" v-if="item.newInfo != 0"> {{ item.newInfo | filterCount }} </i>
				</div>
			</section>
		</section>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				menu: [],
				talkList:[],
				currTime:'',
				calcWidth:false
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
		},
		filters:{
			filterTime(value){
				let dat = new Date(),
					sysY = dat.getFullYear(),
					sysM = dat.getMonth()+1,
					sysH = dat.getHours()+1,
					sysD = dat.getDate(),
					sysm = dat.getMinutes()+1,
					sysS = dat.getSeconds()+1,
					dates = value.split(" ")[0],
					time = value.split(" ")[1];
				if(sysY > dates.split("-")[0]){
					return dates;
				}else if(sysM > dates.split("-")[1] || (sysM == dates.split("-")[1] && (sysD - 7) > dates.split("-")[2])){
					return dates.split("-")[1]+"-"+dates.split("-")[2];
				}else if(sysM == dates.split("-")[1] && (sysD > dates.split("-")[2])){
					return '近期';
				}else{
					return time.split(":")[0]+":"+time.split(":")[1];
				}
			},
			filterCount(value){
				if(value < 100){
					return value;
				}else{
					return '99+';
				}
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
	.w80{
		width: 80%;
	}
	
	/*.talk-list-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 40px;
	}
	.talk-list-header .user-icon img{
		height: 40px;
		border-radius: 50%;
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
	}
	.talk-list-header .add-menu{
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
	}
	.menu-cont::before{
		position: absolute;
		top: -6px;
		left: 100px;
		z-index: 1;
		content: '';
		border: 10px solid red;
		border-top: 0;
		border-left: transparent;
		border-right: transparent;
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
	}*/
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
		padding: 10px 0;
	}
	.body .talk-list-body .talk-list-item .friendIcon{
		flex: 1.2;
		height: 100%;
		border-radius: 50%;
	}
	.body .talk-list-body .talk-list-item .list-item-body{
		flex: 7.5;
		margin-left: 10px;
		overflow: hidden;
		border-bottom: 1px solid #cdcdcd;
	}
	.body .talk-list-body .talk-list-item .list-item-body .item-body-name{
		line-height: 30px;
		color: #000;
		/*font-weight: bolder;*/
	}
	.body .talk-list-body .talk-list-item .list-item-body .item-body-container{
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		line-height: 30px;
		color: #b5b5b5;
	}
	/*.body .talk-list-body .talk-list-item .list-item-dynamic{
		flex: 0.7;
	}*/
	.body .talk-list-body .talk-list-item .lastTalkTime{
		position: absolute;
		right: 10px;
		color: #b5b5b5;
	}
	.body .talk-list-body .talk-list-item .newCounts{
		display: block;
		position: absolute;
		right: 10px;
		bottom: 20px;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		color: #fff;
		background: red;
		font-size: 10px;
		text-align: center;
		line-height: 20px;
	}
	
	/*.body .talk-list-body .talk-list-item .w80{
		
		width: 80%;
	}*/
	/*.body .talk-list-body .talk-list-item .calcWidth{
		width: calc(100% - 10%);
	}*/
</style>

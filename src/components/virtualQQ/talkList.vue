<template>
	<div class="container">
		<section class="body">
			<section class="search-panel w100">
				<input type="text" id="" class="search-bar w90"/>
			</section>
			<section class="talk-list-body w100" @drapover="pointDrapover" @drop="porinDrop">
				<div class="talk-list-item w100" v-for='item in talkList'>
					<img :src="item.friendIcon" class="friendIcon"/>
					<div class="list-item-body w100">
						<p class="item-body-name"> {{ item.friendName }} </p>
						<p class="item-body-container" :class="item.newInfo > 0? 'w90' : ''">
							{{ item.currTalk }}
						</p>
					</div>
					<i class="lastTalkTime"> {{ item.date | filterTime }} </i>
					<i class="newCounts" v-if="item.newInfo != 0" draggable="true"> {{ item.newInfo | filterCount }} </i>
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
			pointDrapover(){

			},
			porinDrop(){

			}
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
	/*.w100{
		width: 100%;
	}
	.w90{
		width: 90%;
	}
	.w80{
		width: 80%;
	}*/
	.body{
		margin-top: .13rem;
		height: calc(100% - .66rem);
	}
	.body .search-panel{
		height: .64rem;
		padding-bottom: .2rem;
	}
	.body .search-panel .search-bar{
		/*width*/
		margin: auto;
		border-radius: 5px;
		border: 0;
	}
	.body .talk-list-body{
		height: 14.186rem;
		overflow-y: auto;
		overflow-x: hidden;
	}
	.body .talk-list-body .talk-list-item{
		position: relative;
		display: flex;
		height: 1.253rem;
		padding: .16rem 0;
	}
	.body .talk-list-body .talk-list-item .friendIcon{
		flex: 1.2;
		height: 1.226rem;
		border-radius: 50%;
	}
	.body .talk-list-body .talk-list-item .list-item-body{
		flex: 7.5;
		margin-left: .13rem;
		overflow: hidden;
		border-bottom: 1px solid #cdcdcd;
	}
	.body .talk-list-body .talk-list-item .list-item-body .item-body-name{
		line-height: .626rem;
		color: #000;
		/*font-weight: bolder;*/
	}
	.body .talk-list-body .talk-list-item .list-item-body .item-body-container{
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		line-height: .626rem;
		color: #b5b5b5;
	}
	/*.body .talk-list-body .talk-list-item .list-item-dynamic{
		flex: 0.7;
	}*/
	.body .talk-list-body .talk-list-item .lastTalkTime{
		position: absolute;
		right: .13rem;
		color: #b5b5b5;
	}
	.body .talk-list-body .talk-list-item .newCounts{
		display: block;
		position: absolute;
		right: .13rem;
		bottom: .26rem;
		width: .26rem;
		height: .26rem;
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

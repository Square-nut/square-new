<template>
	<div class="container">
		<header>
			<a href="javascript:;" class="user-icon">
				<img src="../../assets/headicon.png"/>
			</a>
			<div class="title">
				<input type="radio" id="title-info" checked="checked" name="title"/><label for="title-info" class="label-info">消息</label>
				<input type="radio" id="title-telep" name="title"/><label for="title-telep" class="label-telep">电话</label>
			</div>
			<div class="add-menu">
				<div class="add-icon icon iconfont icon-talk">
					
				</div>
				<ul>
					<li v-for=" item in menu">{{ item }}</li>
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
				menu: []
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
	.container{
		position: relative;
	}
	.user-icon{
		position: absolute;
		left: 0;
		height: 0;
		display: block;
		border-radius: ;
	}
	.title label{
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
	.inbl{
		display: inline-block;
	}
</style>
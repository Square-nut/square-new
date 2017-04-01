<template>
	<div class="container">
		<section class="self-info">
			<!--主页-->
			<a href="github.com/Square-nut" class="my-site">
				<img src="../../static/img/headicon.png"/>
			</a>
			<!--git-->
			<a href="github.com/Square-nut" class="my-git">
				<img src="../../static/img/headicon.png"/>
			</a>
			<!--头像-->
			<img src='../../static/img/headicon.png' class="my-pic"/>
			个人简介
			<!--微信或其他什么东西-->
			<p class="my-desc">
				<span class="my-name"></span>
				<span class="my-age"></span>
				<span class="my-name"></span>
				<span class="my-name"></span>
			</p>
			<!--mail-->
			<a href="zhenjiaguwen123@gmail.com" class="my-mail">
				<img src="../../static/img/headicon.png"/>
			</a>
			
		</section>
		 专业技能 工作经历 项目经验 联系邮箱
	</div>
</template>
<script></script>
<style scoped>
	.container{
		display: flex;
		width: 100%;
		height: 100%;
		margin: auto;
		text-align: left;
		background: #42B983;
		color: #FFFFFF;
		padding: 50px;
	}
	.self-info{
		display: flex;
	}
	.self-info img{
		flex: 2;
		width: 300px;
		height: 300px;
		border-radius: 50%;
	}
</style>
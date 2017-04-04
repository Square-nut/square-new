<template>
	<div class="container">
		<nav v-show="isQQ">
			<router-link to='/home' >Home</router-link>
			<router-link to='/login'>QQ登录</router-link>
			<!--<router-link to='/myself'>自我介绍</router-link>-->
			<!--<router-link to=''>处方管理</router-link>-->
		</nav>
		<div class="wrap">
			<router-view></router-view>
		</div>
	</div>

</template>
<script>
	export default {
		data(){
			return {
				visited: 'home',
				isQQ: true
			}
		},
		beforeRouteUpdate (to, from, next) {
		var target = to.path.split('/')[1];
		console.info(target);
			if(target == 'login'){
				// this.$store.commit('funcQQ');
				// console.log(this.$store);
			}else{
				// this.$store.commit('funcHome');
			}
			next(true);
		}
	}
</script>
<style scoped>
	.container{
		/*text-align: center;*/
	}
	.container nav{
		text-align: center;
	}
	a{
		display: inline-block;
		text-decoration: none;
		color: #108EE9;
		padding: .7em 1em;

	}
	a:link,a:visited,a:hover,a:active{
		text-decoration: none;
		border-bottom: 3px solid #fff;
	}
	a:hover{
		/*color: ;*/
		border-bottom: 3px solid;
	}
	.visited{
		border-bottom: 3px solid;
	}
</style>

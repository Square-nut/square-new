<template>
	<router-link :to='_link'>
		<img :src="_iconSrc"/>
		<p class="desc">{{ _menuName }}</p>
	</router-link>
</template>
<script>
	export default{
		data(){
			return {
				_link: this.link,
				_iconSrc: this.iconSrc,
				_menuName: menuName
			}
		},
		props:['link','iconSrc','menuName']
	}
</script>
<style scoped>
	.desc{
		text-align: center;
	}
</style>
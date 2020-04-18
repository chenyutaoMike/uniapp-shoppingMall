<template>
	<view class="index-center bg-grey">
		<recommend />
		<good-list  />
	</view>
</template>

<script>
	import recommend from './recommend.vue';
	import goodList from './goodList.vue';
	export default {
	
		components: {
			recommend,
			goodList
		}
	
	}
</script>

<style lang="scss">
	.index-center{
		background-color: $bg;
		padding: 20upx 0;
	}
</style>

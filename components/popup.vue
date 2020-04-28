<template>
	<view class="popup-box">
		<view 
		class="popup flex align-center justify-center" 
		@click="clone" 
		v-if="isShow"
		@touchmove.stop.prevent="move"
		>
			
			<slot @click.stop.prevent></slot>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			isShow:{
				type:Boolean,
				default:false
			}
		},
		data(){
			return {
				
			}
		},
		methods:{
			clone(){
				this.$emit('clone')
			},
			move(){
				return false
			}
		}
	}
</script>

<style lang="scss">
	.popup-box{
		width: 100%;
		height: 100%;
		.popup{
			position: fixed;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			background-color: rgba(0,0,0,.5);
		}
	}
</style>

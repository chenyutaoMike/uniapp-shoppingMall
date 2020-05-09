<template>
	<view class="good-sort flex align-center justify-center">
		
		<block v-for="item in Tab" :key="item.id">
			<view 
				class="sort-item flex-1 text-center" 
				:class="seleteId === item.id ? 'selete' : '' "
				@click="changeTab(item.id)"
			>{{item.value}}</view>
		</block>
	</view>
</template>

<script>
	export default {
		props: {
			typeid: {
				type: String,
				default: '0'
			}
		},
		data() {
			return {
				picDesc:true,
				salesDesc:true,
				seleteId:1,
				Tab: [{
						id: 1,
						value: '排序',
						orderBy: ''
					},
					{
						id: 2,
						value: '默认',
						orderBy: ''
					},
					{
						id: 3,
						value: '价格',
						orderBy: 'price asc'
					},
					{
						id: 4,
						value: '销量',
						orderBy: 'sales asc'
					},
					{
						id: 5,
						value: '上新',
						orderBy: 'createdTime desc'
					},
				]
			}
		},
		methods:{
			changeTab(id){
				// 点击价格处理
				if(id === 3){
					this.picDesc = !this.picDesc;
					let result = '';
					if(this.picDesc){
						 result = 'price asc'
					}else{
						result = 'price desc';
					}
					this.seleteId = id;
					this.$emit('updataList',result)
					return;
				}
				//点击销量处理
				if(id === 4){
					// this.salesDesc = !this.salesDesc;
					// let result = this.Tab.find(item => item.id === id);
					// if(this.salesDesc){
					// 	 result.orderBy = 'sales desc'
					// }else{
					// 	result.orderBy = 'sales asc';
					// }
				}
				
				// 重复点击处理
				
				if(id === this.seleteId){
					return;
				}
				// this.$emit()
				this.seleteId = id;
			}
		}

	}
</script>

<style lang="scss">
	.good-sort {
		height: 80upx;
		background-color: #FFFFFF;

		.sort-item {
			&.selete {
				color: $Theme-color;
			}
		}

	}
</style>

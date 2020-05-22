<template>
	<view class="good-sort flex align-center justify-center">

		<block v-for="(item,index) in Tab">
			<view class="sort-item flex-1 text-center" :class="seleteId === item.id ? 'selete' : '' " @click="changeTab(item.id)"
			 :key="item.id+item.value">{{item.value}}</view>
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
				picDesc: false,
				salesDesc: true,
				seleteId: 1,
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
						orderBy: ' price desc '
					},
					{
						id: 4,
						value: '销量',
						orderBy: ' sales desc,'
					},
					{
						id: 5,
						value: '上新',
						orderBy: 'createdTime desc'
					},
				]
			}
		},
		methods: {
			changeTab(id) {
				// 点击价格处理
				if (id === 3) {
					this.picDesc = !this.picDesc;
					let result = '';
					if (this.picDesc) {
						result = ' price asc,'
					} else {
						result = ' price desc, ';
					}
					this.seleteId = id;
					this.$emit('updataList', result)
					return;
				}
				//点击销量处理
				if (id === 4) {
					this.salesDesc = !this.salesDesc;
					let where = '';
					if (this.salesDesc) {
						where = ' sales desc,'
					} else {
						where = ' sales asc,';
					}
					this.seleteId = id;
					this.$emit('updataList', where)
					return
				}
				if (id === 5) {
					let newTime = ' createdTime desc,'
					this.$emit('updataList', newTime)
				}
				// 重复点击处理
			
				if (id === this.seleteId) {
					return;
				}
				if((id === 1 && this.seleteId !== 2) || (id === 2 && this.seleteId !== 1) ){
					this.$emit('updataList', '')
				}
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

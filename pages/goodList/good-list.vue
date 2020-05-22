<template>
	<view class="goo_list-box">
		<good-list-search />
		<goodSort :typeid="typeId" @updataList="updataList" />
		<scroll-view scroll-y="true" class="good-list-bg" :style="`height:${scrollH}px`" @scrolltolower='nextPage'>
			<shop-list  :gooListArr="gooListArr" />
		</scroll-view>
	</view>
</template>

<script>
	import goodListSearch from '@/components/goodListComponent/goodListSearch.vue';
	import goodSort from '@/components/goodListComponent/goodSort.vue';
	import shopList from '@/components/shopList.vue';
	import {
		mapActions,
		mapState
	} from 'vuex';
	export default {
		components: {
			goodListSearch,
			goodSort,
			shopList
		},
		data() {
			return {
				scrollH: '',
				where: '1=1 and isTop=1',
				search: '',
				orderBy:''
			}
		},
		onLoad(option) {
			console.log(option)
			if(option.searchValue){
				this.search = option.searchValue;
			}
				this.typeId = option.typeId;
				this.type = option.type;
		},
		mounted() {
			let res = uni.getSystemInfoSync();
			this.scrollH = res.windowHeight - uni.upx2px(160);
			if (this.search != '') {
			      this.where = this.where + " and name like '%" + this.search + "%'";
			    }
			if (this.type === "0") {
				if (this.typeId !== '') {
					this.where = this.where + " and typeId in(select id from c_type where parent_id=" + this.typeId + ")";
				}
			} else if (this.type === "1") {
				this.where = this.where + " and typeId =" + this.typeId;
				this.type = '3';
			}

			this.getGoodListArr({
				orderBy: '',
				where: this.where,
				page: 1,
				type: this.type
			})
		},
		methods: {
			...mapActions(['getGoodListArr', 'getGoodNextListArr', 'updateGoodListArr']),
			nextPage() {
				if (!this.noList) {
					this.getGoodNextListArr({
						orderBy: this.orderBy,
						where: this.where,
						page: this.page + 1,
						type: this.type
					})
				} else {
					uni.showToast({
						title: '没有更多商品了',
						icon: 'none',
						duration: 1500
					})
				}
			},
			updataList(result) {
				// console.log(result)
				// console.log(this.where)
				// 接口有问题
				this.orderBy = result;
				this.updateGoodListArr({
					orderBy: result,
					where: this.where,
					page: 1
				})
				
			}
			
		},
		computed: {
			...mapState({
				page: state => state.goodList.page,
				gooListArr: state => state.goodList.gooListArr,
				noList: state => state.goodList.noList
			})
		}
	}
</script>

<style lang="scss">
	.goo_list-box {
		.good-list-bg {
			background-color: #EFEEF4;
		}
	}
</style>

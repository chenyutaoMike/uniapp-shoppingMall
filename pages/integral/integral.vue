<template>
	<view class="integral-box">
		  <intagral-header @openPopup="openPopup" :score="score" />
			<view class="integral-tab flex align-center">
				<block v-for="item in tabList" :key="item.id">
					<view 
					class="integral-tab-item flex-1 flex  align-center justify-center"
					:class="item.id === seleteId ? 'selete':''"
					@click="changeTab(item.id)"
					>{{item.value}}</view>
				</block>
			</view>
			<integral-list v-if="seleteId === 0" :list="integralList" />
			<integral-list v-if="seleteId === 1" :list="useIntegralList" />
			<popup :isShow="isShow" @clone="changePopup">
				<view class="integral-popup" @click.stop="popupClick">
					<image @click="changePopup" class="integral-popup-clone" src="../../static/images/detailImg/gbico.png"></image>
					<ul class="font-sm">
						<li>1、积分获取：用户购买商品（特价和限时等活动商品除外）获得相应积分；如用户购买商品价格为100元，则获得100积分。</li>
						<li>2、积分使用：用户可选择用积分兑换优惠券，按10：1兑换，既100积分兑换10元优惠卷。</li>
						<li>3、优惠券面值：5元、10元、20元、50元、100元。</li>
						<li>4、优惠券使用：用户购买商品（特价和限时等活动商品除外）可使用优惠卷抵扣等额现金，例如用户A购买价值100元的001商品，使用10元优惠卷抵扣后，用户只需使用90元现金；同一个订单可使用多张优惠券抵扣。</li>
						<li>5、用户购买商品（特价和限时商品等活动商品除外）使用优惠卷后，使用现金部分仍可获得对应等额积分；例如用户A使用10元优惠卷抵扣购买100元的001商品,实际付出90元现金，既自动获得90积分</li>
						<li>6、用户积分兑换优惠卷过程不可逆，既用户不可使用优惠卷换回积分。</li>
					</ul>
				</view>
			</popup>
			
	</view>
</template>

<script>
	import intagralHeader from '@/components/integralComponent/integralHeader.vue';
	import integralList from '@/components/integralComponent/integralList.vue';
	import popup from '@/components/popup.vue';
	import {mapActions,mapState} from 'vuex';
	const tab = [
		{id:0,value:'获取'},
		{id:1,value:'使用'}
	]
	export default {
		components:{
			intagralHeader,
			integralList,
			popup
		},
		data() {
			return {
				tabList:[],
				seleteId:0,
				isShow:false
			}
		},
		onReady(){
			this.tabList = tab;
			this.userId = uni.getStorageSync('userId');
			if(this.userId){
				
				this.getIntegralList(this.userId);
				this.getUseIntegral(this.userId);
				this.getUserInfoformIntegral(this.userId);
			}else{
				this.msg('请先登陆')
			}
		
		
		},
		methods: {
			...mapActions(['getIntegralList','getUseIntegral','getUserInfoformIntegral']),
			changeTab(id){
				this.seleteId = id;
			},
			changePopup(){
				this.isShow = false;
			},
			openPopup(){
				this.isShow = true;
			},
			popupClick(){
				return false
			}
		},
		computed:{
			...mapState({
				useIntegralList:state => state.integral.useIntegralList,
				integralList:state => state.integral.integralList,
				score:state => state.integral.score
			})
		},
		
	}
</script>

<style lang="scss">
	$integralColor:#C5C5C5;
	$seleteColor:#C02316;
.integral-box{
	.integral-tab{
		height: 100upx;
		.integral-tab-item{
			color: #727272;
			height: 100%;
			border-bottom: 1upx solid $integralColor;
			&.selete{
				color: $seleteColor;
				border-color: $seleteColor;
			}
		}
	}
}
.integral-popup{
	position: relative;
	width: 90%;
	padding: 30upx 20upx;
	background-color: #fff;
	border-radius: 30upx;
	
	.integral-popup-clone{
		position: absolute;
		right: 30upx;
		top: -30upx;
		width: 60upx;
		height: 60upx;
	}
}

</style>

import {
	GETDEFAULTADDRESS,
	GETORDERCART,
	GETCOUPON,
	GETCHECKCOUPON,
	NOTUSECOUPON,
	GETINTEGRALDTOTAL,
	GETBUYTOTALPIC,
	USERCOUPON
} from './action-type.js';
import {
	getAddressList,
	getOrderCart,
	getIntegalSub,
	getIsCoupon,
	seleteCoupon,
	integralDTotal,
	choiceIntegralsub
} from '@/http/buy.js';
import {getToatlPic} from '@/http/cart.js';
export const buy = {
	state: {
		address: '',
		cellphone: '',
		addressId: '',
		orderList: [],
		isCoupon: false,
		couponList: [],
		preferentialAmount:'',
		totalPic:'',
		marketPriceTotal:'',
		quantity:''
	},
	actions: {
		async getDefaultAddress({
			commit
		}, userId) {
			let result = await getAddressList(userId);
			if (result.data !== null) {
				commit(GETDEFAULTADDRESS, result.data)
			}
		},
		async getOrderCartAry({
			commit
		}, userId) {
			let result = await getOrderCart(userId);
			if (result.data !== null) {
				commit(GETORDERCART, result.data)
			}
		},
		async getCheckisCoupon({
			commit
		}, userId) {
			let result = await getIsCoupon(userId);
			if (result.data !== null && result.data.status === 0) {
				// 这个商品不可用使用优惠劵
				commit(NOTUSECOUPON)
			} else if (result.data !== null && result.data.status === 1) {
				// 这个商品可以使用优惠劵,发送请求获取优惠劵
				let coupon = await getIntegalSub(userId);
				commit(GETCOUPON, coupon.data)
			}
		},
		async getSeleteCoupon({commit},option){
			let result = await seleteCoupon(option);
			if(result.data !== null && result.data.status === 0){
				let coupon = await getIntegalSub(option.userId);
				commit(GETCOUPON, coupon.data)
			}
		},
		async getIntegralDTotal({commit},userId){
			let result = await integralDTotal(userId);
			if(result.data !== null){
				commit(GETINTEGRALDTOTAL,result.data)
			}
		},
		async getBuyToatlPic({commit},userId){
			let result = await getToatlPic(userId);
						
			if(result.data !== null){
				commit(GETBUYTOTALPIC,result.data)
			}
		},
		useCoupon({commit},pic){   //确定使用优惠劵,并且接收优惠价格
			commit(USERCOUPON,pic)
		},
		async getChoiceIntegralsub({commit},id){
			let result = await choiceIntegralsub(id)
			if(result.data.status === 0){
				console.log('commit')
				let coupon = await getIntegalSub(56);
				commit(GETCOUPON, coupon.data)
			}
		}
	},

	mutations: {
		GETDEFAULTADDRESS(state, result) {
			state.address = result[0].address;
			state.cellphone = result[0].cellphone;
			state.addressId = result[0].id;
		},
		GETORDERCART(state, result) {
			state.orderList = result;
		},
		NOTUSECOUPON(state) {
			state.isCoupon = false;
		},
		GETCOUPON(state, result) {
			console.log(result)
			result = result.map(item => { //处理优惠劵信息,2是选中的,1是未选中
				if (item.is_checked == 2) {
					item.checked = true
				} else if (item.is_checked == 1) {
					item.checked = false
				}
				return item
			})
			state.couponList = result;
			state.isCoupon = true;
		},
		GETINTEGRALDTOTAL(state,result){
			state.preferentialAmount = result.dTotal;
			console.log(state.preferentialAmount)
		},
		GETBUYTOTALPIC(state,result){
			state.totalPic = result.dTotal;
			state.marketPriceTotal =  result.marketPriceTotal;
			state.quantity = result.quantity;
		},
		USERCOUPON(state,pic){
			state.totalPic = pic;
		}
	},
	getters:{
		getSeleteCouponList: state =>{
			return state.couponList.reduce((pre,item)=>{
				if(item.checked){
					pre.push(item.title)
				}
				return pre
			},[]).join(",")
		}
	}

}

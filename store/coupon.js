import {USECOUPONLIST,NOTUSECOUPONLIST} from './action-type.js';
import {couponList} from '@/http/coupon.js';
import {formatCoupon} from '@/static/utils.js';
export  const coupon = {
  state: { 
		useCoupon:[],
		notUseCoupon:[]
	},
  actions: {
		async getCouponList({commit},option){
			let result = await couponList(option);
		
			// 判断请求回来的参数是正确
			if(result.data !== null && result.statusCode === 200){
				if(option.status === 0){
					// 这里是 已经使用过的优惠劵
					commit(USECOUPONLIST,result.data)
				}else if(option.status === 1){
					// 这里是 没有使用过的优惠劵
					commit(NOTUSECOUPONLIST,result.data)
				}
			}
		}
  },

 mutations:{
		USECOUPONLIST(state,result){
			if(result.length !== 0){
			
				state.useCoupon = formatCoupon(result);
				console.log(state.useCoupon)
			}
		},
		NOTUSECOUPONLIST(state,result){
			if(result.length !== 0){
				state.notUseCoupon = formatCoupon(result);
			}
		}
 }
}
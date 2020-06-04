import {
	GETINTEGRAL,
	USEINTEGRAL,
	GETUSERINFO,
	INTEGRALSHOPLIST,
	INTEGRALCARTLIST,
	INTEGRALADDCART
} from './action-type.js';
import {
	getIntegral,
	useIntegral,
	integralShopList,
	integralCartList,
	integralAddCart
} from '@/http/integral.js';
import {
	getUser
} from '@/http/user.js';
import {
	formatDate
} from '@/static/utils.js';
export const integral = {
	state: {
		integralList: [],
		useIntegralList: [],
		score: 0,
		page: 1,
		shopList: [],
		isGet: true,
		flag: true, //节流阀
		cartList: [], //购物车列表
		cartNumber: 0, //购物车数量
	},
	actions: {
		// 获取优惠劵获得列表
		async getIntegralList({
			commit
		}, userId) {
			let result = await getIntegral(userId);

			if (result !== null) {
				commit(GETINTEGRAL, result.data)
			}
		},
		// 获取优惠劵使用列表
		async getUseIntegral({
			commit
		}, userId) {
			let result = await useIntegral(userId);

			if (result !== null) {
				commit(USEINTEGRAL, result.data)
			}
		},
		// 获取用户信息
		async getUserInfoformIntegral({
			commit
		}, userId) {
			let result = await getUser(userId);
			console.log(result)
			if (result.statusCode === 200 && result.data !== null) {
				commit(GETUSERINFO, result.data)
			}
		},
		// 获取商品列表
		async getIntegralProductList({
			commit
		}, option) {
			let result = await integralShopList(option);

			if (result.statusCode === 200 && result.data !== null && result.data.length !== 0) {
				commit(INTEGRALSHOPLIST, result.data)
			}
			if (result.statusCode === 200 && result.data.length == 0) {
				commit(INTEGRALSHOPLIST, false)
			}
		},
		// 获取购物车列表
		async getIntegralCartList({
			commit
		}) {
			let userId = uni.getStorageSync('userId');
			let result = await integralCartList(userId);
		
			if (result.statusCode === 200 && result.data.length !== 0) {
				commit(INTEGRALCARTLIST, result.data)
			} else if (result.statusCode === 200 && result.data.length === 0) {
				commit(INTEGRALCARTLIST, false)
			}
		},
		// 加入积分购物车
		async getIntegralAddCart({
			dispatch,
			commit
		}, option) {
			console.log('触发')
			let result = await integralAddCart(option);
		
			if (result.data != null) {
				if (result.data.status == 0 && option.isChecked == 1) {
					dispatch('getIntegralCartList'); //读取购物车
					commit(INTEGRALADDCART,'success')
				} else {
					commit(INTEGRALADDCART,'error')
				}
			}
		}

	},
	mutations: {
		GETINTEGRAL(state, result) {
			let newResult = formatDate(result);
			newResult.methods = 'get'; // get代表这个是获取优惠劵
			state.integralList = newResult; //处理时间函数
		},
		USEINTEGRAL(state, result) {

			let newResult = formatDate(result);
			newResult.methods = 'use'; //use代表这个是使用优惠劵
			state.useIntegralList = newResult;

		},
		GETUSERINFO(state, result) {
			state.score = result.userscore;
		},
		INTEGRALSHOPLIST(state, result) {
			state.flag = true;
			if (result) {
				state.shopList = result;
			} else {
				state.isGet = false
			}

		},
		SETFLAG(state) {
			state.flag = false;
		},
		INTEGRALCARTLIST(state, result) {
		
			if (result) {
				state.cartList = result;
				state.cartNumber = state.cartList.length;
			} else {
				state.cartList = [];
				state.cartNumber = 0;
			}
		},
		INTEGRALADDCART(state,result){
			if(result === 'success'){
				uni.showToast({
					title: '加入成功',
					icon: 'success',
					duration: 1000
				});
			}else if(result === 'error'){
				uni.showToast({
					title: '已经在购物车里了',
					icon: 'none',
					duration: 2000
				})
			}
		}

	},

}

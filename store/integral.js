import {
	GETINTEGRAL,
	USEINTEGRAL
} from './action-type.js';
import {
	getIntegral,
	useIntegral
} from '@/http/integral.js';
import {
	formatDate
} from '@/static/utils.js';
export const integral = {
	state: {
		integralList: [],
		useIntegralList: []
	},
	actions: {
		async getIntegralList({
			commit
		}, userId) {
			let result = await getIntegral(userId);

			if (result !== null) {
				commit(GETINTEGRAL, result.data)
			}
		},
		async getUseIntegral({
			commit
		}, userId) {
			let result = await useIntegral(userId);

			if (result !== null) {
				commit(USEINTEGRAL, result.data)
			}
		},



	},
	mutations: {
		GETINTEGRAL(state, result) {
			let newResult = formatDate(result);
			newResult.methods = 'get';   // get代表这个是获取优惠劵
			state.integralList = newResult; //处理时间函数
		},
		USEINTEGRAL(state, result) {
		
			let newResult = formatDate(result);
			newResult.methods = 'use';  //use代表这个是使用优惠劵
			state.useIntegralList = newResult;

		}

	},

}

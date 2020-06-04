import {
	request
} from './request.js';


export function getIntegral(userId) {

	return request({
		opt: 'getIntegral',
		userId: userId
	})
}

export function useIntegral(userId) {

	return request({
		opt: 'useIntegral',
		userId: userId
	})
}

// 积分商城列表
export function integralShopList(option) {
	return request({
		opt: 'getIntegralProductPageList',
		userId: option.userId,
		page: option.page,
		size: 8,
	})
}

//积分购物车列表
export function integralCartList(userId) {
	return request({
		opt: 'getCartList',
		userId,
		typeId: 2,
	})
}

// 加入积分购物车
export function integralAddCart(option) {
	return request({
		opt: 'addCart',
		id: option.id,
		userId: option.userId,
		quantity: option.quantity,
		isChecked: option.isChecked,
		unit: option.unit,
		typeId: 2,
	})
}

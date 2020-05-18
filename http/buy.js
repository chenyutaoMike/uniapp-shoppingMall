import {
	request,
	type
} from './request.js';


export function getAddressList(userId) {
	return request({
		opt: 'getAddressList',
		userId: userId,
		where: ' and is_default=1',
	})
}
// 获取订单列表
export function getOrderCart(userId) {
	return request({
		opt: 'getCartList',
		userId: userId,
		where: ' and is_checked=2',
		type: type
	})
}
// 获取优惠劵列表
export function getIntegalSub(userId) {
	return request({
		opt: 'getIntegalSub',
		userId: userId,
		status: 1
	})
}
// 检查是否可以使用优惠劵
export function getIsCoupon(userId) {
	return request({
		opt: 'isCoupon',
		userId: userId
	})
}

export function seleteCoupon(option) {
	return request({
		opt: 'choiceIntegralsub',
		id: option.id,
		checkId: option.checkId
	})
}

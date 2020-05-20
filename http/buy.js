import {
	request,
	type,
	appid
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

export function integralDTotal(userId) {
	return request({
		opt: 'integralDTotal',
		userId: userId
	})
}


export function choiceIntegralsub(id) {
	return request({
		opt: 'choiceIntegralsub',
		id: id,
		checkId: 2
	})
}


// 添加订单
export function addOrder(option) {
	return request({
		opt: 'addOrder',
		userId: option.userId,
		addressId: option.addressId,
		quantity_sum: option.quantity_sum,
		price_sum: option.price_sum,
		shipping_method: option.shipping_method,
		recommended_code: option.recommended_code,
		note: option.note,
		formId: option.formId
	})
}

// 支付
export function pay(option) {
	console.log(appid)
	return request({
		opt: 'GetUnifiedOrderResult',
		userId: option.userId,
		id: option.id,
		typeId: 1,
		appid: appid,
		openid:option.openid
	})
}

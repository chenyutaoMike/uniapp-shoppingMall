import {
	request,
	type
} from './request.js';


export function getCartList(userId) {
	return request({
		opt: 'getCartList',
		userId: userId,
		type: type
	})
}

export function getToatlPic(userId) {
	return request({
		opt: 'dTotal',
		userId: userId,
		type: type
	})
}

// 单选
export function cartChoice(option) {
	return request({
		opt: 'choice',
		id: option.id,
		checkId: option.checkId,
	})
}
// 全选
export function selectAll(option) {
	return request({
		opt: 'selection',
		userId: option.userId,
		checkId: option.checkId,
		type: type
	})
}
// 购物车加 1
export function cartAdd(id) {
	return request({
		opt: 'updateCart',
		id: id,
		type: 1
	})
}

// 购物车减 1
export function cartDecrease(id) {
	return request({
		opt: 'updateCart',
		id: id,
		type: 2
	})
}

export function cartDel(id) {
	return request({
		opt: 'deleteCart',
		id: id
	})
}

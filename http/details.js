import {
	request
} from './request.js';

export function getDetailImg(id) {
	return request({
		opt: 'getProductInfoTopPic',
		id
	})
}

export function getDetailInfo(id) {
	return request({
		opt: 'getProductInfo',
		id
	})
}

export function addCart(option) {
	return request({
		opt: 'addCart',
		id: option.id,
		userId: option.userId,
		quantity: option.quantity,
		isChecked: option.isChecked,
		unit: option.unit,
	})
}

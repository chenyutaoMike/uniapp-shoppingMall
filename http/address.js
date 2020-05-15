import {
	request
} from './request.js';


export function getAddressList(userId) {
	return request({
		opt: 'getAddressList',
		userId: userId,
		where: '',
	})
}
// 选择默认地址
export function defaultAddress(option) {
	return request({
		opt: 'defaultAddress',
		id: option.id,
		userId: option.userId,
	})
}

// 删除地址
export function deleteAddress(id) {
	return request({
		opt: 'deleteAddress',
		id: id
	})
}


// 读取单个地址
export function getAddress(option) {
	return request({
		opt: 'getAddress',
		userId: option.userId,
		id: option.id
	})
}


// 添加地址

export function addAddress(option) {
	return request({
		opt: 'addAddress',
		userId: option.userId,
		id: option.id,
		consignee: option.consignee,
		cellphone: option.cellphone,
		address: option.address,
		is_default: 0
	})
}

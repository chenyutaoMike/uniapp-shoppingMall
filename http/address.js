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

export function defaultAddress(option) {
	return request({
		opt: 'defaultAddress',
		id: option.id,
		userId:option.userId,
	})
}

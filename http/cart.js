import {
	request,type
} from './request.js';


export function getCartList(userId) {
	return request({
		opt: 'getCartList',
		userId: userId,
		type: type
	})
}

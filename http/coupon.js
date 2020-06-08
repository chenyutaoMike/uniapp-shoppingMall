import {
	request
} from './request.js';

export function couponList(option) {
	return request({
		opt: 'getIntegalSub',
		userId: option.userId,
		status: option.status
	})
}

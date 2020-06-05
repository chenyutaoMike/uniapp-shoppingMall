import {
	request
} from './request.js';

// 判断是否是Vip用户
export function isVip(userId) {
	return request({
		opt: 'getVip',
		user_id: userId,
	})
}

// 请求开通Vip列表
export function vipList() {
	return request({
		opt: 'getVipList',
		strWhere: 'type=1 or type=0'
	})
}

// 获取用户信息
export function vipUser(userId) {
	return request({
	  opt: 'getUser',
	  userId: userId
	})
}

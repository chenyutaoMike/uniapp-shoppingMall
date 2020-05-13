import {
	request,
	type
} from './request.js';


export function uniLogin() {
	return new Promise((resolve, reject) => {
		uni.login({
			provider: 'weixin',
			success: loginRes => {
				resolve(loginRes)
			},
			fail: err => {
				uni.showToast({
					title: '网络错误',
					icon: 'none'
				})
			}
		})
	})
}
export function getUserInfo() {
	return new Promise((resolve, reject) => {
		uni.getUserInfo({
			withCredentials: false,
			success: userinfo => {
				resolve(userinfo)
			},
			fail: err => {
				uni.showToast({
					title: '网络错误',
					icon: 'none'
				})
			}
		})
	})
}

export function onLogin(res) {
	return request({
		opt: 'onLogin',
		code: res.code
	})
}

export function addUser(res) {
	return request({
		opt: 'addUser',
		openid: res.openid,
		nickName: res.userInfo.nickName,
		gender: res.userInfo.gender,
		avatarUrl: res.userInfo.avatarUrl,
		usercard: ''
	})
}

//获取登陆信息
export function getUser(userId){
	return request({
		 opt: 'getUser',
		 userId: userId,
	})
}



// 待支付
export function getOrderRed(userId) {
	return request({
		opt: 'getOrderRed',
		userId: userId,
		type: type,
		where: 'is_payment=0 and order_status=0'
	})
}
// 待发货
export function getOrderRedOne(userId) {
	return request({
		opt: 'getOrderRed',
		userId: userId,
		type: type,
		where: 'is_payment=1 and order_status=0 and is_delivery=0',
	})
}
// 待收货
export function getOrderRedTwo(userId) {
	return request({
		opt: 'getOrderRed',
		userId: userId,
		type: type,
		where: 'is_payment=1 and order_status=0 and is_delivery=1 and is_receiving=0',
	})
}
// 已完成
export function getOrderRedThree(userId) {
	return request({
		opt: 'getOrderRed',
		userId: userId,
		type: type,
		where: 'is_payment=1 and is_delivery=1 and is_receiving=1 and is_transaction=0'
	})
}

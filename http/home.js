import {
	request,
	bannerTypeId,
	bannerId
} from './request.js'

// =>获取每日推荐
export function getIndexRecommend() {
	return request({
		opt: 'getBanner',
		typeId: bannerTypeId
	})
}


// =>获取首页轮播图
export function getIndexBanner() {
	return request({
		opt: 'getBanner',
		typeId: bannerId
	})
}

// => 获取首页滑动导航
export function getIndexSlideNav() {
	return request({
		opt: 'getType',
		parentId: 0
	})
}
// => 获取首页分类列表
export function getIndexType() {
	return request({
		opt: 'getIndexType',
		parentId: 0
	})
}

// => 获取首页猜你喜欢列表
// type:请求的页数
export function getIndexYouLike(type){
	return request({
					opt: 'getLikeProduct',
					openid: '',
		      type: type
				})
}
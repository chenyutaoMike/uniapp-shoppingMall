import {request} from './request.js';

export function getDetailImg (id){
	return request({
		 opt: 'getProductInfoTopPic',
		 id
	})
}

export function getDetailInfo(id){
	return request({
		  opt: 'getProductInfo',
			id
	})
}
import {request} from './request.js';

export function getGoodList (option){

	return request({
		 opt: 'getProductPageList',
		 size: 8,
		 ...option
	})
}

export function getGoodListNext (option){
	return request({
		 opt: 'getProductPageList',
		 size: 8,
		 ...option
	})
}

export function updateGoodList(option){
	return request({
		 opt: 'getProductPageList',
		 size: 8,
		 type:3,
		 ...option
	})
}
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
		console.log({
		   opt: 'getProductPageList',
		   orderBy: option.orderBy,
		   where: option.where,
		   page: option.page,
			 type:3,
			 size:8
	})
	return request({
		   opt: 'getProductPageList',
		   orderBy: option.orderBy,
		   where: option.where,
		   page: option.page,
			 type:3,
			 size:8
	})
}
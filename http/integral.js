import {
	request
} from './request.js';


export function getIntegral(userId) {

	return request({
	  opt: 'getIntegral',
	  userId: userId
	})
}

export function useIntegral(userId) {
	
	return request({
	  opt: 'useIntegral',
	  userId: userId
	})
}
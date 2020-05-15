import {
	GETADDRESSLIST,
} from './action-type.js';
import {
	getAddressList
} from '@/http/address.js'
export const address = {
	state: {
		addressList: []
	},
	actions: {
		async getAddressAry({
			commit
		}, userId) {
			let result = await getAddressList(userId);
			if (result.data !== null) {
				commit(GETADDRESSLIST, result.data)
			}
		}
		

	},

	mutations: {
		GETADDRESSLIST(state, result) {
			state.addressList = result;
		},
		

	}
}

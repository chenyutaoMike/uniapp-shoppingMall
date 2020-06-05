import {ISVIP,VIPLIST,VIPUSER} from './action-type.js';
import {isVip,vipList,vipUser} from '@/http/openVip.js';
export  const openVip = {
  state: { 
		vipAry:[],
		vipUserInfo:{}
	},
  actions: {
		async getIsVip({commit},userId){
			let result = await isVip(userId);
			console.log(result)
		},
		async getVipList({commit}){
			let result = await vipList();
			console.log(result)
			if(result.data !== null && result.statusCode === 200){
				commit(VIPLIST,result.data)
			}
		},
		async getVipUser({commit},userId){
			let result = await vipUser(userId);
			console.log(result)
			if(result.data !== null && result.statusCode === 200){
				commit(VIPUSER,result.data)
			}
		}
  },

 mutations:{
		VIPLIST(state,result){
			state.vipAry = result;
		},
		VIPUSER(state,result){
			state.vipUserInfo = result;
		}
		
 }
}
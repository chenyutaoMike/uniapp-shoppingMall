import {UNILOGIN,GETDELIVERGOODS,GETRECEIPT,GETCOMPLETE} from './action-type.js';
import {uniLogin,getUserInfo,onLogin,addUser,getOrderRed,getOrderRedOne,getOrderRedTwo,getOrderRedThree} from '@/http/user.js'
export  const user = {
  state: { 
		userInfo:{},
		openId:'',
		userId:''
	},
  actions: {
		async getUniLogin({commit}) {
		  const authResult = await uniLogin();
			const userInfo = await getUserInfo();
			const loginInfo = await addUser(userInfo);
			const userId = loginInfo.data.userId;
			let result = {
				userId:userId,
				...userInfo.userInfo
			}
			commit(UNILOGIN,result)
		 },
		 async getOrderPay(userId){
			 const result = await getOrderRed(userId);
			 console.log('111')
			 console.log(result)
			 
		 }
  },

 mutations:{
	 UNILOGIN(state,result){
		 console.log(result)
		 state.openId = result.openId;
		 state.userId = result.userId;
		 state.userInfo = result;
		 uni.setStorageSync('openId',result.openid);
		 uni.setStorageSync('userId',result.userId);
		 uni.setStorageSync('userInfo',result);
	 },
	
 }
}
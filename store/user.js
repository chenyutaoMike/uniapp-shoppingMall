import {UNILOGIN,ORDERRED,ORDERRONE,ORDERREDTWO,ORDERREDTHREE} from './action-type.js';
import {uniLogin,getUserInfo,onLogin,addUser,getOrderRed,getOrderRedOne,getOrderRedTwo,getOrderRedThree} from '@/http/user.js'
export  const user = {
  state: { 
		userInfo:{}, //用户信息
		openId:'',  
		userId:'',   //用户Id
		isPay:'',   //待支付
		isDelivery:'',  //待发货
		isReceiving:'', //待收货
		isTransaction:'' //已完成
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
		 async getOrderPay({commit},userId){
			 const result = await getOrderRed(userId);
			 commit(ORDERRED,result.data)
		 },
		async getOrderDelivery({commit},userId){
					 const result = await getOrderRedOne(userId);
					 commit(ORDERRONE,result.data)
		},
		async getOrderReceiving({commit},userId){
					 const result = await getOrderRedTwo(userId);
					 commit(ORDERREDTWO,result.data)
		},
		async getOrderTransaction({commit},userId){
					 const result = await getOrderRedThree(userId);
					 commit(ORDERREDTHREE,result.data)
		},
  },

 mutations:{
	 UNILOGIN(state,result){
		 state.openId = result.openId;
		 state.userId = result.userId;
		 state.userInfo = result;
		 uni.setStorageSync('openId',result.openid);
		 uni.setStorageSync('userId',result.userId);
		 uni.setStorageSync('userInfo',result);
	 },
	 ORDERRED(state,result){
		 state.isPay = result;
	 },
	 ORDERRONE(state,result){
		  state.isDelivery = result;
	 },
	 ORDERREDTWO(state,result){
		  state.isReceiving = result;
	 },
	 ORDERREDTHREE(state,result){
		  state.isTransaction = result;
	 }
		
 }
}
import {UNILOGIN,ORDERRED,ORDERRONE,ORDERREDTWO,ORDERREDTHREE,LOGOUT,SETUSERINFO} from './action-type.js';
import {onLogin,addUser,getOrderRed,getOrderRedOne,getOrderRedTwo,getOrderRedThree} from '@/http/user.js'
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
		async getUniLogin({commit},userInfo) {
		
			let loginCode = await onLogin(code);
			
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
			
			 if(result.data !== null && res.data.status !== 0){
				 
			 commit(ORDERRED,result.data)
			 }
		 },
		async getOrderDelivery({commit},userId){
					 const result = await getOrderRedOne(userId);
					 if(result.data !== null && res.data.status !== 0){
					 				 
					 commit(ORDERRONE,result.data)
					 }
					
		},
		async getOrderReceiving({commit},userId){
					 const result = await getOrderRedTwo(userId);
					 if(result.data !== null && res.data.status !== 0){
					 				 
					 commit(ORDERREDTWO,result.data)
					 }
					
		},
		async getOrderTransaction({commit},userId){
					 const result = await getOrderRedThree(userId);
					 if(result.data !== null && res.data.status !== 0){
					 				 
					  commit(ORDERREDTHREE,result.data)
					 }
					
		},
		setUserInfo({commit},userInfo){
			commit(SETUSERINFO,userInfo)
		},
		logout({commit}){
			
			commit(LOGOUT)
		}
  },

 mutations:{
	 UNILOGIN(state,result){
		 console.log(result)
		 state.openId = result.openId;
		 state.userId = result.userId;
		 state.userInfo = result;
		
		 uni.setStorageSync('openId',result.openId);
		 uni.setStorageSync('userId',result.userId);
		 uni.setStorageSync('userInfo',result);
		 
	 },
	 SETUSERINFO(state,result){
		 state.userInfo = result;
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
	 },
	 LOGOUT(state){
		
		 state.openId = '';
		 state.userId = '';
		 state.userInfo = '';
		
		 uni.removeStorageSync('openId');
		 uni.removeStorageSync('userId');
		 uni.removeStorageSync('userInfo');
	 }
		
 }
}
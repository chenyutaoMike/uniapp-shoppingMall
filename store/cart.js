import {GETCARTLIST} from './action-type.js';
import {getCartList} from '@/http/cart.js';
export  const cart = {
  state: { 
		cartList:[]
	},
	actions:{
		async getCartListAry({commit},userId){
				let result = await getCartList(userId);
				if(result.data !== null){
					commit(GETCARTLIST,result.data)
				}
		}
	},
  mutations: {
   GETCARTLIST(state,result){
		 // 处理后台传过来的数据
		 result.forEach(item => {
		 	 if(item.isTop === 0 ){
		 		 item.invalid = true;
				 item.tips = '商品失效'
		 	 }else if(item.stock <= 0){
				 item.invalid = true;
				  item.tips = '库存不足'
			 }else{
		 		 item.invalid = false;
		 	 }
		 	 
		 })
		 state.cartList = result;
	 }
  }

 
}
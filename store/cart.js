import {GETCARTLIST,GETTOTALPIC,CARTCHOICE,CARTYOULIKE} from './action-type.js';
import {getCartList,getToatlPic,cartChoice,cartYouLike} from '@/http/cart.js';
export  const cart = {
  state: { 
		cartList:[],
		totalPic:'',
		marketPriceTotal:'',
		quantity:'',
		youLike:[]
	},
	actions:{
		async getCartListAry({commit},userId){
				let result = await getCartList(userId);
				if(result.data !== null){
					if(result.statusCode === 200 && result.data === ''){
						commit(GETCARTLIST,[])
						return
					}
					commit(GETCARTLIST,result.data)
				}
		},
		async getCartTotalPic({commit},userId){
				let result = await getToatlPic(userId);
			
				if(result.data !== null){
					commit(GETTOTALPIC,result.data)
				}
		},
		async getCartYouLike({commit}){
			let result = await cartYouLike();
			if(result.data !== null){
				commit(CARTYOULIKE,result.data)
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
	 },
	 GETTOTALPIC(state,result){
		 state.totalPic = result.dTotal;
		 state.marketPriceTotal =  result.marketPriceTotal;
		 state.quantity = result.quantity;
	 },
	 CARTYOULIKE(state,result){
		 state.youLike = result;
	 } 
	 
  },
	
}
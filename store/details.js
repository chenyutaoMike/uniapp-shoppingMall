import {GETDETAILSIMG,GETDETAILSINFO,GETADDCART,GETTOBUY} from './action-type.js';
import {getDetailImg,getDetailInfo,addCart} from '@/http/details.js'
export  const details = {
  state: { 
		imgs:[],
		info:{}
	},
  actions: {
   async getImages({commit},id) {
     let result = await getDetailImg(id);
		 if(result !== null){
			 commit(GETDETAILSIMG,result.data)
		 }
    },
		async getDetailInfo({commit},id){
			 let result = await getDetailInfo(id);
			 if(result !== null){
			 	 commit(GETDETAILSINFO,result.data)
			 }
		},
		async getAddCart({commit},option){
			
			let result = await addCart(option);
			
			if(result.data.status === 0 && option.isChecked === 1){
				// 加入购物车
				commit(GETADDCART,result.data)
			}
			if(result.data.status === 0 && option.isChecked === 2){
				// 立即购买
				commit(GETTOBUY,result.data)
			}
		}
  },

 mutations:{
	 GETDETAILSIMG(state,result){
		 state.imgs = result;
	 },
	 GETDETAILSINFO(state,result){
		 state.info = result;
	 },
	 GETADDCART(state,result){
		 // 加入购物车
		 if(result.status === 0){
			 uni.showToast({
				  title:'加入成功'
			 })
		 }else{
			 uni.showToast({
			 		title:'网络异常',
					icon:'none'
			 })
		 }
	 },
	 GETTOBUY(state,result){
		 //立即购买
		 uni.navigateTo({
			 url:'/pages/buy/buy'
		 })
	 }
 }
}
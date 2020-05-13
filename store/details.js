import {GETDETAILSIMG,GETDETAILSINFO,GETADDCART} from './action-type.js';
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
			console.log(option)
			let result = await addCart(option);
			if(result.data !== null){
				commit(GETADDCART,result.data)
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
	 }
 }
}
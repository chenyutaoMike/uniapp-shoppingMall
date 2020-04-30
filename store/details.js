import {GETDETAILSIMG,GETDETAILSINFO} from './action-type.js';
import {getDetailImg,getDetailInfo} from '@/http/details.js'
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
			 console.log(result)
			 if(result !== null){
			 	 commit(GETDETAILSINFO,result.data)
			 }
		}
  },

 mutations:{
	 GETDETAILSIMG(state,result){
		 state.imgs = result;
	 },
	 GETDETAILSINFO(state,result){
		 state.info = result;
	 }
 }
}
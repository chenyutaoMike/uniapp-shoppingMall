import {GETGOODLIST,GETGOODNEXTLIST,UPDATEGOODLIST} from './action-type.js';
import {getGoodList,getGoodListNext,updateGoodList} from '@/http/good-list.js'
export  const goodList = {
  state: { 
		gooListArr:[],
		page:1,
		noList:false
	},
	actions:{
		async getGoodListArr({commit},option){
					const result = await getGoodList(option);
				
					if(result !== null){
						commit(GETGOODLIST,{data:result.data,page:option.page})
					}
				},
		async getGoodNextListArr({commit},option)	{
			const result = await getGoodListNext(option);
			if(result !== null){
				commit(GETGOODNEXTLIST,{data:result.data,page:option.page})
			}
		},
		async updateGoodListArr({commit},option){
			// 返回值错误
			const result = await updateGoodList(option);
			console.log(result)
		}
	},
  mutations: {
		GETGOODLIST(state,{data,page}){
			
			state.gooListArr = [...data];
			state.page = page;
			state.noList = false;
		},
		GETGOODNEXTLIST(state,{data,page}){
				if(data.length === 0){
					state.noList = true;
					return;
				}
				state.gooListArr.push(...data);
				state.page = page;
		}
  }

  
}
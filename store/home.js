import {GETINDEXRECOMMEND,GETINDEXBANNER,GETINDEXSLIDENAV,GETINDEXTYPE,GETINDEXYOULIKE} from './action-type.js';
import {getIndexRecommend,getIndexBanner,getIndexSlideNav,getIndexType,getIndexYouLike} from '@/http/home.js';
export const home = {
  state: { 
		recommend:[],
		bannerImg:[],
		slideNav:[],
		indexType: [],
		youLike:[],
		noList:true
	},
	actions:{
		async getRecommend({commit}){
			let result = await getIndexRecommend();
			if(result !== null){
				commit(GETINDEXRECOMMEND,result.data)
			}
		},
		async getBanner({commit}){
			let result = await getIndexBanner();
			if(result !== null){
				commit(GETINDEXBANNER,result.data)
			}
		},
		async getSlide({commit}){
			let result = await getIndexSlideNav();
			if(result !== null){
				commit(GETINDEXSLIDENAV,result.data)
			}
		},
		async getType({commit}){
			let result = await getIndexType();
			if(result !== null){
				commit(GETINDEXTYPE,result.data)
			}
		},
		async getYouLike({commit},type){
		
			let result = await getIndexYouLike(type);
			if(result.data === ''){
				commit(GETINDEXYOULIKE,null)
			
			}else {
					commit(GETINDEXYOULIKE,result.data)
			}
				
		}
	},
  mutations: {
    GETINDEXRECOMMEND(state,result) {
			state.recommend = result;
    },
		GETINDEXBANNER(state,result) {
			state.bannerImg = result;
		},
		GETINDEXSLIDENAV(state,result) {
			state.slideNav = result;
		},
		GETINDEXTYPE(state,result) {
			state.indexType = result;
		},
		GETINDEXYOULIKE(state,result){
			if(result === null){
				state.noList = false;
				return;
			}
			state.youLike = [...state.youLike,...result];
		}
  },

}
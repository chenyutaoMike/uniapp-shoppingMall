import {GETINDEXRECOMMEND,GETINDEXBANNER,GETINDEXSLIDENAV,GETINDEXTYPE} from './action-type.js';
import {getIndexRecommend,getIndexBanner,getIndexSlideNav,getIndexType} from '@/http/home.js';
export const home = {
  state: { 
		recommend:[],
		bannerImg:[],
		slideNav:[],
		indexType: []
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
	},
  mutations: {
    GETINDEXRECOMMEND (state,result) {
			state.recommend = result;
    },
		GETINDEXBANNER (state,result) {
			state.bannerImg = result;
		},
		GETINDEXSLIDENAV (state,result) {
			state.slideNav = result;
			console.log(state)
		},
		GETINDEXTYPE (state,result) {
			state.indexType = result;
		}
  },

}
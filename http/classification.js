import {request} from './request.js'
// 请求分类函数
export function getClassification(){
 return	request({opt: 'getTypeNew',parentId: 0})
}
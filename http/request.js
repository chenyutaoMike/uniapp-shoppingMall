export function request(dataType,method="GET") {
	let url = 'https://www.baquwangluo.cn/api/xcx/index.aspx';
	return new Promise((resolve, reject) => {
		// uni.showLoading({
		// 	title:'加载中'
		// })
		uni.request({
			url,
			data: {
				...dataType,
			},
			method,
			withCredentials:true,
			header: {
				'content-type': 'application/json'
			},
			success: res => {
				// uni.hideLoading()
				resolve(res)
			},
			fail: rej => {
				// uni.hideLoading()
				// // reject(rej)
				// uni.showToast({
				// 	title:'网络错误',
				// 	icon:'none'
				// })
			}
		})
	})
}
export const hostUrl = 'https://www.baquwangluo.cn';
export const bannerTypeId = 2;
export const bannerId = 1;
export const type = "3";
export const appid = 'wxeee2536abcf8a3d8';
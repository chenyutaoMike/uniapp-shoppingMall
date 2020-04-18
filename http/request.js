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
			header: {
				'content-type': 'application/json'
			},
			success: res => {
				// uni.hideLoading()
				resolve(res)
			},
			fail: rej => {
				// uni.hideLoading()
				reject(rej)
			}
		})
	})
}
export const hostUrl = 'https://www.baquwangluo.cn';
export const bannerTypeId = 2;
export const bannerId = 1;
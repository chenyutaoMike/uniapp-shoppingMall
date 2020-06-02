export function formatAddress(address) {
	const reg = /.+?(省|市|自治区|自治州|县|区)/g; //正则表达式截取省市区
	let region = address.match(reg); ////正则表达式截取省市区
	let newAddress;
	if (region.length > 2) { //判断是否超过省市区
		let str = region.reduce((pre, item, index) => {
			if (index < 3) {
				pre.push(item) //取出省市区之后的地址
			}
			return pre;
		}, [])

		region = str;
		// console.log(`str:${str}`)
		// region = str;   //把正常的省市区交回给region
		newAddress = address.replace(str.join(''), ''); //截取剩下的地址
	} else {
		console.log([...region])
		let str = [...region]; //把region交给str
		str = str.join(''); //转为字符串
		newAddress = address.replace(str, ''); //截取剩下的地址
	}
	return [region, newAddress]
}

export const calculation = (total, couponAmount) => { //这个函数用来计算价格,第一个参数总价格,第二个是要减去的价格
	let baseNum, baseNum1, baseNum2;
	let precision; // 精度
	try {
		baseNum1 = total.toString().split(".")[1].length;
	} catch (e) {
		baseNum1 = 0;
	}
	try {
		baseNum2 = couponAmount.toString().split(".")[1].length;
	} catch (e) {
		baseNum2 = 0;
	}
	baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
	precision = (baseNum1 >= baseNum2) ? baseNum1 : baseNum2;
	return ((total * baseNum - couponAmount * baseNum) / baseNum).toFixed(precision);
}

export function formatDate(ary) {
	let str = /\//g; //处理时间格式正则
	let result = ary.map(item => {
		item.updateTime = item.updateTime.replace(str, "-")
		return item
	})
	return result
}

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
	return [region,newAddress]
}


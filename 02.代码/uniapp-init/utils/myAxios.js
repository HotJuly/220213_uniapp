
/*
	需求:根据不同的运行环境,设置请求的基础路径
		如果是小程序,基础路径就是http://localhost:3001
		如果是web端,基础路径就是/api
		
	问题:如何知道当前的运行环境?
	方法:
		1.使用API获取当前的运行环境信息
			API:uni.getSystemInfoSync()
			
		2.使用uniapp专用的环境差异判断语法
*/

let baseUrl;

// 方案一:
// const {platform} = uni.getSystemInfoSync();
// // console.log(result)

// if(platform==="devtools"){
// 	// 说明当前是小程序运行环境
// 	baseUrl = "http://localhost:3001"
// }else if(platform === "ios"){
// 	// 说明当前是web运行环境
// 	baseUrl = "/api"
// }

// #ifdef MP
	baseUrl = "http://localhost:3001"
// #endif

// #ifdef H5
	baseUrl = "/api"
// #endif

export default function(url,data={},method="GET"){
	return new Promise((resolve)=>{
		uni.request({
			// url:"http://localhost:3001/getIndexData",
			url:baseUrl + url,
			data,
			method,
			success:(res)=>{
				
				// 相当于舍弃了响应头的内容,只返回响应体数据
				resolve(res.data);
			}
		})
	})
}
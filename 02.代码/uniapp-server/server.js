// 1.下载并引入以下两个包
const Koa = require('koa');
const KoaRouter = require('koa-router');

// 2.创建服务器的应用实例对象
// const app = express();
const app = new Koa();

// 4.创建接口
// 4.1 创建路由器实例对象
const router = new KoaRouter();

// 4.2 使用中间件声明使用当前所有的路由配置
// 中间件常用功能
// 1.读取/修改请求头和响应头,例如:判断是否具有token相关信息
// 2.配置cors

app.use(router.allowedMethods())
    .use(router.routes())

// 4.3 注册路由
/*
    express回调函数的重要参数
        request->请求报文对象
        response->响应报文对象
        next->执行下一个中间件
        返回数据:response.end response.send response.json

    koa中:
        1.ctx->request+response
        2.next
        返回数据:ctx.body=需要返回的数据
*/
// 注意路径一定要写/开头
router.get("/test",function(ctx,next){
    ctx.body="test success"
})

// 用于返回首页所需要的数据
const indexData = require('./datas/index.json')
router.get("/getIndexData",function(ctx,next){
    ctx.body=indexData
})

// 用于返回分类页面所需要的数据
const categoryDatas = require('./datas/categoryDatas.json')
router.get("/getCategoryDatas",function(ctx,next){
    ctx.body=categoryDatas
})

// 用于返回首页分类所需要的数据
const indexCateList = require('./datas/indexCateList.json')

// 如果想在koa服务器中,异步返回数据,需要使用async和await
router.get("/getIndexCateList",async function(ctx,next){
	await new Promise((resolve)=>{
		setTimeout(()=>{
			resolve()
		},2000)
	})
	ctx.body=indexCateList;
})

// 用于返回对应商品的详细数据
const goods = require('./datas/goods.json')
router.get("/getGoodDetail",function(ctx,next){
	// 问题1:如何获取用户传过来的query参数,url传参的数据类型一定是字符串
	const goodId = ctx.query.goodId;
	
	const good = goods.find((good)=>{
		return good.id === goodId*1;
	})
	
	// console.log('goodId',goodId)
    ctx.body=good;
})

// 3.将服务器应用实例运行在电脑的某个端口上
app.listen(3001,(error)=>{
    if(error){
        console.log('服务器启动失败',error)
    }else{
        console.log('服务器启动成功,地址为http://localhost:3001')
    }
})
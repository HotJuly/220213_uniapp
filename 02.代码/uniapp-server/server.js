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

// 3.将服务器应用实例运行在电脑的某个端口上
app.listen(3001,(error)=>{
    if(error){
        console.log('服务器启动失败',error)
    }else{
        console.log('服务器启动成功,地址为http://localhost:3001')
    }
})
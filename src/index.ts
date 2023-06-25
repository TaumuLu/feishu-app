import Router from '@koa/router'
import Koa from 'koa'
import koaBody from 'koa-body'

const app = new Koa()
const router = new Router()

app.use(router.routes()).use(router.allowedMethods()).use(koaBody())

router.all('/feishu(.*)', koaBody(), ctx => {
  console.log('--------')
  console.log('url', ctx.request.url)
  console.log('body', ctx.request.body)
  console.log('query', JSON.stringify(ctx.request.query))
  console.log('--------')
  // => POST body
  ctx.body = ctx.request.body
})

// 启动HTTP服务器监听请求
app.listen(8081, () => {
  console.log('Server is running at http://localhost:8081')
})

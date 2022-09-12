const Koa = require('koa')
const app = new Koa()
const axios = require('axios')
const bodyParser = require('koa-bodyparser')

const allowCrossDomain = require('./utils/allow-cross-domain')
allowCrossDomain.run(app)

app.use(bodyParser())

app.use(async ctx => {
  const { originalUrl } = ctx
  const { method, url, params } = ctx.request.body

  switch (originalUrl) {
    case '/sendRequest':
      await axios[method](url, params).then(res => {
        ctx.body = res.data
      })
      break

    default:
      ctx.body = {
        msg: '请检查请求的接口是否正确！',
      }
      break
  }
})

app.listen(process.env.PORT || 3000)

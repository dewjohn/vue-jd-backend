const router = require('koa-router')()

const { register, login } = require('../controller/User')

const { SuccessModel, ErrorModel } = require('../res-model/index')

router.prefix('/api/user')

// router.get('/', function (ctx, next) {
//   ctx.body = 'this is a users response!'
// })

// router.get('/bar', function (ctx, next) {
//   ctx.body = 'this is a users/bar response'
// })

router.post('/register', async function(ctx,next){
  const { username, password } = ctx.request.body
  // 存储数据
  try{
    const newUser = await register(username, password)
    // ctx.body = {
    //   errno:0,
    //   data: newUser
    // }
    ctx.body = new SuccessModel(newUser)
  } catch(e){
    console.log(e);
    // ctx.body = {
    //   errno:-1,
    //   message: `注册失败,${e.message}`
    // }
    ctx.body = new ErrorModel(-2,`注册失败,${e.message}`)
  }
})

router.post('/login',async function(ctx, next){
  const { username, password } = ctx.request.body
  const res = await login(username, password)
  console.log(res)
  if(res){
    //登录成功
    ctx.session.userInfo = { username } // 设置session
    ctx.body = new SuccessModel()
  }else{
    // 登录失败
    ctx.body = new ErrorModel(-3,'登录验证失败')
  }
})

module.exports = router

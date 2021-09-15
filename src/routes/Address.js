const router = require('koa-router')()

const { SuccessModel, ErrorModel } = require('../res-model/index')

const loginCheck = require('../middleware/loginCheck')

const { createAddress, getAddressList, getAddress, updateAddress } = require('../controller/Address')

router.prefix('/api/user/address')

// 创建收货地址
router.post('/', loginCheck, async function(ctx, next){
  const userInfo = ctx.session.userInfo
  const username = userInfo.username
  const data = ctx.request.body
  console.log(data,'+++++++++++++++++');
  try{
    const newAddress = await createAddress(username, data)
    ctx.body = new SuccessModel(newAddress)
  } catch(e) {
    console.log(e);
    ctx.body = new ErrorModel(-5, '创建收货地址失败')
  }
})

// 获取全部收货地址
router.get('/', loginCheck, async function(ctx, next){
  const userInfo = ctx.session.userInfo
  const username = userInfo.username
  const list = await getAddressList(username)
  ctx.body = new SuccessModel(list)
})

// 根据id获取收货地址
router.get('/:id', loginCheck, async function(ctx, next){
  const id = ctx.params.id
  const s = await getAddress(id)
  ctx.body = new SuccessModel(s)
})

// 更新收货地址
router.patch('/:id', loginCheck, async function(ctx, next){
  const id = ctx.params.id
  const userInfo = ctx.session.userInfo
  const username = userInfo.username
  const newData = ctx.request.body
  // console.log(ctx.request.body,'+++++++++++++++++++');
  const afterUpdate = await updateAddress(id, username, newData)
  try{
    ctx.body = new SuccessModel(afterUpdate)
  } catch(e){
    console.log(e);
    ctx.body = ErrorModel(-6, '更新收货地址失败')
  }
})

module.exports = router
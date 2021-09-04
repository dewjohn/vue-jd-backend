/**
 * @description order router
 */

const router = require('koa-router')()

const { SuccessModel, ErrorModel } = require('../res-model/index')

const loginCheck = require('../middleware/loginCheck')

const { createOrder, getOrderList } = require('../controller/Order')
const Order = require('../models/Order')

router.prefix('/api/order')

// 创建订单
router.post('/', loginCheck, async function(ctx, next){
  const userInfo = ctx.session.userInfo
  const username = userInfo.username
  const data = ctx.request.body
  try{
    const newOrder = await createOrder(username, data)
    ctx.body = new SuccessModel(newOrder)
  }catch(e){
    console.log(e);
    ctx.body = new Error(-7, '创建订单失败')
  }
})


// 获取订单列表
router.get('/', loginCheck, async function(ctx, next){
  const userInfo = ctx.session.userInfo
  const username = userInfo.username
  const orderList = await getOrderList(username)
  ctx.body = new SuccessModel(orderList)
  console.log('++++++++++++++++',orderList)
})

 module.exports = router
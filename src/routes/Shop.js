/**
 * @description Shop router
 */

const router = require('koa-router')()

const { SuccessModel, ErrorModel } = require('../res-model/index')

const loginCheck = require('../middleware/loginCheck')

const { getShopList, getShop, getProductsByShopId } = require('../controller/Shop')

router.prefix('/api/shop')

// 商店列表 这些不需要登录才能查看，所以不用loginCheck
router.get('/hot-list', async function(ctx, next){
  const shopList = await getShopList()
  ctx.body = new SuccessModel(shopList)
})

// 单个商店信息
router.get('/:id', async function(ctx, next){
  const id = ctx.params.id
  const shop = await getShop(id)
  ctx.body = new SuccessModel(shop)
})

// 获取商店的商品
router.get('/:id/products', async function(ctx, next){
  const id = ctx.params.id
  const tab = ctx.query.tab || 'all' // query里的tab参数，默认为tab
  const products = await getProductsByShopId(id, tab)
  ctx.body = new SuccessModel(products)
})


module.exports = router
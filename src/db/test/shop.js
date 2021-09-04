/**
 * @description shop model
 */

const Shop = require('../../models/Shop')

!(async()=>{
  // 创建两个商店
  // await Shop.create({
  //   name: '沃尔玛',
  //   imgUrl: '/images/shop/wmt.jepg',
  //   sales:1000,
  //   expressLimit:0,
  //   expressPrice:5,
  //   slogan:'VIP尊享满89元减4元运费券'
  // })
  // await Shop.create({
  //   name: '山姆会员商店',
  //   imgUrl: '/images/shop/sam.jepg',
  //   sales:2000,
  //   expressLimit:0,
  //   expressPrice:5,
  //   slogan:'联合利华洗护满10减5'
  // })

  // 获取附件热门商店
  // const shopList = await Shop.find()
  // console.log(shopList);

  // 获取商店详情
  const id = '61299e995934bc5de5eaf070'
  const shop = await Shop.findById(id)
  console.log(shop);
})()
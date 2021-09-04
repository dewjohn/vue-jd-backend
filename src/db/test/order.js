/**
 * @description order model
 */

const Order = require('../../models/Order')
const Address = require('../../models/Address')
const Product = require('../../models/Product')

!(async()=>{
  const requestBody = {
    addressId: '612911c158a3f64406b079dc',
    shopId: '61299e995934bc5de5eaf070',
    shopName: '沃尔玛',
    isCancled: false,
    products:[
      {
        id: '612baa85e101a0dc977a7f8f',
        num: 3
      },
      {
        id: '612baa85e101a0dc977a7f92',
        num: 10
      }
    ]
  }
  // 获取address
  const address = Address.findById(requestBody.addressId)

  // 获取商品列表
  const pIds = requestBody.products.map(item=>item.id)  // 返回 ['1号商品id','2号商品id', '3号商品id']
  // const productList = await Product.find({
  //   shopId: requestBody.addressId,
  //   _id: {
  //     $in: pIds
  //   }
  // })
  console.log(pIds);
  // console.log(productList);
})()
/**
 * @description order model
 */

const Order = require('../../models/Order')
const Address = require('../../models/Address')
const Product = require('../../models/Product')

!(async()=>{
  const requestBody = {
    addressId: '613b20ccccabd1c26a58de93',
    shopId: '61362f32476f88998ec1e2cf',
    shopName: '山姆会员商店',
    isCanceled: false,
    products:[
      {
        id: '61362fd933e92c5799368118',
        num: 20
      }
    ]
  }
  const address = await Address.findById(requestBody.addressId)
  const { 
    username,
    city,
    department,
    houseNumber,
    name,
    phone
   } = address
  // 获取商品列表
  const pIds = requestBody.products.map(p=>p.id) //['61362fd933e92c5799368111', '61362fd933e92c5799368114']
  const productList = await Product.find({
    shopId: requestBody.shopId, // 沃尔玛的商品
    _id: {
      $in: pIds
    }
  })
  // 整合购买数量
  const productListWithSales = productList.map(p=>{
    const id = p._id.toString()
    // 找到购买商品数量
    const filterProducts = requestBody.products.filter(item=>item.id == id)
    if(filterProducts.length == 0){
      throw Error('未找到匹配销售数据')
    }
    const {
      shopId,
      name,
      imgUrl,
      sales,
      price,
      oldPrice } = p
    return {
      orderProduct: {
        shopId,
        name,
        imgUrl,
        sales,
        price,
        oldPrice },
      orderNum: filterProducts[0].num
    }
  })

  console.log(productListWithSales);

  await Order.create({
    username: 'zhong',
    shopId: requestBody.shopId,
    shopName: requestBody.shopName,
    address:{ username,city,department,houseNumber,name,phone },
    isCanceled: requestBody.isCanceled,
    orderProducts: productListWithSales
  })

})()
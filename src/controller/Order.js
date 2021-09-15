/**
 * @description 订单相关
 */

const Order = require('../models/Order')
const Product = require('../models/Product')
const Address = require('../models/Address')

/**
 * 创建订单
 * @param {String} username 用户名
 * @param {Object} data 订单信息
 * @returns 
 */
async function createOrder(sessionUserName, data = {}){
  //console.log('*********', sessionUserName);
  // console.log('*********', data);
  const {
    addressId,
    shopId,
    shopName,
    isCanceled = false,
    products = []
  } = data
  // 根据addressId获取地址信息
  const address = await Address.findById(addressId)
  const { 
    username,
    city,
    department,
    houseNumber,
    name,
    phone
   } = address
  // 获取购买的商品列表
  const pIds = products.map(p=>p.id) // pIds格式如 ['商品1的Id','商品2的Id']
  const productList = await Product.find({
    _id: {
      $in: pIds
    },
    shopId
  })
  // 拼接上购买数量
  const productListWidthNum = productList.map(p=>{
    // 商品Id
    const id = p._id.toString()
    // 通过商品Id可以找到购买数量
    const filterProducts = products.filter(item=>item.id === id)
    if (filterProducts.length === 0){
      throw new Error('未找到匹配的销售数量')
    }
    console.log(filterProducts.id);
    return {
      orderProduct: p,
      orderNum: filterProducts[0].num
    }
  })
  // console.log('*********',address);
  // 创建订单
  const newOrder = await Order.create({
    username: sessionUserName,
    address:{ username,city,department,houseNumber,name,phone },
    shopId,
    shopName,
    isCanceled,
    orderProducts: productListWidthNum
  })
  return newOrder
}

/**
 * 获取订单列表
 * @param {String} username 用户名
 * @returns 
 */
async function getOrderList(username) {
  const orderList = await Order.find({ username }).sort({ updateAt:-1 })
  return orderList
}

module.exports = { createOrder, getOrderList }
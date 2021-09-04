/**
 * @description 商店功能
 */

const Shop = require('../models/Shop')
const Product = require('../models/Product')

/**
 * 获取商铺列表
 * @returns 商铺列表
 */
async function getShopList(){
  const shopList = await Shop.find().sort({ updateAt: -1 })
  return shopList
}

/**
 * 获取商铺信息
 * @param {String} id 商铺号
 * @returns 商铺
 */
async function getShop(id){
  const shop = await Shop.findById(id)
  return shop
}

/**
 * 
 * @param {String} shopid 商铺号
 * @param {String} tab 商品分类
 */
async function getProductsByShopId(id, tab = ''){
  const products = await Product.find({
    shopId: id,
    tabs: { $in: tab }
  }).sort({ _id: -1 })
  return products
}

module.exports = { getShopList, getShop, getProductsByShopId }
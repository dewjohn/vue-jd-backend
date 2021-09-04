/**
 * @description product model
 */

const Product = require('../../models/Product')

!(async () => {
  // await Product.create({
  //   shopId: '61299e995934bc5de5eaf070', // 沃尔玛
  //   name: '葡萄',
  //   imgUrl: '/images/product/grape.jpg',
  //   sales: 100, // 月售多少
  //   price: 33, // 当前价格
  //   oldPrice: 36, // 原价
  //   tabs: ['all', 'seckill', 'fruit']
  // })
  // await Product.create({
  //   shopId: '61299e995934bc5de5eaf070', // 沃尔玛
  //   name: '苹果',
  //   imgUrl: '/images/product/apple.jpeg',
  //   sales: 200, // 月售多少
  //   price: 25, // 当前价格
  //   oldPrice: 27, // 原价
  //   tabs: ['all', 'seckill', 'fruit']
  // })
  // await Product.create({
  //   shopId: '61299e995934bc5de5eaf070', // 沃尔玛
  //   name: '桃子',
  //   imgUrl: '/images/product/peach.jpg',
  //   sales: 50, // 月售多少
  //   price: 16, // 当前价格
  //   oldPrice: 19, // 原价
  //   tabs: ['all', 'seckill', 'fruit']
  // })
  // await Product.create({
  //   shopId: '61299e995934bc5de5eaf073', // 山姆会员店
  //   name: '西瓜',
  //   imgUrl: '/images/product/watermelon.jpg',
  //   sales: 180, // 月售多少
  //   price: 13, // 当前价格
  //   oldPrice: 15, // 原价
  //   tabs: ['all', 'seckill', 'fruit']
  // })
  const pList = await Product.find({
    shopId: '61299e995934bc5de5eaf070',
    tabs: {
        $in: 'all' // 匹配 tabs
    }
})
console.log('product list', pList)
})()
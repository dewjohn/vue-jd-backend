/**
 * @description 用户数据操作
 */


const User = require('../../models/User')

!(async() => {
  // 模拟创建新用户 注册
  // await User.create({
  //   username: 'zhong',
  //   password: '123'
  // })
  // 再创建一个新用户
  // await User.create({
  //   username: 'john',
  //   password: '456'
  // })

  // 登录：查询单个用户
  const zhong = await User.findOne({
    user: 'zhong',
    password: '123'
  })
  console.log('zhong', zhong);
})()
/**
 * @description 注册页面存储账号密码进数据库
 */

const User = require('../models/User')

/**
 * 注册功能
 * @param {String} username 
 * @param {String} password 
 * @returns 
 */

async function register(username, password) {
  // 保存到数据库
  const newUser = await User.create({ username, password })
  return newUser
}

/**
 * 登录功能
 * @param {String} username 
 * @param {String} password 
 * @returns 
 */
async function login(username, password) {
  // 查询数据库用户
  const someOne = await User.findOne({ username, password })
  if(someOne !== null){
    // 登录成功
    return true;
  }else{
    // 登录失败
    return false
  }
}

module.exports = { register, login }
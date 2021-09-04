/**
 * @description 收货地址功能
 */

const Address = require('../models/Address')

/**
 * 创建收货地址
 * @param {String} username 用户名 
 * @param {Object} data 地址信息
 * @returns 
 */

async function createAddress(username, data){
  const newAddress = await Address.create({
    username,
    ...data
  })
  return newAddress
}

/**
 * 根据用户名获取全部收货地址
 * @param {String} username 用户名
 */
async function getAddressList(username){
  const list = await Address.find({ username }).sort({ updatedAt: -1 })
  return list
}

/**
 * 根据地址id获取收货地址
 * @param {String} id 
 * @returns 
 */
async function getAddress(id){
  const s = await Address.findById(id)
  return s
}

/**
 * 更新收货地址
 * @param {String} id 收货地址id
 * @param {String} username 用户名
 * @param {Object} newData  前端发回来的更新后的地址
 * @returns 
 */
async function updateAddress(id, username, newData = {}){
  const { city, department, houseNumber, name, phone } = newData.data
  const address = await Address.findByIdAndUpdate(
    {_id: id, username},
    {username, city, department, houseNumber, name, phone},
    {new: true}
  )
  console.log(username,id, '--------------');
  console.log(address, '--------------');
  return address
}

module.exports = { createAddress, getAddressList, getAddress, updateAddress }
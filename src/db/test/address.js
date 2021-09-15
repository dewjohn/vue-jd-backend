/**
 * @description 地址数据操作
 */

const Address = require('../../models/Address')

!(async()=> {
  // 创建收货地址
  await Address.create({
    username: 'zhong',
    city: '钦州市',
    department: '凤凰公寓',
    houseNumber: 201,
    name: '钟威威',
    phone: '13557076622'
  })
  // await Address.create({
  //   username: 'john',
  //   city: '钦州市',
  //   department: '66公寓',
  //   houseNumber: 201,
  //   name: '钟德威',
  //   phone: '15673559864'
  // })
  // 获取zhong的收货地址
  // const addressList = await Address.find().sort({ updatedAt: -1 })
  // console.log(addressList);
  // const id = '6129119c3cb863df3c894d2c'
  // const address = await Address.findById(id)
  // console.log(address);
  // 更新收货地址
  // const id = '6129119c3cb863df3c894d2c'
  // const newData = {
  //   username: 'john',
  //   city: '北京市',
  //   department: '88号公寓',
  //   houseNumber: 666,
  //   name: '钟德威',
  //   phone: '15673559864'
  // }
  // const address = await Address.findByIdAndUpdate(
  //   {_id: id, username: 'john'},
  //   newData,
  //   {new: true}
  // )
  // console.log(address);

})()
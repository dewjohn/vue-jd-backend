/**
 * @description 成功返回的格式
 */

 class SuccessModel{
  constructor(data){
    this.errno = 0
    if(data != null) {
      this.data = data
    }
  }
}

module.exports = SuccessModel


// new SuccessModel({xxxx})  { errno = 0, data: {xxx} }
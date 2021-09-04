/**
 * @description 失败返回的格式
 */

class ErrorModel{
  constructor(errno = -1, message = 'error'){
    this.errno = errno,
    this.message = message
  }
}

module.exports = ErrorModel
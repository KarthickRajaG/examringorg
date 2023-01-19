const md5 = require('md5')
exports.checkAuthToken = function (authToken, values) {
    console.log(values, authToken)
  if (authToken === md5(values)) {
    return true
  }
  return false
}

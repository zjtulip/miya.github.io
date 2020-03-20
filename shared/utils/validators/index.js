export const username = function (rule, value, callback) {
  if (!/^[_a-zA-Z]/.test(value)) {
    callback(new Error('用户名首字母，必须为字母或下划线'))
  } else {
    if (!/^[_a-zA-Z][_a-zA-Z0-9]{5,31}$/.test(value)) {
      callback(new Error('请输入6-32位，由数字、字母、下划线组成的用户名'))
    } else {
      callback ()
    }
  }
}

export const password = function (rule, value, callback) {
  if (!/^(?=.*[0-9].*)(?=.*[a-zA-Z].*).{8,16}$/.test(value)) { // 后台验证规则
    callback(new Error('请输入8-16位密码(必须包含数字与字母)'))
  } else {
    callback()
  }
}
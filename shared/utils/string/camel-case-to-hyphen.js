/**
 * 将驼峰变量转换为中划线连接
 * @param  {String} str 目标字符串
 * @return {String}     中划线连接的字符串
 */
function camelcaseToHyphen (str) {
  return str.replace(/([A-Z])/g, '-$1').replace(/^-/, '').toLowerCase()
}

export default camelcaseToHyphen

/**
 * 项目基本配置
 * @type {Object}
 */

let apiServer = {}

switch (process.env.API_SERVER) {
  case 'dev':
    apiServer = require('./dev')
    break
  case 'test':
    apiServer = require('./test')
    break
  case 'prod':
    apiServer = require('./prod')
    break
  default:
    apiServer = require('./dev')
}

export const API_SERVER = {
  default: `${apiServer.api.protocol || 'http'}://${apiServer.api.host}:${apiServer.api.port || ''}`,
}

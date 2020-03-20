let apiServer = {}

switch (process.env.API_SERVER) {
  case 'dev':
    apiServer = require('shared/config/dev')
    break
  case 'test':
    apiServer = require('shared/config/test')
    break
  case 'prod':
    apiServer = require('shared/config/prod')
    break
  default:
    apiServer = require('shared/config/dev')
}

export default apiServer
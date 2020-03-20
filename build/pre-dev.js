'use strict'
const inquirer = require('inquirer')
const async = require('async')

// 选择运行环境
let environment = {
  type: 'list',
  name: 'environment',
  message: '请选择运行环境',
  choices: [{
    name: '开发环境',
    value: 'dev'
  }, {
    name: '测试环境',
    value: 'test'
  }, {
    name: '正式环境',
    value: 'prod'
  }],
  default: 'dev'
}

let retAnswers = {}

module.exports = new Promise(function (resolve, reject) {
  async.waterfall([
    function (cb) {
      inquirer.prompt([environment]).then(function (answers) {
        retAnswers.packagingType = answers.environment
        cb(null)
      })
    },
    function (cb) {
      resolve(retAnswers)
      cb(null, '')
    }
  ],
  function (err, results) {
    if (err) {
      reject(err)
    }
  })
})

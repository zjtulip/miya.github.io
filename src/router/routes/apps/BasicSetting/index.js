import * as routeNames from '@/router/route-names'

const BasicSetting = r => require.ensure([], () => r(require('@/views/apps/BasicSetting')), 'BasicSetting')

export default [
  {
    path: 'BasicSetting',
    name: routeNames.BASICSETTING,
    component: BasicSetting
  }
]

import * as routeNames from '@/router/route-names'

const GroupProfile = r => require.ensure([], () => r(require('@/views/apps/GroupProfile')), 'GroupProfile')

export default [
  {
    path: '/',
    redirect: 'GroupProfile'
  }, {
    path: 'GroupProfile',
    name: routeNames.GROUPPROFILE,
    component: GroupProfile
  }
]

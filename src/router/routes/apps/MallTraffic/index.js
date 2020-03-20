import * as routeNames from '@/router/route-names'

const MallTraffic = r => require.ensure([], () => r(require('@/views/apps/MallTraffic')), 'MallTraffic')

export default [
  {
    path: 'MallTraffic',
    name: routeNames.MALLTRAFFIC,
    component: MallTraffic
  }
]

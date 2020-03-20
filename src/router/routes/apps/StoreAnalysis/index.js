import * as routeNames from '@/router/route-names'

const StoreAnalysis = r => require.ensure([], () => r(require('@/views/apps/StoreAnalysis')), 'StoreAnalysis')

export default [
  {
    path: 'StoreAnalysis',
    name: routeNames.STOREANALYSIS,
    component: StoreAnalysis
  }
]

import * as routeNames from '@/router/route-names'

const MemberAnalysis = r => require.ensure([], () => r(require('@/views/apps/MemberAnalysis')), 'MemberAnalysis')

export default [
  {
    path: 'MemberAnalysis',
    name: routeNames.MEMBERANALYSIS,
    component: MemberAnalysis
  }
]

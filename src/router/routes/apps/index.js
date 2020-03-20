import GroupProfile from '@/router/routes/apps/GroupProfile'
import MallTraffic from '@/router/routes/apps/MallTraffic'
import StoreAnalysis from '@/router/routes/apps/StoreAnalysis'
import MemberAnalysis from '@/router/routes/apps/MemberAnalysis'
import ApplicationService from '@/router/routes/apps/ApplicationService'
import BasicSetting from '@/router/routes/apps/BasicSetting'

const Apps = r => require.ensure([], () => r(require('@/views/apps')), 'apps')

export default [
  {
    path: '/',
    redirect: 'Apps'
  }, {
    path: '/Apps',
    component: Apps,
    children: [
      ...GroupProfile,
      ...MallTraffic,
      ...StoreAnalysis,
      ...MemberAnalysis,
      ...ApplicationService,
      ...BasicSetting
    ]
  }
]

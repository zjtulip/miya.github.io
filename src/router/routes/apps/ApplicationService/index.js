import * as routeNames from '@/router/route-names'

const ApplicationService = r => require.ensure([], () => r(require('@/views/apps/ApplicationService')), 'ApplicationService')

export default [
  {
    path: 'ApplicationService',
    name: routeNames.APPLICATIONSERVICE,
    component: ApplicationService
  }
]

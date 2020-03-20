<template>
  <AdminLayout>
    <router-view/>
  </AdminLayout>
</template>

<script>
import AdminLayout from '@/components/admin-layout'
export default {
  name: 'apps',

  components: { AdminLayout }
}
</script>

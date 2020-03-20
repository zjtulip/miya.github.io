<template>
  <div class="adminLayout">
    <div class="sidebar">
      <Sidebar></Sidebar>
    </div>
    <div class="content">
      <div class="nav_warp">
        <div class="nav">
          <Nav></Nav>
        </div>
      </div>
      <div class="main">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './sidebar'
import Nav from './Nav'
export default {
  name: 'adminLayout',

  components: {
    Sidebar,
    Nav
  },

  mounted () {
    this.init()
  },

  methods: {
    init () {
      this.Adaptive()
      window.onresize = () => {
        this.Adaptive()
      }
    },

    Adaptive () {
      document.querySelector('html').style.fontSize = `${document.querySelector('html').offsetWidth / 10}px`
    }
  }
}
</script>

<style lang="stylus" scoped>
  .adminLayout
    width 100%
    height 100%
    .sidebar
      width 233px
      height 100%
      float left
      background #ffffff
    .content
      width calc(100% - 233px)
      height 100%
      float left
      background #f3f7fd
      .nav_warp
        width 100%
        height 70px
        padding 0 56px
        box-sizing border-box
        .nav
          width 100%
          height 100%
          border-bottom 1px solid #DBE3EF
      .main
        width 100%
        height calc(100% - 112px)
        padding 0 56px
        box-sizing border-box
        margin-top 42px
        overflow auto
</style>

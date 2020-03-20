<template>
  <div class="Nav">
    <div class="Nav_search">
      <i class="el-icon-search Nav_search_icon"></i>
      <input class="Nav_search_Input" type="text" placeholder="输入搜索关键词">
    </div>
    <div class="Nav_Title">
      <i class="el-icon-office-building"></i>
      集团概览
    </div>
    <div class="Nav_User">
      <div class="Nav_User_account">
        <i class="el-icon-user"></i>
        账户设置
      </div>
      <div class="Nav_User_news">
        <i class="el-icon-bell"></i>
        消息
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style lang="stylus" scoped>
  .Nav
    width 100%
    height 100%
    position relative
    .Nav_search
      width 158px
      height 32px
      border 1px solid #DBE3EF
      border-radius 15px
      position absolute
      top 50%
      left 0
      transform translate(0, -50%)
      .Nav_search_icon
        font-size 14px
        line-height 30px
        margin-left 7px
      .Nav_search_Input
        width 118px
        height 30px
        border none
        background none
        font-size 14px
    .Nav_Title
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      font-size 16px
      color #030303
      font-weight bold
      i
        position absolute
        left -30px
        top -2px
        font-size 26px
        color #226CE9
    .Nav_User
      position relative
      float right
      div
        float left
        line-height 70px
        margin-left 60px
        font-size 14px
        position relative
        cursor pointer
        color #A9B7CF
        i
          position absolute
          left -30px
          top 25px
          font-size 20px
</style>

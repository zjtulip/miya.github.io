<template>
  <div class="Sidebar">
    <div class="Sidebar_Logo">
      <img src="https://aquilafly-website.oss-cn-shenzhen.aliyuncs.com/assets/Aeye/Sidebar/logo.png" alt="">
    </div>
    <div class="Sidebar_Icon_Warp">
      <img class="Sidebar_Icon" src="https://aquilafly-website.oss-cn-shenzhen.aliyuncs.com/assets/Aeye/Sidebar/icon_2.png" alt="">
      <img class="Sidebar_Pulldown" src="https://aquilafly-website.oss-cn-shenzhen.aliyuncs.com/assets/Aeye/Sidebar/icon_3.png" alt="">
    </div>
    <div class="Sidebar_Title">
      <img class="Sidebar_Title_icon" src="https://aquilafly-website.oss-cn-shenzhen.aliyuncs.com/assets/Aeye/Sidebar/icon_4.png" alt="">
      鹰云集团
    </div>
    <div class="Sidebar_Menu">
      <el-menu
        default-active="1"
        :unique-opened='true'
        class="el-menu-vertical-demo">
        <div v-for="(item, index) in dataList" :key="index">
          <el-menu-item :index="item.id" v-if="!item.children">
            <i :class="item.icon" v-if="item.icon"></i>
            <span slot="title">{{item.label}}</span>
          </el-menu-item>
          <el-submenu :index="item.id" v-else>
            <template slot="title">
              <i :class="item.icon" v-if="item.icon"></i>
              <span>{{item.label}}</span>
            </template>
            <el-menu-item :index="item2.id" v-for="(item2, index2) in item.children" :key="index2">{{item2.label}}</el-menu-item>
          </el-submenu>
        </div>
      </el-menu>
    </div>
    <div class="Sidebar_Footer">
      <div class="Sidebar_help">
        帮助
        <img src="https://aquilafly-website.oss-cn-shenzhen.aliyuncs.com/assets/Aeye/Sidebar/help.png" alt="">
      </div>
      <div class="Sidebar_service">客服：400-8088-638</div>
      <div class="Sidebar_exit">
        <img class="Sidebar_Title_icon" src="https://aquilafly-website.oss-cn-shenzhen.aliyuncs.com/assets/Aeye/Sidebar/exit.png" alt="">
        退出登录
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',

  data () {
    return {
      dataList: [
        {
          id: '1',
          label: '集团概览',
          icon: 'el-icon-office-building'
        },
        {
          id: '2',
          label: '商场客流',
          icon: 'el-icon-school',
          children: [
            {
              id: '2-1',
              label: '客流概览'
            },
            {
              id: '2-2',
              label: '楼层分析'
            },
            {
              id: '2-3',
              label: '影响客流因素分析'
            },
            {
              id: '2-4',
              label: '动线分析'
            },
            {
              id: '2-5',
              label: '场馆客流分析'
            },
            {
              id: '2-6',
              label: '车场分析'
            }
          ]
        },
        {
          id: '3',
          label: '店铺分析',
          icon: 'el-icon-pie-chart',
          children: [
            {
              id: '3-1',
              label: '客流分析'
            },
            {
              id: '3-2',
              label: '到访时段'
            },
            {
              id: '3-3',
              label: '进店分析'
            },
            {
              id: '3-4',
              label: '驻留分析'
            },
            {
              id: '3-5',
              label: '店铺关联分析'
            },
            {
              id: '3-6',
              label: '店铺小生态'
            },
            {
              id: '3-7',
              label: '顾客到访管理'
            }
          ]
        },
        {
          id: '4',
          label: '会员分析',
          icon: 'el-icon-user',
          children: [
            {
              id: '4-1',
              label: '会员结构'
            },
            {
              id: '4-2',
              label: '会员到访分析'
            },
            {
              id: '4-3',
              label: '多级会员库管理'
            },
            {
              id: '4-4',
              label: '会员信息检索'
            }
          ]
        },
        {
          id: '5',
          label: '应用服务',
          icon: 'el-icon-set-up',
          children: [
            {
              id: '5-1',
              label: '周边客群洞察'
            },
            {
              id: '5-2',
              label: '客流可视化'
            },
            {
              id: '5-3',
              label: '数据报表'
            },
            {
              id: '5-4',
              label: '人像应用'
            }
          ]
        },
        {
          id: '6',
          label: '基础设置',
          icon: 'el-icon-setting',
          children: [
            {
              id: '6-1',
              label: '设备管理'
            },
            {
              id: '6-2',
              label: '系统设置'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .Sidebar
    width 100%
    height 100%
    position relative
    .Sidebar_Logo
      margin 0 auto
      padding-top 20px
      width 183px
      padding-bottom 18px
      border-bottom 1px solid #DBE3EF
      text-align center
      img
        width 115px
        height 32px
    .Sidebar_Icon_Warp
      width 87px
      height 87px
      margin 39px auto 0
      background url('https://aquilafly-website.oss-cn-shenzhen.aliyuncs.com/assets/Aeye/Sidebar/icon_1.png') no-repeat
      background-size 100% 100%
      position relative
      .Sidebar_Icon
        width 64px
        height 64px
        margin 11px 0 0 11px
      .Sidebar_Pulldown
        position absolute
        width 61px
        height 61px
        top 44px
        left 41px
        cursor pointer
    .Sidebar_Title
      background #E7FAF6
      width 160px
      height 33px
      border-radius 17px
      margin 27px auto 0
      text-align center
      line-height 33px
      position relative
      font-weight bold
      color #00B188
      letter-spacing 1px
      .Sidebar_Title_icon
        position absolute
        width 14px
        height 13px
        left 24px
        top 10px
    .Sidebar_Menu
      width 100%
      height calc(100% - 430px)
      margin-top 20px
      overflow auto
      .el-menu-vertical-demo
        border none
    .Sidebar_Footer
      position absolute
      bottom 0
      left 0
      width 100%
      .Sidebar_help
        width 156px
        margin 0 auto
        line-height 14px
        img
          height 14px
          cursor pointer
      .Sidebar_service
        width 156px
        margin 10px auto
      .Sidebar_exit
        width 161px
        height 31px
        background #E7EFFC
        margin 31px auto
        border-radius 5px
        position relative
        line-height 31px
        text-align center
        color #8EA6CB
        cursor pointer
        img
          width 16px
          height 16px
          position absolute
          left 19px
          top 8px
</style>

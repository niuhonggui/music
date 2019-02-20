<template>
  <div class="my-header">
      <div class="top">
          <div class="nav clear">
              <div class="option left" @click="toggle">
                  <i class="iconfont icon-optio3"></i>
              </div>
              <ul class="tab left clear">
                  <router-link to="/home/mine" tag="li">我的</router-link>
                  <router-link to="/home/music-hall" tag="li">音乐馆</router-link>
                  <router-link to="/home/finder" tag="li">发现</router-link>
              </ul>
              <div class="add right">
                  <i class="iconfont icon-tianjiaxuanxiang"></i>
              </div>
          </div>
          <div class="search">
              <i class="iconfont icon-sousuo"></i>
              搜索
          </div>

      </div>
      <div class="content">
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
  name: 'my-header',
  data () {
    return {}
  },
  methods: {
    toggle: function () {
      this.$parent.toggle(true)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
.top
    height 140px
    background #31c37c
    padding 60px 25px 0
    min-width 300px
    font-size 28px
    color #fff
    .nav
        position relative
        .tab
            position absolute
            left 50%
            transform translateX(-50%)
            li
                margin-right 30px
                float left
    .search
        height 60px
        background #2daf71
        margin-top 20px
        text-align center
        font-size 25px
        border-radius 8px
        line-height 60px
</style>

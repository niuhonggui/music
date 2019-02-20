<template>
  <div class="mine">
    <div class="account">
      <div v-if="status">
        <img src="avator" alt=""><span class="login">{{uname}}</span>
      </div>
      <div v-else>
        <i class="iconfont icon-geren8"></i>
        您还没有<span class="login" @click=login>登陆</span>
      </div>
    </div>
    <ul>
      <li class='left'>
        <i class="iconfont icon-xihuan"></i>
        <p>本地音乐</p>
        <span>1</span>
      </li>
      <li class="left center">
        <i class="iconfont icon-xiazai"></i>
        <p>下载音乐</p>
        <span>1</span>
      </li>
      <li class="right">
        <i class="iconfont icon-shizhong"></i>
        <p>最近播放</p>
        <span>1</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'mine',
  data () {
    return {
      status: false,
      avator: '',
      user: ''
    }
  },
  methods: {
    login: function () {
      this.$router.push({
        path: '/Login'
      })
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .mine
    .account
      height 120px
      line-height 140px
      font-size 25px
      text-align center
      color #000
      background #fff
      width 95%
      margin 0 auto
      border-radius 4px
      border 2px solid #f7f7f7
      border-top none
      img
        width 50px
        vertical-align middle
        margin-right 20px
      i
        font-size 30px
      .login
        color #2daf71
        font-style italic
    ul
      color #000
      text-align center
      position relative
      >li
        width 100px
        margin 45px
        font-size 25px
        p
          margin 20px 0
        i
         font-size 35px
         color #2daf71
      li.center
        position absolute
        margin-left 0
        left 50%
        transform translateX(-50%)
</style>

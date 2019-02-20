<template>
  <div class="login">
    <i class="iconfont icon-ai207" @click='back'></i>
    <div class="login-form">
      <input type="text" id="uname" placeholder="用户名..." v-model="postData.uname">
      <input type="password" id="pwd" v-model="postData.pwd" placeholder="密码...">
      <input type="button" value="登陆" id="btn" @click="login">
    </div>
  </div>
</template>

<script>
import qs from 'qs'
export default {
  name: 'login',
  data () {
    return {
      postData: {
        uname: '',
        pwd: ''
      }
    }
  },
  methods: {
    back: function () {
      if (window.history.length <= 1) {
        this.$router.push({path: '/'})
        return false
      } else {
        this.$router.go(-1)
      }
      setTimeout(() => {
        this.$router.push({path: '/'})
      }, 500)
    },
    login: function () {
      let that = this
      let postData = qs.stringify(this.postData)
      that.$http.post('/api/php/login.php', postData)
        .then(function (response) {
          window.localStorage.setItem('uname', response.data.uname)
          window.localStorage.setItem('avator', response.data.avator)
          that.$router.push({path: '/home/Mine'})
        })
        .catch(function (error) {
          console.log('错误消息为：' + error)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../common/stylus/variable.styl'
  .login
    i
     color $color-theme
     font-size 50px
     margin 10px
    .login-form
      width 320px
      height 280px
      margin 280px auto
      border 1px solid #eee
      border-radius 20px
      padding 25px
      #uname,#pwd,#btn
        width 280px
        height 40px
        border 1px solid red
        padding-left 30px
        outline none
        border-radius 20px
        border 1px solid #eee
        margin-top 40px
      #btn
        width 310px
        padding 0
        margin 40px auto
        background #31c37c
        color #fff
</style>

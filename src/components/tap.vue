<template>
  <vue-drawer-layout
    ref="drawer"
    :drawer-width="200"
    :enable="true"
    :animatable="true"
    :z-index="0"
    :drawable-distance="Math.floor(800/3)"
    :content-drawable="true"
    :backdrop="true"
    :backdrop-opacity-range="[0,0.4]"
    @mask-click="handleMaskClick">
      <div class="drawer-content" slot="drawer">
        这是侧滑里面的内容
      </div>
      <div slot="content">
        <my-header></my-header>
      </div>
  </vue-drawer-layout>
</template>

<script>
import MyHeader from 'components/my-header/my-header'
export default {
  name: 'tap',
  data () {
    return {
    }
  },
  components: {
    MyHeader
  },
  methods: {
    handleMaskClick: function () {
      this.$refs.drawer.toggle(false)// 通过ref绑定父组件drawer，调用父组件内的方法
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">

</style>

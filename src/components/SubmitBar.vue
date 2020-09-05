<template>
  <div class="submit-bar">
    <router-link to="/start">
      <van-button type="primary">你</van-button>
    </router-link>
    <router-link to="/peroperation">
      <van-button type="primary">点</van-button>
    </router-link>
    <van-button round type="info" block class="options-footer-button" @click="submit()">提交</van-button>
    <router-link to="/Anesthesia">
      <van-button type="primary">我</van-button>
    </router-link>
    <router-link to="/Leave">
      <van-button type="primary">试</van-button>
    </router-link>
    <router-link to="/postoperation">
      <van-button type="primary">试</van-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'SumbitBar',
  data () {
    return {}
  },
  computed: {},
  mounted () {
  },
  methods: {
    submit () {
      this.$emit('_submit')
    }
  }
}
</script>

<style scoped lang="stylus">
  @import '../assets/styles/mixin.styl'
  .submit-bar
    width 100%
    height pxToRem(98px)
    background rgba(255,255,255,1)
    box-shadow 0px -1px pxToRem(18px) 0px rgba(117,132,137,0.53);
    display flex
    justify-content center
    align-items center
    .options-footer-button
      font-size pxToRem(32px)
      font-weight bold
      background rgba(28,101,115,1);
      width pxToRem(320px)
      height pxToRem(72px)
</style>

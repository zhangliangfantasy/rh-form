<template>
  <div class="pre-operation">
    <div>术后访视</div>
    <div>
      <span>术后第</span>
      <div class="pre-operation-input" style="display: inline-block">
        <van-field v-model="text" />
      </div>
      <span>日</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PreVisit',
  data () {
    return {
      text: ''
    }
  },
  computed: {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="stylus">
  @import '../assets/styles/mixin.styl'
  .pre-operation
    width 100%
    font-size pxToRem(30px)
    line-height pxToRem(30px)
    background:rgba(255,255,255,1)
    margin-bottom pxToRem(10px)
    .pre-operation-input
      overflow hidden
      border 1px solid red
    .pre-operation-input >>> .van-cell
      padding 0
      height pxToRem
      line-height pxToRem(30px)
    .pre-operation >>> .van-field__label
      width pxToRem(50px)
</style>

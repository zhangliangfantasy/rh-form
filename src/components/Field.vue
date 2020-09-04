<template>
  <div class="text">
    <div class="text-content border-bottom">
      <van-field :label-class="textInput" :label-width="labelWidth" v-model="text" rows="1" :label="label" type="text" autosize placeholder="请输入" input-align="right" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Field',
  props: {
    label: String,
    labelWidth: String,
    textInput: String
  },
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
<!--
备注:
1. margin-right的ui为40px，为了整体布局协调实际采用了50px，
-->
<style scoped lang="stylus">
  @import '../assets/styles/mixin.styl';
  .text
    padding 0px pxToRem(50px) 0px pxToRem(40px)
    background:rgba(255,255,255,1)
    .text-content
      padding 0px 0px pxToRem(13px) 0px;
  .text >>> .van-cell
    padding 0px
    line-height pxToRem(49px)
    font-size pxToRem(30px)
    color rgba(0,0,0,1)
  .text >>> .text-input
    font-size pxToRem(30px)
    line-height pxToRem(49px)
    color rgba(51,51,51,1)
  .text >>> .text-input-blod
    font-size pxToRem(30px)
    font-weight bolder
    line-height pxToRem(49px)
    color rgba(51,51,51,1)
</style>

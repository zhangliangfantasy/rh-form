<template>
  <div class="text">
    <div class="text-content border-bottom">
      <van-field :label-class="textInput" :label-width="labelWidth" v-model="text" rows="1" :label="label" type="text" autosize placeholder="请输入" :colon="true" input-align="right" />
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

<style scoped lang="stylus">
  @import '../assets/styles/mixin.styl';
  .text
    padding 0px pxToRem(50px) 0px pxToRem(40px)
    background:rgba(255,255,255,1)
    .text-content
      padding 0px 0px pxToRem(23px) 0px;
  .text >>> .van-cell
    padding 0px
    font-family PingFang SC
    line-height pxToRem(50px)
    font-size pxToRem(30px)
    font-weight 400
    color rgba(153,153,153,1)
  .text >>> .text-input
    font-family PingFang SC
    font-size pxToRem(30px)
    font-weight 400;
    line-height pxToRem(50px)
    color rgba(51,51,51,1)
  .text >>> .text-input-blod
    font-family PingFang SC
    font-size pxToRem(30px)
    font-weight bolder
    line-height pxToRem(50px)
    color rgba(0,0,0,1)
</style>

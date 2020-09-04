<template>
  <div class="options clearfix">
    <form>
      <div v-for="(item, index) in list" :key="index" :class="index === 0 ? 'options-item-one' : 'options-item'">
        <label>{{item.label}}：</label>
        <div class="options-input">
          <van-radio-group v-model="item.value" direction="horizontal" v-if="item.mark == '0'">
            <van-radio name="1" checked-color="#00a98d" label-position="left" >是</van-radio>
            <van-radio name="2" checked-color="#00a98d" label-position="left">否</van-radio>
          </van-radio-group>
          <van-radio-group v-model="item.value" direction="horizontal" v-if="item.mark == '1'">
            <van-radio name="1" checked-color="#00a98d" label-position="left">有</van-radio>
            <van-radio name="2" checked-color="#00a98d" label-position="left">无</van-radio>
          </van-radio-group>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Options',
  props: {
    list: Array
  },
  data () {
    return {}
  },
  computed: {},
  mounted () {
  },
  methods: {}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--
备注：1. line-height的ui图为29px，实际使用了37px，
      2. margin的ui图为56px, 实际采用52px，所以margin上下采用了52px
      3. margin-rightd的ui图为40px，为了整体界面协调margin-right采用了20px
-->
<style scoped lang="stylus">
  @import '../assets/styles/mixin.styl'
  .options
    background rgba(255,255,255,1)
    font-size: pxToRem(30px);
    color:rgba(51,51,51,1);
    line-height: pxToRem(37px);
    .options-item-one
      margin pxToRem(10px) pxToRem(20px) pxToRem(52px) pxToRem(40px)
      padding-top pxToRem(32px)
    .options-item
      margin: pxToRem(52px) pxToRem(20px) pxToRem(52px) pxToRem(40px)
    .options-input
      display: inline-block;
      float: right;
    .options-input >>> .van-radio__label
      line-height pxToRem(37px)
    .options-input >>> .van-radio__icon .van-icon
      height pxToRem(37px)
      width pxToRem(37px)
      font-size pxToRem(30px)
    .options-input >>> .van-radio__icon
      height pxToRem(37px)
</style>

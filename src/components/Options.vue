<template>
    <div class="options">
      <form>
        <div v-for="(item, index) in list" :key="index" class="options-item">
          <label>{{item.label}}：</label>
          <div class="options-input">
            <van-radio-group v-model="item.value" direction="horizontal" v-if="item.mark == '0'">
              <van-radio name="1" checked-color="#009393">是</van-radio>
              <van-radio name="2" checked-color="#009393">否</van-radio>
            </van-radio-group>
            <van-radio-group v-model="item.value" direction="horizontal" v-if="item.mark == '1'">
              <van-radio name="1" checked-color="#009393">有</van-radio>
              <van-radio name="2" checked-color="#009393">无</van-radio>
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
<style scoped lang="stylus">
  @import '../assets/styles/mixin.styl'
  .options
    background rgba(255,255,255,1)
    font-size: pxToRem(30px);
    font-family:PingFang SC;
    font-weight: 400;
    color:rgba(51,51,51,1);
    line-height: pxToRem(50px);
    .options-item
      margin: pxToRem(56px) pxToRem(30px) pxToRem(56px) pxToRem(40px)
    .options-input
      display: inline-block;
      float: right;
</style>

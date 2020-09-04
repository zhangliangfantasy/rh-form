<template>
  <div class="checkbox clearfix">
    <form>
      <div v-for="(item, index) in list" :key="index" :class="index === 0 ? 'checkbox-item-one' : 'checkbox-item'" >
        <label>{{item.label}}：</label>
          <van-checkbox-group v-model="item.value">
            <div v-for="(_item, _index) in item._list" :key="_index" class="checkbox-input">
              <van-checkbox :name="_item.value" shape="square" checked-color="#00a98d">{{_item.lab}}</van-checkbox>
            </div>
          </van-checkbox-group>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    list: Array
  },
  data () {
    return {}
  },
  computed: {},
  mounted () {},
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  @import '../assets/styles/mixin.styl';
  .checkbox
    background rgba(255,255,255,1)
    font-size: pxToRem(30px);
    color:rgba(51,51,51,1);
    line-height: pxToRem(27px);
    .checkbox-item-one
      margin 0px pxToRem(30px) pxToRem(52px) pxToRem(40px)
    .checkbox-item
      margin: pxToRem(52px) pxToRem(30px) pxToRem(56px) pxToRem(40px)
    .checkbox-input
      margin: pxToRem(30px) 0px
    .checkbox-input >>> .van-checkbox__label
      line-height pxToRem(37px)
    .checkbox-input >>> .van-checkbox__icon .van-icon
      height pxToRem(37px)
      width pxToRem(37px)
      font-size pxToRem(30px)
    .checkbox-input >>> .van-checkbox__icon
      height pxToRem(37px)
</style>

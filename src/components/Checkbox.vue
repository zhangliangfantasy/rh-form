<template>
  <div class="checkbox">
    <form>
      <div v-for="(item, index) in list" :key="index" class="checkbox-item">
        <label>{{item.label}}：</label>
          <van-checkbox-group v-model="item.value">
            <div v-for="(_item, _index) in item._list" :key="_index" class="checkbox-input">
              <van-checkbox :name="_item.value" shape="square" checked-color="#20B2AA">{{_item.lab}}</van-checkbox>
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
    font-family:PingFang SC;
    font-weight: 400;
    color:rgba(51,51,51,1);
    line-height: pxToRem(27px);
    .checkbox-item
      margin: pxToRem(40px)
      .checkbox-input
        margin: pxToRem(20px) 0px
</style>

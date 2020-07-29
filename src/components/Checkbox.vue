<template>
  <div class="checkbox">
    <form>
      <div v-for="(item, index) in list" :key="index">
        <label>{{item.label}}：</label>
        <van-checkbox-group v-model="result">
          <div v-for="(_item, _index) in item._list" :key="_index">
            <van-checkbox :name="_item.value">{{_item.lab}}</van-checkbox>
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
    return {
      result: []
    }
  },
  computed: {},
  mounted () {},
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '../assets/styles/mixin.styl';
</style>

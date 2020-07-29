<template>
  <div class="options">
    <!--选项-->
    <div>
      <Options :list="optionList"></Options>
    </div>
    <!--多选-->
    <!-- <div class="options-checkbox">
      <div>手术、麻醉风险预警：</div>
      <label>手术医师陈述：</label>
      <van-checkbox-group v-model="result">
        <van-checkbox name="a">预计手术时间</van-checkbox>
        <van-checkbox name="b">预计失血量</van-checkbox>
        <van-checkbox name="c">手术关键点</van-checkbox>
        <van-checkbox name="d">其它</van-checkbox>
      </van-checkbox-group>
    </div> -->
    <Checkbox :list="checkboxList" ref="checkbox"></Checkbox>
    <!--提交bar-->
    <Submit-bar @_submit="submit()"></Submit-bar>
    <!--弹框组件-->
    <Dialog ref="log" :message="message" @_cancel="cancel()" @_confirm="confirm()"></Dialog>
  </div>
</template>

<script>
import Options from '@/components/Options'
import Dialog from '@/components/Dialog'
import SubmitBar from '@/components/SubmitBar'
import Checkbox from '@/components/Checkbox'
export default {
  name: 'Anesthesia',
  components: {
    Options,
    Dialog,
    SubmitBar,
    Checkbox
  },
  data () {
    return {
      optionList: [],
      checkboxList: [],
      result: [],
      message: '提交后，访视不可再修改'
    }
  },
  computed: {},
  mounted () {
    // mark的作用是判断单选框后面是“是/否”还是“有无”
    this.optionList = [
      { mark: '0', label: '患者姓名、性别、年龄正确' },
      { mark: '0', label: '手术方式确认' },
      { mark: '0', label: '手术部位与标识正确' },
      { mark: '0', label: '是否需要相关影像资料' }
    ]
    // 设置value的作用是保存用户选择状态值
    for (let i = 0; i < this.optionList.length; i++) {
      this.$set(this.optionList[i], 'value')
    }
    this.checkboxList = [
      { label: '手术医师陈述', _list: [{lab: '预计手术时间', value: 'a'}, {lab: '预计失血量', value: 'b'}, {lab: '手术关键点', value: 'c'}, {lab: '其它', value: 'd'}] },
      { label: '麻醉医师陈述', _list: [{lab: '麻醉关注点', value: 'a'}, {lab: '其它', value: 'b'}] },
      { label: '手术护士陈述', _list: [{lab: '物品灭菌合格', value: 'a'}, {lab: '仪器设备完好', value: 'b'}, {lab: '术前术中特殊用药情况', value: 'c'}, {lab: '其它', value: 'd'}] }
    ]
    // 设置value的作用是保存用户选择状态值
    for (let i in this.checkboxList) {
      this.$set(this.checkboxList[i], 'value')
    }
  },
  methods: {
    // 提交
    submit () {
      this.$refs.log.openDialog()
      console.log(this.$refs.checkbox.result)
    },
    // 关闭下拉框
    cancel () {
      console.log('取消')
    },
    // 确认提交
    confirm () {
      console.log('确认提交')
    }
  }
}
</script>

<style scoped lang="stylus">
  @import '../assets/styles/mixin.styl'
  .options
    width: 100%
    height 100%
</style>

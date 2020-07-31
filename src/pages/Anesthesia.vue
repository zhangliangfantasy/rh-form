<template>
  <div class="app-content">
    <!--选项-->
    <Options :list="optionList"></Options>
    <!--多选-->
    <Checkbox :list="checkboxList" ref="checkbox"></Checkbox>
    <!--其它输入框-->
    <Field ref="field" :label="label" :textInput="textInput"></Field>
    <!--签名输入框-->
    <div class="app-content-sign">
      <Field ref="fieldSign" :label="lab" :labelWidth="labelWidth" :textInput="textInputBlod"></Field>
    </div>
    <!--将底部页面撑开-->
    <div class="app-content-bottom"></div>
    <!--提交bar-->
    <Submit-bar @_submit="submit()"></Submit-bar>
    <!--弹框组件-->
    <Dialog ref="log" :message="message" @_cancel="cancel()" @_confirm="confirm()"></Dialog>
  </div>
</template>

<script>
import Options from '@/components/Options'
import Checkbox from '@/components/Checkbox'
import Field from '@/components/Field'
import SubmitBar from '@/components/SubmitBar'
import Dialog from '@/components/Dialog'
export default {
  name: 'Anesthesia',
  components: {
    Options,
    Checkbox,
    Field,
    SubmitBar,
    Dialog
  },
  data () {
    return {
      label: '其它', // 其它便签
      optionList: [], // 单选项信息
      result: [], // 多选项选择结果
      checkboxList: [], // 多选项信息
      labelWidth: '9em', // 左侧label宽度
      textInput: 'text-input', // 输入框样式
      lab: '麻醉医师签名', // 手术医师签名框标签
      textInputBlod: 'text-input-blod', // 输入框样式
      message: '提交后，访视不可再修改' // 弹框提示信息
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
  .app-content
    width: 100%
    height 100%
    background rgb(234,238,246)
    .app-content-bottom
      width 100%
      height pxToRem(164px)
    .app-content-sign
      padding pxToRem(23px) 0px 0px 0px
      background:rgba(255,255,255,1)
      margin-top pxToRem(11px)
</style>

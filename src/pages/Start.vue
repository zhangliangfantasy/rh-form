<template>
  <div class="app-content">
    <!--患者信息-->
    <Patient-info></Patient-info>
    <!--手术操作-->
    <div class="app-content-operation clearfix">
      <div v-for="(item, index) in operationList" :key="index" class="operation-item">
        <Field :ref="item.field" :label="item.label" :labelWidth="item.labelWidth" :textInput="textInput"></Field>
      </div>
    </div>
    <!--单选框-->
    <Options :list="optionList"></Options>
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
import PatientInfo from '@/components/PatientInfo'
import Options from '@/components/Options'
import Field from '@/components/Field'
import SubmitBar from '@/components/SubmitBar'
import Dialog from '@/components/Dialog'
export default {
  name: 'Start',
  components: {
    PatientInfo,
    Options,
    Field,
    SubmitBar,
    Dialog
  },
  data () {
    return {
      label: '其它', // 其它便签
      optionList: [], // 单选项信息
      labelWidth: '9em', // 左侧label宽度
      textInput: 'text-input', // 输入框样式
      lab: '手术医师签名', // 手术医师签名框标签
      textInputBlod: 'text-input-blod', // 输入框样式
      message: '提交后，访视不可再修改', // 弹框提示信息
      operationList: [] // 手术操作信息
    }
  },
  computed: {
    // 响应其它输入框的变化
    textOther: function () {
      return this.$refs.field.text
    },
    // 响应签名输入框的变化
    textSign: function () {
      return this.$refs.fieldSign.text
    }
  },
  mounted () {
    // mark的作用是判断单选框后面是“是/否”还是“有/无”
    this.optionList = [
      { mark: '0', label: '患者姓名、性别、年龄正确' },
      { mark: '0', label: '手术方式确认' },
      { mark: '0', label: '手术部位与标识正确' },
      { mark: '0', label: '手术知情同意' },
      { mark: '0', label: '麻醉知情同意' },
      { mark: '0', label: '麻醉方式确认' },
      { mark: '0', label: '麻醉设备安全检查完成' },
      { mark: '0', label: '皮肤是否完整' },
      { mark: '0', label: '术野皮肤准备' },
      { mark: '0', label: '静脉通道建立完成' },
      { mark: '0', label: '患者是否有过敏史' },
      { mark: '0', label: '抗菌药物皮试结果' },
      { mark: '0', label: '术前备血' },
      { mark: '1', label: '假体' },
      { mark: '1', label: '体内植入物' },
      { mark: '1', label: '影像学资料' }
    ]
    // 设置value的作用是保存用户选择状态值
    for (let i = 0; i < this.optionList.length; i++) {
      this.$set(this.optionList[i], 'value')
    }
    this.operationList = [
      { field: 'ref0', label: '麻醉方式', labelWidth: '9em' },
      { field: 'ref1', label: '手术日期', labelWidth: '9em' },
      { field: 'ref2', label: '术者', labelWidth: '9em' },
      { field: 'ref3', label: '拟施手术方式', labelWidth: '9em' },
      { field: 'ref4', label: '实施手术方式', labelWidth: '9em' }
    ]
  },
  methods: {
    // 提交
    submit () {
      // 打开弹框
      this.$refs.log.openDialog()
      // 判断单选框是否所有选项都选上
      let isOption = this.verify(this.optionList)
      if (!isOption || !this.textOther || !this.textSign) {
        this.message = '部分选项未填写完整，提交后，访视不可再修改'
      } else {
        this.message = '提交后，访视不可再修改'
      }
    },
    // 判断单选框是否都选上
    verify (list) {
      let bool = this.optionList.every(item => {
        return item.value
      })
      return bool
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
    padding-top pxToRem(21px)
    background rgb(234,238,246)
    .app-content-operation
      margin-top pxToRem(11px)
      background rgba(255,255,255,1)
      .operation-item
        padding-top pxToRem(32px)
    .app-content-sign
      padding pxToRem(32px) 0px 0px 0px
      background:rgba(255,255,255,1)
      margin-top pxToRem(11px)
    .app-content-bottom
      width 100%
      height pxToRem(164px)
</style>

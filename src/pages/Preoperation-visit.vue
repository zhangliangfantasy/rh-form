<template>
  <div class="app">
    <div class="app-content">
      <!--患者信息-->
      <Patient-info :patientList="patientList"></Patient-info>
      <!--手术操作-->
      <div class="app-content-operation clearfix">
        <div v-for="(item, index) in operationList" :key="index" class="operation-item">
          <Field :ref="item.field" :label="item.label" :labelWidth="item.labelWidth" :textInput="textInput"></Field>
        </div>
      </div>
      <!--急诊科-->
      <div class="app-content-emergency">
        <van-checkbox v-model="emergencyOperation" shape="square" label-position="left" checked-color="#00a98d">急诊手术</van-checkbox>
      </div>
      <!--术前访视-->
      <div class="app-content-visit">
        <Pre-visit></Pre-visit>
      </div>
      <!-- 其它输入框-->
      <div class="app-content-other">
        <Field ref="field" :label="label" :textInput="textInput"></Field>
      </div>
      <!--签名输入框-->
      <div class="app-content-sign">
        <Field ref="fieldSign" :label="lab" :labelWidth="labelWidth" :textInput="textInputBlod"></Field>
      </div>
      <!--将底部页面撑开-->
      <div class="app-content-bottom"></div>
      <!--弹框组件-->
      <Dialog ref="log" :message="message" @_cancel="cancel()" @_confirm="confirm()"></Dialog>
    </div>
    <!--提交bar-->
    <Submit-bar @_submit="submit()"></Submit-bar>
  </div>
</template>

<script>
import PatientInfo from '@/components/PatientInfo'
import Field from '@/components/Field'
import PreVisit from '@/components/PreVisit'
import SubmitBar from '@/components/SubmitBar'
import Dialog from '@/components/Dialog'
export default {
  name: 'PreoperationVisit',
  components: {
    PatientInfo,
    Field,
    PreVisit,
    SubmitBar,
    Dialog
  },
  data () {
    return {
      label: '其它', // 其它便签
      patientList: [], // 患者信息列表
      operationList: [], // 手术操作信息
      emergencyOperation: 1, // 急诊手术
      labelWidth: '9em', // 左侧label宽度
      textInput: 'text-input', // 输入框样式
      lab: '手术医师签名', // 手术医师签名框标签
      textInputBlod: 'text-input-blod', // 输入框样式
      message: '提交后，访视不可再修改' // 弹框提示信息
    }
  },
  computed: {},
  mounted () {
    // 患者信息列表
    this.patientList = [
      {label: '科室', value: '外科'},
      {label: '病区', value: '1病区'},
      {label: '床位号', value: '56床'},
      {label: '病案号', value: '252526'},
      {label: '手术日期', value: '2020-08-02'},
      {label: '麻醉方式', value: '插管全麻'},
      {label: '术前诊断', value: '喷枪囊肿'},
      {label: '拟实施手术', value: '双侧卵巢切除术'}
    ]
    this.operationList = [
      { field: 'ref0', label: '手术体位', labelWidth: '9em' },
      { field: 'ref1', label: '体重 (kg)', labelWidth: '9em' }
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
  .app-content-emergency
    font-size pxToRem(30px)
    line-height pxToRem(34px)
    padding pxToRem(29px) pxToRem(50px) pxToRem(21px) pxToRem(40px)
    margin-bottom pxToRem(10px)
    background:rgba(255,255,255,1)
  .app-content-emergency >>> .van-checkbox__label--left
    margin 0 pxToRem(43px) 0 0
  .app-content-emergency >>> .van-checkbox__label
    line-height pxToRem(34px)
  .app-content-emergency >>> .van-checkbox__icon .van-icon
    height pxToRem(34px)
    width pxToRem(34px)
    font-size pxToRem(28px)
  .app-content-emergency >>> .van-checkbox__icon
    height pxToRem(37px)
  .app-content-visit
    // font-size pxToRem(28px)
    line-height pxToRem(34px)
    padding pxToRem(29px) pxToRem(50px) pxToRem(21px) pxToRem(40px)
    background:rgba(255,255,255,1)
    margin-bottom pxToRem(10px)
  .app-content-other
    padding-top pxToRem(22px)
    background rgba(255,255,255,1)
</style>

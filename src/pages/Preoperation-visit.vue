<template>
  <div class="app-content">
    <!--患者信息-->
    <Patient-info :patientList="patientList"></Patient-info>
    <!--手术操作-->
    <div class="app-content-operation clearfix">
      <div v-for="(item, index) in operationList" :key="index" class="operation-item">
        <Field :ref="item.field" :label="item.label" :labelWidth="item.labelWidth" :textInput="textInput"></Field>
      </div>
    </div>
    <div class="app-content-emergency">
      <van-checkbox v-model="emergencyOperation" shape="square" label-position="left" checked-color="#00a98d">急诊手术</van-checkbox>
    </div>
  </div>
</template>

<script>
import PatientInfo from '@/components/PatientInfo'
import Field from '@/components/Field'
export default {
  name: 'PreoperationVisit',
  components: {
    PatientInfo,
    Field
  },
  data () {
    return {
      patientList: [], // 患者信息列表
      operationList: [], // 手术操作信息
      textInput: 'text-input', // 输入框样式
      emergencyOperation: 1
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
  methods: {}
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
        padding-top pxToRem(22px)
    .app-content-emergency
      font-size pxToRem(30px)
      line-height pxToRem(34px)
      padding pxToRem(29px) pxToRem(50px) 0px pxToRem(40px)
      background:rgba(255,255,255,1)
</style>

<template>
  <div class="patient-info">
    <!-- <div class="patient-info-top ratina-bd bd-b bd-dashed"> -->
    <div class="patient-info-top">
      <label>患者：</label>
      <span class="font-color">{{name}}</span>
      <span class="font-color">{{gender}}</span>
      <span class="font-color">{{age}}</span>
    </div>
    <div class="patient-info-down">
      <div v-for="(item, index) of patientList" :key="index" class="patient-item">
        <label>{{item.label}}：</label>
        <span class="font-color">{{item.value}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PatientIfo',
  props: {
    patientList: Array
  },
  data () {
    return {
      name: '刘敏红',
      gender: '女',
      age: '48',
      deptBedNo: '外科556',
      medicalNo: '12345'
    }
  },
  computed: {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="stylus">
  @import '../assets/styles/mixin.styl'
  .patient-info
    width 100%
    background rgba(255,255,255,1)
    .patient-info-top
      width pxToRem(641px)
      height pxToRem(78px)
      text-align center
      font-size pxToRem(32px)
      color rgba(51,51,51,1)
      line-height pxToRem(78px)
      margin-left pxToRem(40px)
      border-bottom 1px dashed rgba(200,200,200,1)
      span + span
        margin-left: pxToRem(21px);
        &::before
          position relative
          left: pxToRem(-14px);
          content: "|";
          background rgba(255,255,255,1)
    .patient-info-down
      width pxToRem(641px)
      padding pxToRem(22px) 0 pxToRem(13px) pxToRem(40px)
      font-size pxToRem(28px)
      color rgba(51,51,51,1)
      line-height pxToRem(28px)
      .patient-item
        display inline-block
        margin-bottom pxToRem(14px)
        min-width 50%
    .font-color
      color rgba(0,0,0,1)
</style>

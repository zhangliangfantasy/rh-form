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
      <div class="down-left">
        <label>科室-床号：</label>
        <span class="font-color">{{deptBedNo}}</span>
      </div>
      <div class="down-right">
        <label>病案号：</label>
        <span class="font-color">{{medicalNo}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PatientIfo',
  data () {
    return {
      name: '特朗普',
      gender: '女',
      age: '48',
      deptBedNo: '外科556',
      medicalNo: '556'
    }
  },
  computed: {},
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped lang="stylus">
  @import '../assets/styles/mixin.styl'
  .patient-info
    width 100%
    height pxToRem(156px)
    background rgba(255,255,255,1)
    .patient-info-top
      width pxToRem(641px)
      height pxToRem(78px)
      text-align center
      font-family PingFang SC
      font-size pxToRem(32px)
      font-weight 400
      color rgba(51,51,51,1)
      line-height pxToRem(78px)
      margin-left pxToRem(40px)
      border-bottom 1px dashed rgba(200,200,200,1)
      span + span
        margin-left: pxToRem(21px);
        &::before
          position relative
          left: pxToRem(-11px);
          content: "|";
          background rgba(255,255,255,1)
    .patient-info-down
      width pxToRem(641px)
      height pxToRem(78px)
      margin-left pxToRem(40px)
      font-family PingFang SC
      font-size pxToRem(32px)
      font-weight 400
      color rgba(51,51,51,1)
      line-height pxToRem(78px)
      .down-left
        width 60%
        height 100%
        display inline-block
      .down-right
        height 100%
        display inline-block
    .font-color
      color rgba(0,0,0,1)
</style>

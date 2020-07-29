<template>
  <div class="options">
    <!--单选框-->
    <Options :list="optionList"></Options>
    <!--输入框-->
    <div class="text">
      <van-field label-class="text-input" v-model="txt" rows="1" label="其它" type="textarea" autosize placeholder="请输入" :colon="true" input-align="right" />
      <div style="height: 100px; width: 100%"></div>
    </div>
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
export default {
  name: 'Start',
  components: {
    Options,
    Dialog,
    SubmitBar
  },
  data () {
    return {
      optionList: [],
      txt: '',
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
  },
  methods: {
    // 提交
    submit () {
      this.$refs.log.openDialog()
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
    height 150%
    .text
      margin pxToRem(40px)
      margin-right pxToRem(50px)
    .text >>> .van-cell
      padding 0px
      line-height pxToRem(50px)
      font-size pxToRem(30px)
      font-weight 400;
    .text >>> .text-input
      font-family PingFang SC
      font-size pxToRem(30px)
      font-weight 400;
      line-height pxToRem(50px)
      color rgba(51,51,51,1)
      vertical-align center
</style>

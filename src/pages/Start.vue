<template>
  <div class="options">
    <div class="options-list">
      <options :list="optionList"></options>
    </div>
    <div class="options-footer">
      <van-button round type="info" block class="options-footer-button" @click="submit()">提交</van-button>
    </div>
    <van-dialog v-model="show"  show-cancel-button>
      fantasy
    </van-dialog>
  </div>
</template>

<script>
import Options from '@/components/Options'
export default {
  name: 'Start',
  components: {
    Options
  },
  data () {
    return {
      optionList: [],
      show: false
    }
  },
  computed: {},
  mounted () {
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
    for (let i = 0; i < this.optionList.length; i++) {
      this.$set(this.optionList[i], 'value')
    }
  },
  methods: {
    submit () {
      console.log(this.optionList)
      this.show = true
    //   this.$dialog.confirm({
    //     title: 'fantasy',
    //     message: 'zhangliang',
    //   }).then(() => {
    //     console.log('fantasy')
    //   }).catch(() => {
    //     console.log('取消')
    //   })
    }
  }
}
</script>

<style scoped lang="stylus">
  @import '../assets/styles/mixin.styl'
  .options >>> .van-dialog
    border-radius: 0
    width pxToRem(552px)
    height pxToRem(359)
  .options
    width: 100%
    height 100%
  .options-list
    background rgba(255,255,255,1)
  .options-footer
    width 100%
    height pxToRem(98px)
    position fixed
    bottom pxToRem(0px)
    background rgba(255,255,255,1)
    box-shadow 0px -1px pxToRem(18px) 0px rgba(117,132,137,0.53);
    display flex
    justify-content center
    align-items center
    .options-footer-button
      font-size pxToRem(32px)
      font-family PingFang SC;
      font-weight 500
      background rgba(28,101,115,1);
      width pxToRem(320px)
      height pxToRem(72px)
</style>

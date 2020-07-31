<template>
  <div class="dialog">
    <van-dialog v-model="show" :show-confirm-button="false">
      <div class="options-dialog">
        <div class="dialog-header">
          <img
            src="../../src/assets/image/close.png"
            class="close-img"
            alt="关闭"
            @click="closeDialog()"
          />
        </div>
        <div class="dialog-content">
          <img src="../../src/assets/image/toast.png" class="toast-img" alt="提示" />
          <div class="content-tip">是否确认提交？</div>
          <div class="tip-text">{{message}}</div>
        </div>
        <div class="dialog-footer">
          <van-button
            round
            type="info"
            class="dialog-button-cancel common"
            @click="closeDialog()"
          >取消</van-button>
          <van-button round type="info" class="dialog-button-confirm common" @click="confirm()">确认</van-button>
        </div>
      </div>
    </van-dialog>
  </div>
</template>

<script>
export default {
  name: 'Dialog',
  props: {
    message: String
  },
  data () {
    return {
      show: false
    }
  },
  computed: {},
  mounted () {},
  methods: {
    openDialog () {
      this.show = true
    },
    closeDialog () {
      this.$emit('_cancel')
      this.show = false
    },
    confirm () {
      this.$emit('_confirm')
    }
  }
}
</script>

<style scoped lang="stylus">
  @import '../assets/styles/mixin.styl'
  .dialog >>> .van-dialog
    border-radius: 0
    width pxToRem(552px)
    height pxToRem(359px)
  .options-dialog
    width pxToRem(552px)
    height pxToRem(359px)
    .dialog-header
      position relative
      height pxToRem(76px)
      width 100%
      .close-img
        position absolute
        top pxToRem(30px)
        left pxToRem(500px)
        width pxToRem(22.5px)
        height pxToRem(22.5px)
    .dialog-content
      width 100%
      height pxToRem(200px)
      position relative
      .toast-img
        position absolute
        top 0px
        left pxToRem(48px)
        width pxToRem(41.5px)
        height pxToRem(41.5px)
      .content-tip
        position absolute
        top pxToRem(5px)
        left pxToRem(109px)
        font-family PingFang SC
        font-size pxToRem(30px)
        font-weight 500
        color rgba(51,51,51,1)
      .tip-text
        position absolute
        top pxToRem(51px)
        left pxToRem(109px)
        width pxToRem(400px)
        font-size pxToRem(28px)
        line-height pxToRem(40px)
        font-weight 400
        color rgba(51,51,51,1)
    .dialog-footer
      width 100%
      height pxToRem(111px)
      position relative
      .common
        width pxToRem(160px)
        font-family PingFang SC
        font-weight 500
        font-size pxToRem(30px)
        line-height pxToRem(28px)
      .dialog-button-cancel
        position absolute
        top 0px
        left pxToRem(106px)
        height pxToRem(56px)
        background rgba(255,255,255,1)
        border pxToRem(2px) solid rgba(124,129,136,1);
        color rgba(102,102,102,1)
      .dialog-button-confirm
        position absolute
        top 0px
        left pxToRem(286px)
        height pxToRem(60px)
        background rgba(28,101,115,1)
        color rgba(255,255,255,1)
</style>

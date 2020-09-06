<template>
  <div class="post-operation">
    <div class="post-operation-label">术后访视</div>
    <div class="post-operation-content">
      <label>1、</label>
      <label>术后第</label>
      <div class="post-operation-input border-bottom">
        <van-field v-model="text" input-align="center" />
      </div>
      <label>日</label>
    </div>
    <div class="post-operation-content-two">
      <label>2、</label>
      <div class="two-content">
        对手术室护理工作您是否感到安全、舒适、周到
        <div class="two-content-radio">
          <van-radio-group v-model="radio" direction="horizontal" checked-color="#00a98d">
            <van-radio name="1" shape="square">是</van-radio>
            <van-radio name="2" shape="square">否</van-radio>
          </van-radio-group>
        </div>
      </div>
    </div>
    <div class="post-operation-content-last">
      <label>3、</label>
      <div class="last-content">
        <label>您对手术室护理工作的意见和建议：</label>
        <div class="last-textarea">
          <van-field
            v-model="advise"
            rows="3"
            autosize
            type="textarea"
            placeholder="请输入"
            show-word-limit
            maxlength="50"
          ></van-field>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostVisit',
  data () {
    return {
      text: '',
      radio: '',
      advise: ''
    }
  },
  computed: {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="stylus">
@import '../assets/styles/mixin.styl';

.post-operation-label {
  width: 100%;
  height: pxToRem(60px);
  line-height: pxToRem(60px);
}

.post-operation-content {
  width: 100%;
  height: pxToRem(60px);
  line-height: pxToRem(60px);
  display: flex;
  align-items: center;
}

.post-operation-input {
  width: 15%;
  height: pxToRem(42px);
  padding: pxToRem(5px);
  border-bottom: 1px solid #D8D8D8;
}

.post-operation-input >>> .van-cell {
  padding: 0;
  font-size: pxToRem(30px);
  line-height: pxToRem(40px);
}

.post-operation-content-two {
  width: 100%;
  height: pxToRem(120px);
  line-height: pxToRem(60px);
  display: flex;

  .two-content {
    .two-content-radio {
      display: inline-block;
      height: pxToRem(40px);
      margin-left: pxToRem(43px);
      vertical-align: middle;
    }

    .two-content-radio >>> .van-radio__label {
      line-height: pxToRem(34px);
    }

    .two-content-radio >>> .van-radio__icon .van-icon {
      height: pxToRem(34px);
      width: pxToRem(34px);
      font-size: pxToRem(30px);
    }

    .two-content-radio >>> .van-radio__icon {
      height: pxToRem(34px);
    }

    .two-content-radio >>> .van-radio--horizontal {
      margin-right: pxToRem(50px);
    }
  }
}

.post-operation-content-last {
  width: 100%;
  font-size: pxToRem(30px);
  line-height: pxToRem(60px);
  display: flex;

  .last-content {
    width: pxToRem(600px);

    .last-textarea {
      overflow: hidden;
      border: 1px solid rgba(216, 216, 216, 1);
      border-radius: pxToRem(10px);
    }

    .last-textarea >>> .van-cell {
      font-size: pxToRem(28px);
      height: pxToRem(210px);
      line-height: pxToRem(50px);
      padding: pxToRem(10px) pxToRem(16px);
    }

    .last-textarea >>> .van-field__control {
      height: pxToRem(150px) !important;
    }

    .last-textarea >>> .van-field__word-limit {
      font-size: pxToRem(26px);
      line-height: pxToRem(40px);
      margin-top: 0;
    }
  }
}
</style>

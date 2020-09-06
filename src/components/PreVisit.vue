<template>
  <div class="pre-operation">
    <div class="pret-operation-label">术前访视</div>
    <div class="item-one">
      <label>1、</label>
      <div>
        <label class="one-label">查阅病历：</label>
        <div class=item-one-content>
          <div v-for="(item, index) of caseList" :key="index" class="item">
            <template v-if="item.type === '1'">
              <label class=item-label>{{item.label}}</label>
              <div class="item-one-input">
                <van-field v-model="text" input-align="center" />
              </div>
              <label>{{item.unit}}</label>
            </template>
          </div>
        </div>
        <div class="item-one-content">
          <div v-for="(item, index) of caseList" :key="index" class="item">
             <template v-if="item.type === '2'">
                <label class=item-label>{{item.label}}</label>
                <div class="item-one-input">
                  <van-field v-model="text" input-align="center" />
                </div>
             </template>
          </div>
        </div>
        <label class="one-label">乙肝五项：</label>
        <div class="item-one-content">
          <div v-for="(item, index) of caseList" :key="index" class="item">
            <template v-if="item.type === '3'">
              <label class=item-label>{{item.label}}</label>
              <div class="item-one-input">
                <van-field v-model="text" input-align="center" />
              </div>
            </template>
          </div>
        </div>
        <div class="item-one-content-radio">
          <label class="radio-label">肝功：</label>
          <van-radio-group v-model="radio" direction="horizontal" checked-color="#00a98d">
            <van-radio name="1" shape="square">是</van-radio>
            <van-radio name="2" shape="square">否</van-radio>
          </van-radio-group>
        </div>
        <label class="one-label">其它：</label>
        <div class="item-one-content">
          <div v-for="(item, index) of caseList" :key="index" class="item">
            <template v-if="item.type === '5'">
              <label class=item-label>{{item.label}}</label>
              <div class="item-one-input">
                <van-field v-model="text" input-align="center" />
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
    <div v-for="(item, index) of visitList" :key="index" class="visit-info">
      <label>{{item.num}}</label>
      <p>{{item.label}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PreVisit',
  data () {
    return {
      text: '',
      radio: '',
      caseList: [],
      visitList: []
    }
  },
  computed: {},
  mounted () {
    this.caseList = [
      { type: '1', label: 'T：', unit: '℃' },
      { type: '1', label: 'P：', unit: '次/分' },
      { type: '1', label: 'R：', unit: '次/分' },
      { type: '1', label: 'BP：', unit: 'mmHg' },
      { type: '2', label: '血型：' },
      { type: '2', label: '过敏史：' },
      { type: '3', label: 'HBsAg：' },
      { type: '3', label: 'HBsAb：' },
      { type: '3', label: 'HBeAg：' },
      { type: '3', label: 'HBeAb：' },
      { type: '3', label: 'HBcAb：' },
      { type: '4', label: '肝功：' },
      { type: '5', label: '丙肝抗体：' },
      { type: '5', label: '艾滋病抗体：' },
      { type: '5', label: '梅毒抗体：' }
    ]
    this.visitList = [
      { num: '2、', label: '术前一日洗澡更衣、理发，注意保暖，保证充足睡眠，预防感冒，根据手术要求禁食禁水，禁烟酒。' },
      { num: '3、', label: '术前晨洗脸刷牙，但是不能饮水、摘掉活动假牙、手表、发卡、隐形眼镜。' },
      { num: '4、', label: '禁止化妆、涂口红，以免病情变化时影响观察。' },
      { num: '5、', label: '如你有起搏器，请告之手术护士。' },
      { num: '6、', label: '术前晨起排空大小便，穿病服，脱去袜子等，卧床静等，手术室护士到床旁接你。' },
      { num: '7、', label: '请告之手术护士：您是否做到了禁食，已打术前针，对药物及消毒液无过敏史，是否发烧或来月经。' },
      { num: '8、', label: '手术室护士为您进行的技术操作有：静脉输液，安置麻醉体位，手术体位等。' },
      { num: '9、', label: '手术间内各种手术仪器、监护会发出声响，请不要慌张。' },
      { num: '10、', label: '您在麻醉过程中如出现头晕、心慌、恶心、口周麻木等不适，或有和需求请立即告诉医生、护士。' }
    ]
  },
  methods: {}
}
</script>

<style scoped lang="stylus">
  @import '../assets/styles/mixin.styl'
  .post-operation-label
    width 100%
    height pxToRem(60px)
    font-size pxToRem(30px)
    line-height pxToRem(60px)
  .item-one
    width 100%
    min-height pxToRem(60px)
    font-size pxToRem(24px)
    line-height pxToRem(60px)
    display flex
    .one-label
      font-size pxToRem(28px)
    .item-one-content
      width 100%
      line-height pxToRem(60px)
      font-size pxToRem(24px)
      display flex
      justify-content space-between
      align-items center
      flex-wrap wrap
      .item
        width 50%
        line-height pxToRem(60px)
        display flex
        align-items center
        .item-label
          // margin-left pxToRem(30px)
        .item-one-input
          width 32%
          height pxToRem(42px)
          padding pxToRem(5px)
          border-bottom 1px solid #D8D8D8
        .item-one-input >>> .van-cell
          padding 0
          font-size pxToRem(30px)
          line-height pxToRem(40px)
    .item-one-content-radio
      width 100%
      line-height pxToRem(60px)
      display flex
      align-items center
      flex-wrap wrap
      .radio-label
        margin-right pxToRem(43px)
    .item-one-content-radio >>> .van-radio__label
      line-height pxToRem(60px)
    .item-one-content-radio >>> .van-radio__icon .van-icon
      height pxToRem(30px)
      width pxToRem(30px)
      font-size pxToRem(26px)
    .item-one-content-radio >>> .van-radio__icon
      height pxToRem(30px)
    .item-one-content-radio >>> .van-radio--horizontal
      margin-right pxToRem(50px)
  .visit-info
    font-size pxToRem(28px)
    line-height pxToRem(60px)
    display flex
</style>

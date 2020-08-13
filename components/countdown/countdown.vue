<template>
  <view class="qui-countdown">
    <view class="qui-countdown-item" v-for="(item, index) in date" :key="index">
      <text class="qui-countdown-time">{{item.value}}</text>{{item.name}}
    </view>
  </view>
</template>

<script>
  const COMPONENT_NAME = 'q-countdown'
  const EVENT_INPUT = 'input'
  export default {
    name: COMPONENT_NAME,
    props: {
      time: {
        type: [String, Date, Number],
        default: new Date().getTime() + 86400000
      },
      status: {
        type: Boolean,
        default: true
      },
      timeType: {
        type: String,
        default: 'datetime'
      },
      format: {
        type: String,
        default: '{%d}天{%h}时{%m}分{%s}秒'
      },
      isZeroPadd: {
        type: Boolean,
        default: true,
      },
      countdownType: {
        type: String,
        default: "normal"
      }
    },
    watch: {
      time(newVal, oldVal) {
        if (newVal && !oldVal) {
          this.getLatestTime();
        }
      },
      status(newVal) {
        if (newVal) {
          this.init();
        } else if (!newVal) {
          clearInterval(this.timer);
        }
      }
    },
    data() {
      return {
        initAddTime: 0,
        timer: null,
        date: [],
        downTime: this.time
      }
    },
    methods: {
      // 自动补零
      zeroPadding(num) {
        num = num.toString()
        return num[1] ? num : '0' + num
      },

      init() {
        clearInterval(this.timer);
        const timer = setTimeout(() => {
          this.getLatestTime.call(this);
        }, 1000);
        this.timer = timer
      },

      getLatestTime() {
        let time = this.time
        let status = this.status
        let timeType = this.timeType
        let initAddTime = this.initAddTime
        let countdownType = this.countdownType
        // IOS不支持2019-04-23 的日期格式
        let countDownTime = timeType === 'second' ? --this.downTime : time
        this.$emit(EVENT_INPUT, countDownTime)
        if (countdownType === "normal") {  //当countdownType === normal时，不影响之前的代码
          if (timeType !== 'second') {
            countDownTime = typeof time === 'string' ? countDownTime.replace(/-/g, '/') : countDownTime;
            countDownTime = Math.ceil((new Date(countDownTime).getTime() - new Date().getTime()) / 1000);
          }

          if (countDownTime < 0 && timeType !== 'second') {
            this._getTimeValue(0);
            this.CountdownEnd();
            return
          }

          if (countDownTime - initAddTime > 0) {
            this.getLatestForCountDown(countDownTime);
          }
          else if (countDownTime - initAddTime < 0) {
            this.getLatestForAddTime(countDownTime);
          }
          else if (countDownTime - initAddTime === 0) {
            if (initAddTime <= 0) {
              this._getTimeValue(countDownTime);
            }
            this.CountdownEnd();
            if(timeType === 'second'){
                this.downTime = this.time
            }
          }

          if (status && countDownTime - initAddTime !== 0) {
            this.init.call(this);
          }

        }
        else if (countdownType === "anniversary") { //  当countdownType === anniversary时，为纪念日模式
          if (timeType === "second") {    //  纪念日模式不能设置timeType === second
            //console.error(`countdownType为${countdownType}类型时，不可设置timeType值为second`)
          } else {
            countDownTime = typeof time === 'string' ? countDownTime.replace(/-/g, '/') : countDownTime;
            countDownTime = Math.ceil((new Date().getTime() - new Date(countDownTime).getTime()) / 1000);
            if (countDownTime >= 0) {   //  countDownTime计算结果不能为负数
              // this.getLatestForCountDown(countDownTime);
              this.init.call(this)
            } else {
              //console.error("time传值错误")
            }
          }
        } else {
          //  countdownType 不能设置为 normal，anniversary 以外的值
          // console.error("错误的countdownType类型")
        }
      },

      getLatestForAddTime(countDownTime) {
        let initAddTime = this.initAddTime
        if (initAddTime !== Math.abs(countDownTime)) {
          initAddTime++
          this._getTimeValue(initAddTime)
          this.initAddTime = initAddTime
        }
      },

      getLatestForCountDown(countDownTime) {
        this._getTimeValue(countDownTime)
      },

      _getTimeValue(countDownTime) {
        const format = this.format;
        const date = [];
        const fomatArray = format.split(/(\{.*?\})/);
        const formatType = [{
          key: '{%d}',
          type: 'day',
          count: 86400
        }, {
          key: '{%h}',
          type: 'hour',
          count: 3600
        }, {
          key: '{%m}',
          type: 'minute',
          count: 60
        }, {
          key: '{%s}',
          type: 'second',
          count: 1,
        }];
        let diffSecond = countDownTime;
        formatType.forEach(format => {
          const index = this._findTimeName(fomatArray, format.key)
          if (index === -1) return;
          const name = fomatArray[index];
          const formatItem = {
            type: format.type,
            name,
            value: parseInt(diffSecond / format.count)
          };
          if (this.isZeroPadd) {
            formatItem.value = this.zeroPadding(formatItem.value);
          }
          diffSecond %= format.count;
          date.push(formatItem);
        });
        this.date = date
        return date;
      },

      _findTimeName(fomatArray, str) {
        const index = fomatArray.indexOf(str);
        if (index === -1) return -1;
        return index + 1
      },
      CountdownEnd() {
        this.$emit("linend");
      }
    },
    mounted() {
      this.getLatestTime();
    },

  }
</script>
<style lang="scss">
	.qui-countdown {
	  font-size: 28rpx;
	}
	
	.qui-countdown-item {
	  display: inline-block;
	  color: inherit;
	  line-height: 1em;
	}
	
	.qui-countdown-time {
	  display: inline-flex;
	  background: #45526b;
	  border-radius: 4rpx;
	  color: #fff;
	  align-items: center;
	  justify-content: center;
	  margin: 0 10rpx;
	  padding: 2px 2px;
	}
</style>
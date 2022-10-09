<template>
  <div class="dashboard-container">
    <div class="dashboard-text">
      <div class="box">
        <div class="month_box">
          <div v-for="index in 12" :key="index" class="item">{{ index }}月</div>
        </div>
        <div class="step">
          <div v-for="(item,index) in milStep" :key="index" class="item" :style="item.styleAuto" />
        </div>
      </div>
      <div class="list">
        <div v-for="(item,index) in 13" :key="index" :style="{top:`${calcTop(index)}px`,left:`${index * 150}px`}" class="item" />
        <div v-for="(item,index) in 13" :key="index" :style="{top:`${calcTop(index)}px`,left:`${13*150+index * 150}px`}" class="item" />
        <div v-for="(item,index) in 13" :key="index" :style="{top:`${calcTop(index)}px`,left:`${26*150+index * 150}px`}" class="item" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import dayjs from 'dayjs'
import dayOfYear from 'dayjs/plugin/dayOfYear'
import 'dayjs/locale/zh-cn'
dayjs.extend(dayOfYear)
dayjs.locale('zh-cn')

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters(['name'])
  },
  data() {
    return {
      milStep: null
    }
  },
  mounted() {
    this.generateStep()
  },
  methods: {
    generateStep() {
      const milStep = [
        {
          startTime: '2021-02-02',
          endTime: '2021-02-27',
          type: '#a0c88a'
        },
        {
          startTime: '2021-03-02',
          endTime: '2021-04-27',
          type: '#ffa76d'
        },
        {
          startTime: '2021-05-02',
          endTime: '2021-07-27',
          type: '#77a0ef'
        },
        {
          startTime: '2021-09-02',
          endTime: '2021-12-27',
          type: '#a5a5a5'
        }
      ]
      milStep.map((item, index) => {
        const left = dayjs(item.startTime).dayOfYear() / 365 * 100
        const width = (dayjs(item.endTime).dayOfYear() - dayjs(item.startTime).dayOfYear()) / 365 * 100
        const styleAuto = {
          left: `${left}%`,
          width: `${width}%`,
          background: `${item.type}`

        }
        item.styleAuto = styleAuto
      })
      this.milStep = milStep
    },
    calcTop(index) {
      const topList = [76, 6, 28, 95, 181, 221, 194, 128, 75, 15, 15, 95, 152]
      return topList[index]
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  width: 100%;
  height: 400px;
  background: #999;
  margin-top: 30px;
  position: relative;
  display: flex;
  justify-content: space-between;
  overflow: auto;
  .item {
    width: 5.3%;
    height: 25%;
    background: red;
    border-radius: 50%;
    position: absolute;
  }
}
.box {
  width: 100%;
}
.step {
  border: #333 solid 1px;
  width: 100%;
  height: 50px;
  position: relative;
  .item {
    position: absolute;
    top: 0;
    background: purple;
    height: 48px;
  }
}
.month_box {
  display: flex;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  background: #eee;

  .item {
    width: 100%;
    color: #000;
    font-size: 12px;
    line-height: 50px;
    text-align: center;
    border: #333 solid 1px;
  }
}
.dashboard-text {
  width: 100%;
  height: 100%;
  padding-top: 100px;
  color: #000;
}
.dashboard {
  position: relative;
  &-container {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    color: #fff;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>

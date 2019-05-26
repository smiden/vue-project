<template>
 <div>
    <div id="wrapper">
      <div class="decor">
        <div class="form-left-decoration"></div>
        <div class="form-right-decoration"></div>
        <div class="circle"></div>
        <div class="form-inner">
          <h3>Форма подсчета накоплений депозита</h3>
          <input type="number" min="0" v-model.trim.lazy="startSumm" placeholder="Уже накопленo">
          <input type="number" min="0" v-model.trim="payt" placeholder="Откладывать каждый месяц">
          <input type="number"  min="0" v-model.trim="proc" placeholder="Процент вклада в год">
          <input type="number" min="0" v-model.trim="finish" placeholder="Хочу накопить">
          <div class="deposit_result">Накопится через: {{ depositCals.time }} года<br> Накопленная сумма:  {{ depositCals.summa }} руб. </div>
        </div>
      </div>
    </div>
 </div>
</template>

<script>
import {store} from './../../store/state.js'

export default {
  data () {
    return {
      startSumm: '',
      payt: '',
      proc: '',
      finish: ''
    }
  },
  methods: {
    validateForm () {
      return this.payt !== '' && this.proc !== '' && this.finish !== ''
    }
  },
  computed: {
    theme () {
      return store.getters['themePage/theme']
    },
    activeTheme () {
      return store.getters['themePage/activeTheme']
    },
    lang () {
      return store.getters['lang/lang']
    },
    percentDep () {
      return Math.floor(((Number(this.proc) / 100) / 12) * 10000) / 10000
    },
    depositCals: function () {
      let summa = Number(this.startSumm)
      let month = 0

      if (this.validateForm() && Number(this.payt) < Number(this.finish) && (Number(this.payt) + Number(this.startSumm)) < Number(this.finish)) {
        for (let i = 0; ; i++) {
          if (summa >= Number(this.finish)) {
            return {
              time: ~~(month / 12) + '.' + (month % 12),
              summa: (Math.floor(summa * 100)) / 100
            }
          } else {
            summa += Number(this.payt)
            summa += (Math.ceil(summa * this.percentDep) * 100) / 100
            month++
          }
        }
      }
      return {
        time: 0,
        summaDep: 0
      }
    }
  },
  watch: {
  }
}
</script>

<style  scoped lang="scss">
#wrapper {
  margin: 0vh 3vw;
  padding: 1vh 1vw;
  display: flex;
  justify-content: space-between;
  z-index: 1;
}
.deposit_result {
  font-size: 2vh;
}
.decor {
  position: relative;
  width: 80vw;
  margin: 50px auto 0;
  border-radius: 30px;
  background: white;
}
.form-left-decoration,
.form-right-decoration {
  content: "";
  position: absolute;
  width: 50px;
  height: 20px;
  background: #f69a73;
  border-radius: 20px;
}
.form-left-decoration {
  bottom: 60px;
  left: -30px;
}
.form-right-decoration {
  top: 60px;
  right: -30px;
}
.form-left-decoration:before,
.form-left-decoration:after,
.form-right-decoration:before,
.form-right-decoration:after {
  content: "";
  position: absolute;
  width: 50px;
  height: 20px;
  border-radius: 30px;
  background: white;
}
.form-left-decoration:before {top: -20px;}
.form-left-decoration:after {
  top: 20px;
  left: 10px;
}
.form-right-decoration:before {
  top: -20px;
  right: 0;
}
.form-right-decoration:after {
  top: 20px;
  right: 10px;
}
.circle {
  position: absolute;
  bottom: 80px;
  left: -55px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
}
.form-inner {padding: 50px;}
.form-inner input, {
  display: block;
  width: 100%;
  padding: 0 20px;
  margin-bottom: 10px;
  background: #E9EFF6;
  line-height: 40px;
  border-width: 0;
  border-radius: 20px;
  font-family: 'Roboto', sans-serif;
}
.form-inner h3 {
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 3vh;
  text-align: center;
  margin-bottom: 1vh;
}
</style>

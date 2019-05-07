<template>
 <div>
      <h2>Подсчет времени для накопления</h2><br>
    <div id="wrapper" :style="{'border': '.3vh solid' + theme[activeTheme].fontColor, 'color': theme[activeTheme].fontColor}">
      <div class="deposit">
        <input type="number" min="0" v-model.trim="startSumm"> Уже накоплено <br><br>
        <input type="number" min="0" v-model.trim="payt"> Откладывать каждый месяц <br><br>
        <input type="number" min="0" v-model.trim="proc"> Процент вклада в год<br><br>
        <input type="number" min="0" v-model.trim="finish">Хочу накопить <br><br>
      </div>
      <div class="deposit_result">Накопится через: {{ depositCals.time }} года<br> Накопленная сумма:  {{ depositCals.summa }} руб. </div>
    </div>
 </div>
</template>

<script>
import {store} from './../../store/state.js'

export default {
  data () {
    return {
      startSumm: 0,
      payt: '',
      proc: '',
      finish: ''
    }
  },
  methods: {
    validateForm () {
      return this.payt !== '' && this.proc !== '' && this.finish !== '' && this.startSumm !== ''
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
    depositCals () {
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
    startSumm: function () {
      if (this.startSumm === '') {
        this.startSumm = 0
      }
    }
  }
}
</script>

<style scoped>
#wrapper {
  margin: 3vh 3vw;
  padding: 1vh 1vw;
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
}
.deposit_result {
  font-size: 5vh;
}
</style>

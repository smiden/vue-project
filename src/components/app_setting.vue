<template>
  <div id="app">
      <h1 :style="{'color': theme[activeTheme].fontColor}"> Настройки</h1>

    <div id="wrapper">
      <div class="settingTheme" :style="{'border': '.3vh solid' + theme[activeTheme].fontColor}">
        <h2 :style="{'color': theme[activeTheme].fontColor}">Выбрать тему: </h2>
        <template v-for="(elem, index) in theme"
        >
          <input type="radio"
                 :key="index"
                 :value="index"
                 v-model="arrSelectTheme">
          <label :style="{'color': theme[activeTheme].fontColor}"
                 :for="elem.name"
                 :key="elem.name"
          >
            {{ elem.name}}
          </label>
            <br :key="elem.name + index">
        </template>
      </div>
    </div>

  </div>
</template>

<script>
import {store} from './../store/state.js'

export default {
  data () {
    return {
      arrSelectTheme: ''
    }
  },
  mounted () {
  },
  methods: {
    xxx (activeTheme) {
      this.arrSelectTheme = activeTheme
    }
  },
  computed: {
    theme () {
      this.xxx(store.getters['themePage/activeTheme'])
      return store.getters['themePage/theme']
    },
    activeTheme () {
      return store.getters['themePage/activeTheme']
    },
    lang () {
      return store.getters['lang/lang']
    }
  },
  watch: {
    arrSelectTheme () {
      store.commit('themePage/selectTheme', this.arrSelectTheme)
    }
  }
}
</script>

<style scoped>
#wrapper {
  display: flex;
  width: 95vw;
  margin: 3vh auto 0 auto;
}
.settingTheme {
  border: 1px solid red;
  padding: 1vh 1vw;
}
label {
   font-size: 3vh;
 }
</style>

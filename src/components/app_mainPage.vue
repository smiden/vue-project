<template>
    <div id="app" :style="{'color': theme[activeTheme].fontColor}">
      <h1>Демо проект</h1><br>
      <p>Использую следующие технологии: HTML-5, CSS-3, Javascript ES-6. Так же использую vue.js.</p>
      <p>Подробней: <br>
      vue.js: vue cli, vuex, vur-router, axios, приправленный flux-архитектурой <br>
      Сборка webpack <br>
      </p>
      <p>Добавлена логика: <br>
      - Логика: подсчет накоплений.<br>
      - Настройки: Изменение темы
    </p>
    </div>
</template>

<script>
import {store} from './../store/state.js'

export default {
  computed: {
    theme () {
      return store.getters['themePage/theme']
    },
    activeTheme () {
      return store.getters['themePage/activeTheme']
    },
    lang () {
      return store.getters['lang/lang']
    }
  }
}
</script>

<style scoped>
 #app {
   text-align: center;
 }
  li {
    list-style-type: disc;
  }
</style>

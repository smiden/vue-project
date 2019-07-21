<template>
  <div id="app">
    <h1 :style="{'color': theme[activeTheme].fontColor}">Страница не доступна</h1>
    <span :style="{'color': theme[activeTheme].fontColor}">
      перейти на
      <a href="#/main">главную</a>
    </span>
  </div>
</template>

<script>
import { store } from "./../store/state.js";

export default {
  computed: {
    theme() {
      return store.getters["themePage/theme"];
    },
    activeTheme() {
      return store.getters["themePage/activeTheme"];
    },
    lang() {
      return store.getters["lang/lang"];
    }
  }
};
</script>

<style scoped>
a {
  color: red;
}
</style>

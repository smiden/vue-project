<template>
  <div id="app">
    <h1 :style="{'color': theme[1].fontColor}">Настройки</h1>

    <div id="wrapper">
      <h2 :style="{'color': theme[1].fontColor}">Изменить цвета SPA:</h2>
      <br />
      <div class="settingTheme" :style="{'border': '.3vh solid' + theme[1].fontColor}">
        <b-form>
          <b-form-group
            label="Фон и границы:"
            label-for="input-1"
            :style="{'color': theme[1].fontColor}"
          >
            <b-form-input
              :value="theme[1].background"
              type="color"
              placeholder="Enter email"
              @input="backgroundPage"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="Цвет шрифта:"
            label-for="input-1"
            :style="{'color': theme[1].fontColor}"
          >
            <b-form-input
              :value="theme[1].fontColor"
              type="color"
              placeholder="Enter email"
              @input="fontColorPage"
            ></b-form-input>
          </b-form-group>

          <button
            :style="{'background': theme[0].background, 'color': theme[0].fontColor}"
            style="padding: 10px"
            @click="clearResizeTheme"
          >Сброс</button>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "./../store/state.js";

export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    backgroundPage() {
      store.commit("themePage/setBackgroundPage", event.target.value);
    },
    fontColorPage() {
      store.commit("themePage/setFontColorPage", event.target.value);
    },
    clearResizeTheme() {
      store.commit("themePage/returnValueTheme");
    }
  },
  computed: {
    theme() {
      return store.getters["themePage/theme"];
    },
    lang() {
      return store.getters["lang/lang"];
    }
  },
  watch: {
    arrSelectTheme() {
      store.commit("themePage/selectTheme", this.arrSelectTheme);
    }
  }
};
</script>

<style scoped>
#wrapper {
  display: flex;
  width: 90vw;
  margin: 3vh auto 0 auto;
}
h2 {
  width: 40vw;
}
.settingTheme {
  border: 1px solid red;
  width: 170px;
  padding: 1vh 1vw;
  display: flex;
}
label {
  font-size: 3vh;
}
</style>

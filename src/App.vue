<template>
  <div id="app">
      <div id="header" :style="{'background': theme[activeTheme].background, 'border-bottom': '.3vh solid' + theme[activeTheme].fontColor}">
          <div class="logo">
            <a href="#/main"
               :style="{'color': theme[activeTheme].fontColor}"
            >{{ lang.header.logo }}
             </a>
          </div>
          <div class="menuTop">
            <ul :style="{'color': theme[activeTheme].fontColor}">
              <router-link v-for="(item, i) in lang.menu"
                           tag="li"
                           :key="item + i"
                           :to="item.url"
                           active-class="selectMenu"
                           style="position: relative"
              >
                <div>
                    <b-nav-item  href="#">
                      <a  :style="{'color': theme[activeTheme].fontColor}"> {{ item.name }}</a>
                    </b-nav-item>
                </div>
              </router-link>
            </ul>
          </div>
        <div id="content"
             :style="{'background': theme[activeTheme].background}"
        >
            <router-view></router-view>
        </div>
      </div>
    <router-view/>
  </div>
</template>

<script>
import {store} from './store/state'

export default {
  data () {
    return {
      dropDownMenuActuve: []
    }
  },
  created () {
    console.log(this.lang)
  },
  methods: {},
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

<style>
  /*  reset css */
  *{
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style-type: none;
    box-sizing: border-box
  }
  .clr {clear: both;}

</style>

<style  scoped lang="scss">
#app {}
#header {
  position: fixed;
  display: flex;
  justify-content: space-between;
  top: 0;
  height: 5vh;
  width: 100%;
  z-index: 100;
  .logo {
    font-weight: bold;
    font-size: 3.6vh;
    margin-left: 1vw;
  }
}
.menuTop {
  margin-top: 0vh;
  ul {
    display: flex;
    position: absolute;
    right: 1vw;
    li {
      margin-left: 2vw;
      font-size: 2.7vh;
      list-style-type: none;
    }
  }
}
.selectMenu a{
  font-weight: 600;
  text-decoration: underline;
}
#content {
  position: fixed;
  width: 100vw;
  height: 95vh;
  margin-top: 5vh;
  z-index: 0;
}
</style>

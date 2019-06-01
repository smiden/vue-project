<template>
    <div id="app">
      <div class="menu_bottom" :style="{'background': theme[activeTheme].background, 'border-bottom': '.1vh solid' + theme[activeTheme].fontColor}">
          <template>
          <router-link v-for="(item, i) in menuField"
                       tag="div"
                       :key="item + i"
                       :to="item.url"
          >
              <a :style="{'color': theme[activeTheme].fontColor,'border': '.1vh solid' + theme[activeTheme].fontColor}"> {{ item.name }}</a>
          </router-link>
          </template>
      </div>
        <div class="content">
          <router-view></router-view>
        </div>
    </div>
</template>

<script>
import {store} from './../store/state.js'

export default {
  data () {
    return {
      menuField: [
        {name: 'Расчет накоплений при депозите', url: '/work/depCals'},
        {name: 'Интернет-магазин', url: '/work/store'}
      ]
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
    }
  },
  methods: {
  }
}
</script>

<style  scoped lang="scss">
.menu_bottom {
  width: 100%;
  height: 3vh;
  background: #0de7ff;
  display: flex;
  justify-content: center;
  a {
    height: 100%;
    display: block;
    padding:  0 20px;
  }
}
.menu_bottom-block {
  text-align: center;
  padding: 0.5vh 2vw;
  font-size: 1.7vh;
}
.menu_bottom-link {
  padding: 0.5vh 2vw;
  background: #444dd6;
  color: #fc6c2d;
  border: .1vh solid black;
    &:hover {
    background: #9acb00;
    color: #953565;
  }
}
#content {
  width: 100%;
  height: 92vh;
}
</style>

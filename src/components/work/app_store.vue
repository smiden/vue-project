<template>
    <div id="app">
      <div id="menu">
        <ul v-for="(elem, i) in list" :key="i">
          <div :class="{'borderMenuTop': i === activeMenu}"></div>
          <li style="font-size: 15px; color: #bd2130; margin: 20px 0 6px 30px;"
              @click="menuActive(i)"
          >
            <a class="menuTopLink"
               :class="{'menuTopLinkActive': i === activeMenu} "
            >
              <router-link :to="`/work/store/${ elem.url}`"

              ></router-link>
              {{ elem.name}} </a>
          </li>
          <ul v-show="i === activeMenu"
              v-for="(item, index) in elem.children"
              style="margin-left: 30px;"
              :key='index'
          >
              <li>
                <a href=""> {{ item.name }} </a>
              </li>
          </ul>
          <div :class="{'borderMenuBottom': i === activeMenu}"></div>
        </ul>

      </div>
      <div id="content">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
import {store} from './../../store/state.js'

export default {
  data () {
    return {
      activeMenu: null,
      list: [
        {
          name: 'МУЖСКАЯ',
          idMenu: 1,
          url: 'muzhskaya',
          children: [
            {name: 'Валенки', idGroupProduct: 1},
            {name: 'Галоши', idGroupProduct: 2},
            {name: 'Тапочки', idGroupProduct: 3}
          ]
        },
        {
          name: 'ЖЕНСКАЯ',
          idMenu: 2,
          url: 'zhenskaya',
          children: [
            {name: 'Валенки', idGroupProduct: 4},
            {name: 'Галоши', idGroupProduct: 5},
            {name: 'Тапочки', idGroupProduct: 6}
          ]
        }
      ],
      show: false
    }
  },
  methods: {
    menuActive (index) {
      this.activeMenu = index
      this.$router.push({ path: `/work/store/${this.list[index].url}` })
    }
  }
}
</script>

<style  scoped lang="scss">
 #app {
   margin-top: 10px;
   background: white;
   display: flex;
 }
 #menu {
    width: 300px;
   background: white;
   margin-right: 10px;
   font-size: 12px;
   a {
     color: #767676;
   }
 }
 .borderMenuTop{
    position: relative;
    &:before {
      content: '';
      width: 100%;
      height: 1px;
      background: #ccc;
      position: absolute;
      top: -8px;
      left: 0;
    }
  }
 .borderMenuBottom{
   position: relative;
   &:after {
     content: '';
     width: 100%;
     height: 1px;
     background: #ccc;
     position: absolute;
     top: 8px;
     left: 0;
   }
 }
 .menuTopLink {
   font-size: 12px;
   color: black;
 }
 .menuTopLinkActive {
   color: #ff48a5 !important;
 }
 #content {
   width: 100%;
 }
</style>

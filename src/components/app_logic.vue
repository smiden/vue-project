<template>
    <div id="app">
      <div class="menu_bottom">
        <router-link
          tag="div"
          class="menu_bottom-block"
          to="/logic/demo"
          active-class="menu_bottom-active"
        ><a class="menu_bottom-link">Подсчет накоплений</a>
        </router-link>
      </div>

     <div id="content">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
export default {
  methods: {
  }
}
</script>

<style  scoped lang="scss">
.menu_bottom {
  height: 3vh;
  width: 100%;
  background: #0de7ff;
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
  height: 91vh;
}
</style>

<template>
  <div id="app">
    <wen-navbar @leftClick="onLeftClick" title="wenwen-ui" v-show="navShow" class="fixed"/>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import { EventBus } from "./event-bus.js";
export default {
  computed: {
    navShow() {
      return EventBus.navShow;
    }
  },
  mounted() {
    document.body.addEventListener("touchstart", function() {}, false);
  },
  methods: {
    onLeftClick() {
      // eslint-disable-next-line
      console.log("click");
      this.$router.back();
    }
  }
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
html {
  -webkit-tap-highlight-color: transparent;
}
body {
  background: #f8f8f8;
  color: #333;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  font-size: 14px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  // padding-top: 44px;
}
.fixed {
  // position: fixed !important;
  // top: 0;
  // z-index: 2000;
}
.p20 {
  padding: 20px;
}
</style>

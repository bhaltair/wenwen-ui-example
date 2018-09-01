<template>
  <div class="home">
    <h1>wenwen-ui</h1>
    <p style="line-height: 40px;">面向移动端Vue组件库</p>
    <router-link to="/button">Button</router-link>
    <router-link to="/icon">Icon</router-link>
    <router-link to="/cell">Cell</router-link>
    <router-link to="/list">List</router-link>
    <router-link to="/loading">Loading</router-link>
    <router-link to="/navbar">Navbar</router-link>
    <router-link to="/toast">Toast</router-link>
    <router-link to="/spinner">Spinner</router-link>
    <router-link to="/tab">Tabs</router-link>
    <router-link to="/switch">Switch</router-link>
    <router-link to="/switch-cell">SwitchCell</router-link>
    <router-link to="/upload">Upload</router-link>
    <router-link to="/actionsheet">ActionSheet</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { EventBus } from "../event-bus.js";
export default {
  name: "home",
  components: {
    HelloWorld
  },
  created() {
    EventBus.$emit("NAV_HIDE");
  },
  updated() {
    EventBus.$emit("NAV_HIDE");
  },
  destroyed() {
    EventBus.$emit("NAV_SHOW");
  }
};
</script>

<style lang="scss" scoped>
.home {
  padding: 20px;
  a {
    display: block;
    border: 0.5px solid #ccc;
    margin-bottom: 10px;
    padding: 10px;
    box-sizing: border-box;
    color: #000;
  }
}
</style>

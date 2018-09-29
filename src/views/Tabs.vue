<template lang="html">
  <div class="demo-block">
    <wen-tabs v-model="active" @click="onClick" sticky >
      <wen-tab title="内容1内容1内容1内容1">
        <p>我是内容1</p>
        <p>我是内容1</p>
        <p>我是内容1</p>
      </wen-tab>
      <wen-tab title="内容2">
        <p>我是内容2</p>
        <p>我是内容2</p>
        <p>我是内容2</p>
      </wen-tab>
      <wen-tab title="内容3">
        <p>我是内容3</p>
        <p>我是内容3</p>
        <p>我是内容3</p>
      </wen-tab>
    </wen-tabs>
    <div class="padding"></div>
    <div class="padding"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  methods: {
    onClick() {}
  }
};
</script>

<style lang="scss" scoped>
.padding {
  height: 300px;
}
</style>

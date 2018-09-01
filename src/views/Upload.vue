<template>
  <div class="demo-block">
    <wen-upload :afterRead="afterRead" :beforeRead="beforeRead"></wen-upload>
  </div>
</template>

<script>
export default {
  methods: {
    beforeRead(file) {
      // reture false 终止读取文本
      return true
    },
    afterRead(file) {
      // 可以读出base64
      console.log(file)
    }
  }
}
</script>

<style lang="scss" >
  .demo-block {
    .iconfont {
      font-size: 30px;
    }
  }
</style>

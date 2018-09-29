<template>
  <div class="demo-block">
    <wen-upload :afterRead="afterRead" :success="successFn" @uploadErr="uploadErr" @changed="progressFn" :beforeRead="beforeRead" :uploadUrl="src" @oversize="onOversize" accept="image/gif, image/jpeg, image/png" multiple >
      <wen-icon name="upload" ></wen-icon>
    </wen-upload>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: "https://oapi.hemayun.cn/v1/common/upload"
    };
  },
  methods: {
    beforeRead() {
      // reture false 终止读取文本
      return true;
    },
    afterRead(files) {
      console.log(files);
    },
    successFn() {},
    uploadErr() {},
    progressFn() {},
    onOversize() {}
  }
};
</script>

<style lang="scss" >
.demo-block {
  .iconfont {
    font-size: 30px;
  }
}
</style>

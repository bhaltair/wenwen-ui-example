<template>
  <div class="">
    <wen-button type="primary" size="normal" @click.native="toggleShow">modal show</wen-button>
    <wen-button type="default" size="normal" @click.native="toggleShow2" style="margin-left: 20px;">confirm show</wen-button>
  </div>    
</template>

<script>
export default {
  methods: {
    toggleShow() {
      this.$modal.show({
        title: "title",
        btnText: "再想想",
        leftBtnText: "是",
        type: "toast",
        color: "#cc962e",
        text: "content",
        onHide: () => {
          this.$toast.show("on hide");
        },
        renderImage: () => {}
      });
    },
    toggleShow2() {
      this.$modal.show({
        title: "title",
        btnText: "确认",
        type: "toast",
        color: "red",
        text: "content",
        onHide: () => {
          // this.$router.replace("/");
        },
        renderImage: () => {}
      });
    }
  }
};
</script>

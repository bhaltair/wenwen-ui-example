<template lang="html">
  <div >
    <wen-button type="primary" size="normal" @click.native="toggleSow">toast show</wen-button>
  </div>
</template>

<script>
export default {
  methods: {
    toggleSow() {
      // console.log(this.$spinner)
      this.$toast.show("我是提示文案");
      setTimeout(() => {
        this.$toast.hide();
      }, 2000);
    }
  }
};
</script>

<template lang="html">
  <div >
    <wen-button type="primary" size="normal" @click.native="toggleSow">spinner show</wen-button>
  </div>
</template>

<script>
export default {
  methods: {
    toggleSow() {
      // console.log(this.$spinner)
      this.$spinner.show("loading...");
      setTimeout(() => {
        this.$spinner.hide();
      }, 2000);
    }
  }
};
</script>

<template lang="html">
  <div >
    <wen-button type="primary" size="normal" @click.native="toggleSow">action show</wen-button>
    <wen-actionsheet v-model="show" :actions="actions" @select="onselect"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      actions: [
        {
          name: "选项1"
        },
        {
          name: "选项2"
        },
        {
          name: "选项3"
        }
      ]
    };
  },
  methods: {
    onselect(payload) {
      this.$toast.show("你选中了" + payload.name);
    },
    toggleSow() {
      this.show = !this.show;
    }
  }
};
</script>

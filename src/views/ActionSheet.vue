<template lang="html">
  <div class="p20">
    <wen-button type="primary" size="normal" @click.native="toggleSow">toast show</wen-button>
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
          name: '选项1'
        },
        {
          name: '选项2'
        },
        {
          name: '选项3'
        }
      ]
    }
  },
  methods: {
    onselect(index) {
      console.log(index)
    },
    toggleSow() {
      this.show = !this.show
    }
  }
};
</script>

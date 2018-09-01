<template>
  <div>
    <wen-switch-cell v-model="status" title="性别" color="green"></wen-switch-cell>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: false
    }
  }
}
</script>

<template>
  <div >
    <wen-switch v-model="status" color="yellow"></wen-switch>
    disabled
    <wen-switch v-model="status2" disabled color="blue"></wen-switch>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: false,
      status2: true
    };
  }
};
</script>

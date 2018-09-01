import Vue from "vue";
export const EventBus = new Vue({
  data: {
    navShow: true
  },
  created() {
    this.$on("NAV_HIDE", () => {
      this.navShow = false;
    });
    this.$on("NAV_SHOW", () => {
      this.navShow = true;
    });
  }
});

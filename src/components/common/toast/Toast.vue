<template>
  <div class="toast" v-show="isshow">
    <div>{{ message }}</div>
  </div>
</template>
<script>
export default {
  name: "Toast",
  props: {
    // message: {
    //   type: String,
    //   default: ""
    // },
    // show: {
    //   type: Boolean,
    //   default: false
    // }
  },
  data() {
    return {
      message: "",
      isshow: false
    };
  },
  methods: {
    show(message, duration) {
      console.log("------");
      this.isshow = true;
      this.message = message;

      setTimeout(() => {
        (this.isshow = false), (this.message = "");
      }, duration);
    }
  }
};
</script>
<style scoped>
.toast {
  position: fixed;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 8px 10px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.7);
}
</style>

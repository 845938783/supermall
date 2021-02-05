<template>
  <div class="check-buttom" :class="{ check: isChecked }">
    <img src="~assets/img/cart/tick.svg" alt="" />
  </div>
</template>
<script>
export default {
  name: "CheckButtom",
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style scoped>
.check-buttom {
  border: 2px solid #ccc;
  border-radius: 50%;
}
.check {
  background-color: var(--color-tint);
  border-color: var(--color-tint);
}
</style>

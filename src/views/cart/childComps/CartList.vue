<template>
  <div class="cart-list">
    <scorll class="content" ref="scroll">
      <!-- <li v-for="item in cartList">{{ item }}</li> -->
      <cart-list-item
        v-for="(item, index) in cartList"
        :item-info="item"
        :key="index"
      ></cart-list-item>
    </scorll>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Scorll from "components/common/scorll/Scorll.vue";
import CartListItem from "./CartListItem.vue";
export default {
  components: { Scorll, CartListItem },
  name: "CartList",
  computed: {
    ...mapGetters(["cartList"])
  },
  activated() {
    this.$refs.scroll.refresh();
  }
};
</script>
<style scoped>
.cart-list {
  height: calc(100% - 44px - 49px - 40px);
  overflow: hidden;
}
.content {
  height: 100%;
}
</style>

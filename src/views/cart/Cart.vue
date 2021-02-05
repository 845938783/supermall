<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ length }})</div>
    </nav-bar>

    <cart-list></cart-list>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { mapGetters } from "vuex";
import CartList from "./childComps/CartList.vue";
import CartBottomBar from "./childComps/CartBottomBar.vue";

export default {
  components: { NavBar, CartList, CartBottomBar },
  name: "Cart",
  computed: {
    // ...mapGetters(["cartLength", "cartList"])
    ...mapGetters({
      length: "cartLength"
    })
  }
};
</script>

<style scoped>
.cart {
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: bold;
}
</style>

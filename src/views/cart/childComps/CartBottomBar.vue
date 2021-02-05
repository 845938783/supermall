<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-buttom
        class="check-button"
        :is-checked="isSelectAll"
        @click.native="checkClick"
      />
      <span>全选</span>
    </div>

    <div class="price">合计: {{ totalPrice }}</div>
    <div class="calculate" @click="calcClick">去结算：{{ checkLength }}</div>
  </div>
</template>
<script>
import CheckButtom from "components/content/checkButtom/CheckButtom.vue";

export default {
  components: { CheckButtom },
  name: "CartBottomBar",
  computed: {
    totalPrice() {
      return (
        "￥" +
        this.$store.state.cartList
          .filter(item => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    checkLength() {
      return this.$store.state.cartList.filter(item => item.checked).length;
    },
    isSelectAll() {
      // return !this.$store.state.cartList.filter(item => !item.checked).length;
      if (this.$store.state.cartList.length === 0) return false;
      return !this.$store.state.cartList.find(item => !item.checked);
    }
  },
  methods: {
    checkClick() {
      if (this.isSelectAll) {
        this.$store.state.cartList.forEach(item => (item.checked = false));
      } else {
        this.$store.state.cartList.forEach(item => (item.checked = true));
      }
    },
    calcClick() {
      if (!this.$store.getters.cartList.find(item => item.checked)) {
        this.$toast.show("请选择购买的商品", 2000);
      }
    }
  }
};
</script>
<style scoped>
.bottom-bar {
  position: relative;
  background-color: #eee;
  line-height: 40px;
  display: flex;
  height: 40px;
  font-size: 14px;
}
.check-content {
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 60px;
}
.check-buttom {
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-right: 5px;
}
.price {
  margin-left: 20px;
  flex: 1;
}
.calculate {
  width: 90px;
  text-align: center;
  background: red;
  color: #fff;
}
</style>

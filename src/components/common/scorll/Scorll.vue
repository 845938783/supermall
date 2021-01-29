<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";

export default {
  name: "Scorll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    //1.创建bscroll对象
    this.scroll = new BetterScroll(this.$refs.wrapper, {
      movable: true,
      click: true,

      probeType: this,

      mouseWheel: true,
      pullUpLoad: this.pullUpLoad
    });
    // 2. 监听滚动位置
    this.scroll.on("scroll", position => {
      this.$emit("scroll", position);
    });
    // 3.监听上啦事件
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    }
  }
};
</script>

<style scoped></style>

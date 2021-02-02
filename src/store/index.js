import Vue from "vue";
import Vuex from "vuex";

// 1安装插件
Vue.use(Vuex);

// 2.创建Store对象

const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCart(state, payload) {
      // payload新添加的商品
      // let oldProduct = null;
      // for (let item of state.cartList) {
      //   if (item.iid === payload.iid) {
      //     oldProduct = item;
      //   }
      // }
      // 1.查找之前数组中是否有该商品
      let oldproduct = state.cartList.find(function(item) {
        return item.iid === payload.iid;
      });

      // 2.判断 oldProduct 是否有值
      if (oldproduct) {
        oldproduct.count += 1;
      } else {
        payload.count = 1;
        state.cartList.push(payload);
      }
    }
  }
});
// 3. 挂载Vue实例上

export default store;

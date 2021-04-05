<template>
  <button @click="increase">增加</button>
  <span>{{ number }}</span>
  <button @click="decrease">减少</button>
  <div>
    <router-link :to="{ name: 'home' }">返回</router-link>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from "vuex";
import { INCREMENT_MUTATION, DECREMENT_MUTATION } from "../stores/mutation-types";

export default defineComponent({
  setup(props, context) {
    // Vue@3 的 setup 函数中是没有 this 的
    // 所以无法使用 this.$store 来引用 vuex 的 store
    // 使用 vuex@4 的 useStore 钩子
    const store = useStore();
    const number = computed(() => store.getters.count);

    const increase = () => {
      console.log('增加');
      store.dispatch(INCREMENT_MUTATION);
    }
    const decrease = () => {
      console.log('减少');
      store.dispatch(DECREMENT_MUTATION);
    }

    return {
      number,
      increase,
      decrease,
    }
  },
})
</script>

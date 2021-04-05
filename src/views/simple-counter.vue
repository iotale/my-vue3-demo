<template>
  使用 srcipt setup
  <div @click="increase">{{ count }}</div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0);
const increase = () => { count.value++ }
</script>

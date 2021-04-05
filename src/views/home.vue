<template>
  <div>
    <router-link :to="{ name: 'todolist' }">查看待办列表</router-link>
  </div>
  <div>
    <router-link :to="{ name: 'counter' }">查看计数器</router-link>
  </div>
  <div>
    <router-link :to="{ name: 'simple-counter' }">查看精简计数器</router-link>
  </div>
</template>

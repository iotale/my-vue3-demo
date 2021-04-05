<template>
<div class="todo-list">
  <div>
    <label>新增待办</label>
    <input v-model="state.todo" @keyup.enter="addTodo">
  </div>
  <div>
    <h3>待办列表（{{ todos.length }}）</h3>
    <ul>
      <li v-for="item in todos" :key="item.id" @click="changeStatus(item, true)">
        <input type="checkbox">
        <label>{{ item.text }}</label>
      </li>
    </ul>
  </div>
  <div class="dones-list">
    <h3>已办列表（{{ dones.length }}）</h3>
    <ul>
      <li v-for="item in dones" :key="item.id" @click="changeStatus(item, false)">
        <input type="checkbox" checked>
        <label>{{ item.text }}</label>
      </li>
    </ul>
  </div>
  <router-link :to="{ name: 'home' }">返回</router-link>
</div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue'

interface Item {
  id: number;
  done: boolean;
  text: string;
}

export default defineComponent({
  name: 'TodoList',
  setup(props, context) {
    const state = reactive({
      todoList: [{
        id: 1,
        done: false,
        text: '吃饭'
      },{
        id: 2,
        done: false,
        text: '睡觉'
      },{
        id: 3,
        done: false,
        text: '打豆豆'
      }],
      todo: '',
    });

    const todos = computed(() => state.todoList.filter(({ done }) => !done));

    const dones =computed(() => state.todoList.filter(({ done }) => done));

    const changeStatus = (item: Item, status: boolean) => {
      item.done = status
    };
    const addTodo = () => {
      if (!state.todo) {
        alert('请输入内容');
        return
      }
      state.todoList.push({
        id: Date.now(),
        done: false,
        text: state.todo,
      });
      state.todo = '';
    }

    return {
      state,
      todos,
      dones,
      changeStatus,
      addTodo,
    }
  },
})
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
li {
  margin: 0;
  padding: 0;
}
</style>
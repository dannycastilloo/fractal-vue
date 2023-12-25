<script setup>
import { RouterView } from 'vue-router'
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <div class="app-container">
    <Sidebar />
    <RouterView />
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
}
</style>
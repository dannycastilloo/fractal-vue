<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue';

const emit = defineEmits();
const search = ref('');

watch(search, (newValue) => {
  emit('updateSearch', newValue);
});

const handleClick = () => {
  emit('openContinentsModal');
};
</script>

<template>
    <div class='search-container'>
        <input class='search-input' type="text" placeholder='Search country...' v-model="search" @click="handleClick" />
    </div>
</template>

<style>
.search-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 40px 0 20px 0;
    gap: 20px;
}

.search-input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    font-size: 16px;
    width: 300px;
}

.search-input::placeholder {
    color: #a0a0a0;
}
</style>
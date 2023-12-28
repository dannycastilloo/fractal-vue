<script setup>
import { ref, watch } from 'vue';

const emit = defineEmits(['openContinentsModal','updateSearch']);
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
        <input class='search-input' type="text" placeholder='País' v-model="search" @click="handleClick" />
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
    padding: 15px 25px;
    border: 1px solid #ccc;
    border-radius: 25px;
    font-size: 16px;
    width: 300px;
    background-color: #ffffff;
    box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
    font-family: 'Roboto', sans-serif;
}

.search-input::placeholder {
    color: #8b8b8b;
    font-weight: 700;
}
</style>
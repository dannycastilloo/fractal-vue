<script setup>

const props = defineProps(['title', 'picture']);
const { emit } = defineEmits();

const handleContinentClick = () => {
  emit('continent-click', props.title);
};

</script>

<template>
  <div class='continent-card' @click="handleContinentClick">
    <img :src="props.picture" :alt="props.title" />
    <h3>{{ title }}</h3>
  </div>
</template>

<style>
.continent-card {
  display: flex;
  flex-direction: column;
}

.continent-card>img {
  width: 100px;
  border-radius: 5px;
  cursor: pointer;
}

.continent-card>img:hover {
  box-shadow: 0 0 10px rgba(43, 248, 255, 0.509);
}

.continent-card>h3 {
  margin: 8px 0 2px 0;
  color: rgb(138, 138, 138);
  font-size: 14px;
}
</style>
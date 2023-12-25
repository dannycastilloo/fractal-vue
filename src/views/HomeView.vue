<script setup>
import { ref } from 'vue';
import SearchBar from '../components/SearchBar.vue';
import ContinentsModal from '../components/ContinentsModal.vue';
import InfoBar from '../components/InfoBar.vue';
import CountryCard from '../components/CountryCard.vue';

const isContinentsModalOpen = ref(false);

const openContinentsModal = () => {
  isContinentsModalOpen.value = true;
};

const closeContinentsModal = () => {
  isContinentsModalOpen.value = false;
};
</script>

<template>
  <div class='main'>
    <SearchBar @openContinentsModal="openContinentsModal" />

    <ContinentsModal :closeContinentsModal="closeContinentsModal" :isContinentsModalOpen="isContinentsModalOpen" />

    <InfoBar />

    <section>
      <div class="cards-container">
        <CountryCard />
      </div>
    </section>
  </div>
</template>

<style>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  overflow: auto;
}
</style>

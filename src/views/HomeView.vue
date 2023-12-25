<script setup>
import { ref } from 'vue'
import SearchBar from '../components/SearchBar.vue'
import ContinentsModal from '../components/ContinentsModal.vue'
import InfoBar from '../components/InfoBar.vue'
import CountryCard from '../components/CountryCard.vue'

const { setSearch } = defineProps(['setSearch']);
const search = ref('');

const isContinentsModalOpen = ref(false);
const openContinentsModal = () => {
  isContinentsModalOpen.value = true;
};
const closeContinentsModal = () => {
  isContinentsModalOpen.value = false;
};

const selectedContinent = ref(null);
const setSelectedContinent = (continent) => {
  selectedContinent.value = continent;
};
</script>

<template>
  <div class='main'>
    <h1>Welcome! 👋</h1>
    <SearchBar :search="search" @updateSearch="setSearch" @openContinentsModal="openContinentsModal" />
    <ContinentsModal
      :closeContinentsModal="closeContinentsModal"
      :setSelectedContinent="setSelectedContinent"
      :isContinentsModalOpen="isContinentsModalOpen"
    />
    <InfoBar />
    <section>
      <div class="cards-container">
        <CountryCard :search="search" />
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
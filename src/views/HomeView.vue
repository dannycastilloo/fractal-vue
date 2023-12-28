<script setup>
import { ref } from 'vue';
import SearchBar from '../components/SearchBar.vue';
import ContinentsModal from '../components/ContinentsModal.vue';
import InfoBar from '../components/InfoBar.vue';
import CountryCard from '../components/CountryCard.vue';
import { useCountry } from '../hooks/useCountry'

const { filteredCountries, getCountry } = useCountry()
const isContinentsModalOpen = ref(false);

const openContinentsModal = () => {
  isContinentsModalOpen.value = true;
};

const closeContinentsModal = () => {
  isContinentsModalOpen.value = false;
};

const updateSearch = (newValue) => {
  getCountry(newValue);
};

const setSelectedContinent = (continent) => {
  getCountry('', continent);
};
</script>

<template>
  <div class='main'>
    <SearchBar @openContinentsModal="openContinentsModal" @updateSearch="updateSearch" />

    <ContinentsModal :closeContinentsModal="closeContinentsModal" :isContinentsModalOpen="isContinentsModalOpen" :setSelectedContinent="setSelectedContinent" />

    <InfoBar />

    <section>
      <div class="cards-container">
        <CountryCard :countries="filteredCountries.data" />
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

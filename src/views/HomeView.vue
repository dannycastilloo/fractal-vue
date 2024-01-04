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

const selectedCountry = ref(null);

const isInfoOpen = ref(false);

const openInfo = () => {
  isInfoOpen.value = true;
};

const closeInfo = () => {
  isInfoOpen.value = false;
};

const handleCountrySelected = (country) => {
  selectedCountry.value = country;
  openInfo(); 
  console.log('Country selected:', country);
};
</script>

<template>
  <div class='main'>
    <SearchBar @openContinentsModal="openContinentsModal" @updateSearch="updateSearch" />

    <ContinentsModal :closeContinentsModal="closeContinentsModal" :isContinentsModalOpen="isContinentsModalOpen" :setSelectedContinent="setSelectedContinent" />

    <InfoBar :selectedCountry="selectedCountry" :isInfoOpen="isInfoOpen" :closeInfo="closeInfo" />

    <section>
      <div class="cards-container">
        <CountryCard :countries="filteredCountries.data" @countrySelected="handleCountrySelected" />
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
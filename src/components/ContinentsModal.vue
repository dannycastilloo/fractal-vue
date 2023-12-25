<script setup>

import Continent from './Continent.vue'
import { defineProps } from 'vue';

const { closeContinentsModal, setSelectedContinent, isContinentsModalOpen } = defineProps([
  'closeContinentsModal',
  'setSelectedContinent',
  'isContinentsModalOpen',
]);

const handleContinentSelect = (continent) => {
  setSelectedContinent(continent);
  closeContinentsModal();
};

</script>

<template>
  <div class="continents-modal"
    :class="{ 'flex': isContinentsModalOpen, 'hidden': !isContinentsModalOpen }">
    <button @click="closeContinentsModal">
      <img src="/extra/x.svg" alt="Cerrar" />
    </button>
    <div class='continents-container'>
      <Continent title='South America' picture='/continents/south-america.jpg'
        @click="() => handleContinentSelect('South America')" />

      <Continent title='North America' picture='/continents/north-america.jpg' @click="() =>
        handleContinentSelect('North America')" />

      <Continent title='Europe' picture='/continents/europa.jpg' @click="() => handleContinentSelect('Europe')" />

      <Continent title='Asia' picture='/continents/asia.jpg' @click="() => handleContinentSelect('Asia')" />
        
      <Continent title='Africa' picture='/continents/africa.jpg' @click="() => handleContinentSelect('Africa')" />

      <Continent title='Oceania' picture='/continents/oceania.jpg' @click="() =>
        handleContinentSelect('Oceania')" />
    </div>
  </div>
</template>

<style>
.continents-modal {
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px rgba(43, 248, 255, 0.509);
  padding: 20px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  background-color: rgb(246, 246, 246);
  width: 400px;
  margin: 0 auto;
}

.continents-modal>button {
  border: none;
  background-color: transparent;
  border-radius: 40px;
  cursor: pointer;
  margin-left: auto;
}

.continents-modal>button:hover {
  background-color: rgba(128, 128, 128, 0.502);
}

.continents-modal>button>img {
  width: 25px;
}

.continents-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 350px;
  margin-top: 10px;
}

.flex {
  display: flex;
}

.hidden {
  display: none;
}

@media (width < 768px) {
  .continents-modal {
    width: 60%;
  }

  .continents-container {
    width: 100%;
  }
}
</style>
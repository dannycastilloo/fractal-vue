<script setup>
import CountryInfo from './CountryInfo.vue';

const props = defineProps(['selectedCountry', 'isInfoOpen', 'closeInfo']);
</script>

<template>
  <aside :class="{ flex: isInfoOpen, hidden: !isInfoOpen }" class="information-bar">
    <button>
      <img src="/extra/x.svg" alt="Cerrar" @click="closeInfo" />
    </button>
    <div>
        <CountryInfo
        v-if="selectedCountry && selectedCountry.continent"
        :name="selectedCountry.name || 'N/A'"
        :continent="selectedCountry.continent.name || 'N/A'"
        :capital="selectedCountry.capital || 'N/A'"
        :language="selectedCountry.languages || 'N/A'"
        :currency="selectedCountry.currency || 'N/A'"
        :native="selectedCountry.native || 'N/A'"
        :phone="selectedCountry.phone || 'N/A'"
        :states="selectedCountry.states || 'N/A'"
        :placeImage="'N/A'"
        :flagImage="'N/A'"
        :firstStateName="selectedCountry.states && selectedCountry.states.length > 0 ? selectedCountry.states[0].name : 'N/A'"
      />
    </div>
  </aside>
</template>

<style>
.information-bar {
    position: fixed;
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 100%;
    right: 0%;
    background-color: white;
    padding: 80px 20px 20px 20px;
    border-radius: 10px;
    color: black;
    box-shadow: 0 0 10px rgba(79, 79, 79, 0.6);
}

.information-bar>button {
    border: none;
    top: 2%;
    right: 1%;
    background-color: transparent;
    border-radius: 40px;
    cursor: pointer;
    position: fixed;
}

.information-bar>button:hover {
    background-color: rgba(128, 128, 128, 0.502);
}

.information-bar>button>img {
    width: 30px;
}

.flex {
    display: flex;
}

.hidden {
    display: none;
}

@media (width < 768px) {
    .information-bar {
        justify-content: start;
    }
}

@media (768px <= width < 1440px) {
    .information-bar {
    width: 280px;
    padding: 80px 20px 20px 20px;
}
}
</style>
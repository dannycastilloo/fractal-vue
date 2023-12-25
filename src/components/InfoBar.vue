<script setup>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';

const selectedCountryImages = ref([]);
const context = defineProps(['selectedCountry', 'isInfoOpen', 'closeInfo']);

const fetchImages = async (countryName) => {
    try {
        const apiKey = '41223762-b5c29360eff2a9446660d1f1e';
        const [responsePlace, responseFlag] = await Promise.all([
            axios.get(`https://pixabay.com/api/?key=${apiKey}&q=${countryName}&image_type=photo`),
            axios.get(`https://pixabay.com/api/?key=${apiKey}&q=${countryName}+flag&image_type=photo`),
        ]);

        if (responsePlace.data && responsePlace.data.hits && responsePlace.data.hits.length > 0 &&
            responseFlag.data && responseFlag.data.hits && responseFlag.data.hits.length > 0) {
            return [responsePlace.data.hits[0], responseFlag.data.hits[0]];
        }
    } catch (error) {
        console.error(`Error fetching images for ${countryName} from Pixabay:`, error);
    }

    return [];
};

watch(() => context.selectedCountry, async (newVal) => {
    if (newVal) {
        const countryName = newVal.name;
        const images = await fetchImages(countryName);
        selectedCountryImages.value = images;
    }
});

onMounted(() => {
    console.log("InfoBar component has been mounted!");
});
</script>

<template>
    <aside :class="{ flex: context.isInfoOpen, hidden: !context.isInfoOpen }" class="information-bar">
        <button>
            <img src="/extra/x.svg" alt="Cerrar" @click="context.closeInfo" />
        </button>
        <div>
            <CountryInfo v-if="context.selectedCountry && context.selectedCountry.continent"
                :name="context.selectedCountry.name || 'N/A'" :continent="context.selectedCountry.continent.name || 'N/A'"
                :capital="context.selectedCountry.capital || 'N/A'" :language="context.selectedCountry.languages || 'N/A'"
                :currency="context.selectedCountry.currency || 'N/A'" :native="context.selectedCountry.native || 'N/A'"
                :phone="context.selectedCountry.phone || 'N/A'" :states="context.selectedCountry.states || 'N/A'"
                :placeImage="selectedCountryImages.placeImage?.largeImageURL || 'N/A'"
                :flagImage="selectedCountryImages.flagImage?.largeImageURL || 'N/A'" />
        </div>
    </aside>
</template>

<style>
.information-bar {
    position: fixed;
    display: flex;
    flex-direction: column;
    width: 200px;
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
</style>
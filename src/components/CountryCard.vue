<script setup>
import { defineProps, ref, watchEffect } from 'vue';

const { search, countries, handleCardClick } = defineProps(['search', 'countries', 'handleCardClick']);
const filteredCountries = ref([]);

watchEffect(() => {
  if (countries) {
    // Tu lógica para filtrar los países según la búsqueda
    filteredCountries.value = countries.filter((country) =>
      country.name.toLowerCase().includes(search.toLowerCase())
    );
  }
});
</script>

<template>
  <div>
    <article v-for="{ countryName, images, ...countryDetails } in filteredCountries" :key="countryName"
      class='country-card' @click="() => handleCardClick({ name: countryName, images, ...countryDetails })">
      <img v-if="images.placeImage" :src="images.placeImage.largeImageURL" alt="" />
      <div class='country-bottom'>
        <img v-if="images.flagImage" class="flag-image" :src="images.flagImage.largeImageURL" alt="Flag" />
        <div class='country-data'>
          <h3>{{ countryName }}</h3>
          <span>{{ countryDetails.continent.name }}</span>
        </div>
      </div>
    </article>
  </div>
</template>

<style>
.country-card {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    cursor: pointer;
}

.country-card>img {
    width: 380px;
    height: 200px;
    border-radius: 10px 10px 0 0;
}

.country-bottom {
    padding: 20px 30px;
    display: flex;
    gap: 30px;
}

.country-bottom>img {
    width: 100px;
    height: 50px;
    border-radius: 4px;
}

.country-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    width: 190px;
}

.country-data>h3 {
    font-size: 20px;
    margin-top: 0;
    margin-bottom: 5px;
    text-align: center;
    color: rgb(43, 160, 255);
}

.country-data>span {
    font-size: 14px;
    text-align: center;
}

@media (width < 768px) {
    .country-card {
        width: 300px;
    }

    .country-card>img {
        width: 300px;
        height: 140px;
    }

    .country-bottom>img {
        width: 80px;
        height: 40px;
    }

    .country-bottom {
        padding: 20px;
        gap: 15px;
    }

    .country-data {
        width: 150px;
    }

    .country-data>h3 {
        font-size: 16px;
    }

    .country-data>span {
        font-size: 12px;
        text-align: center;
    }
}
</style>
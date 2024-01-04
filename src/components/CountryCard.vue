<script setup>
const props = defineProps(['countries'])
const emit = defineEmits(['countrySelected'])
const apiKey = '41223762-b5c29360eff2a9446660d1f1e'

const handleCountrySelected = (country) => {
  console.log('Country selected:', country);
  emit('countrySelected', country)
}
</script>

<template>
  <article v-for="(country, index) in countries.slice(0, 50)" @click="handleCountrySelected(country)" :key="country.code" class="country-card">
    <img :src="`https://pixabay.com/api/?key=${apiKey}&q=${country.code}&image_type=photo`" alt="Imagen del país" />
    <div class="country-bottom">
      <img :src="`https://flagsapi.com/${country.code}/flat/64.png`" />
      <div class='country-data'>
        <h3 class="card-country-name">{{ country.name }}</h3>
        <span class="card-country-continent">{{ country.continent.name }}</span>
      </div>
    </div>
  </article>
</template>

<style>
.country-card {
  display: flex;
  flex-direction: column;
  border-radius: 25px;
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
  width: 80px;
  height: 50px;
  object-fit: cover;
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
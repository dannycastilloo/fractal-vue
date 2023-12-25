import { ref } from 'vue';
import axios from 'axios';

export const useImage = () => {
  const urlImages = ref([]);

  const getImageCountry = async (countries) => {
    urlImages.value = [];

    for (const country of countries) {
      try {
        const { data } = await axios.get(`https://api.pexels.com/v1/search?query=${country.name}`, {
          params: { country: country.name },
          headers: {
            Authorization: '41223762-b5c29360eff2a9446660d1f1e'
          }
        });

        const randomPhoto = data.photos[Math.floor(Math.random() * 3)];
        urlImages.value.push({ country: country.name, url: randomPhoto ? randomPhoto.src.landscape : ' ' });
      } catch (error) {
        urlImages.value.push({ country: country.name, url: ' ' });
      }
    }
  };

  return { urlImages, getImageCountry };
};
import { ref, onMounted, watch, useContext } from 'vue';
import { CountryContext } from '../context';

export const useImage = () => {
  const images = ref([]);
  const context = useContext(CountryContext);

  const fetchImages = async () => {
    try {
      const selectedCountry = context.selectedCountry;

      if (selectedCountry) {
        const apiKey = '41223762-b5c29360eff2a9446660d1f1e';
        const responsePlace = await fetch(`https://pixabay.com/api/?key=${apiKey}&q=${selectedCountry.name}&image_type=photo`);
        const responseFlag = await fetch(`https://pixabay.com/api/?key=${apiKey}&q=${selectedCountry.name}+flag&image_type=photo`);

        const placeImageData = await responsePlace.json();
        const flagImageData = await responseFlag.json();

        if (placeImageData.hits && placeImageData.hits.length > 0 && flagImageData.hits && flagImageData.hits.length > 0) {
          images.value = [placeImageData.hits[0], flagImageData.hits[0]];
        }
      }
    } catch (error) {
      console.error('Error fetching images from Pixabay:', error);
    }
  };

  onMounted(fetchImages);
  watch(() => context.selectedCountry, fetchImages);

  return images;
};

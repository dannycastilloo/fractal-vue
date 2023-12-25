import axios from 'axios';

const API_BASE_URL = 'https://countries.trevorblades.com/';

export const getCountries = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data.countries;
  } catch (error) {
    console.error('Error fetching countries:', error);
    throw error;
  }
};

export const getImages = async (countryName) => {
  try {
    const apiKey = '41223762-b5c29360eff2a9446660d1f1e';
    const responsePlace = await axios.get(`https://pixabay.com/api/?key=${apiKey}&q=${countryName}&image_type=photo`);
    const responseFlag = await axios.get(`https://pixabay.com/api/?key=${apiKey}&q=${countryName}+flag&image_type=photo`);

    if (
      responsePlace.data &&
      responsePlace.data.hits &&
      responsePlace.data.hits.length > 0 &&
      responseFlag.data &&
      responseFlag.data.hits &&
      responseFlag.data.hits.length > 0
    ) {
      return [responsePlace.data.hits[0], responseFlag.data.hits[0]];
    }
  } catch (error) {
    console.error(`Error fetching images for ${countryName} from Pixabay:`, error);
    throw error;
  }

  return [];
};

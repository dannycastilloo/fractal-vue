import { useState, useEffect } from 'react';
import axios from 'axios';

const useCountry = () => {
  const [countryInfo, setCountryInfo] = useState({
    loading: true,
    error: null,
    data: null,
    countryImages: [],
  });

  useEffect(() => {
    const fetchImages = async (countryName) => {
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
      }

      return [];
    };

    const fetchCountryInfo = async () => {
      try {
        setCountryInfo((prevInfo) => ({ ...prevInfo, loading: true }));

        const response = await axios.get('https://countries.trevorblades.com/');
        const countries = response.data.countries;

        const countryImagesPromises = countries.map(async (country) => {
          const images = await fetchImages(country.name);
          return {
            countryName: country.name,
            images,
          };
        });

        const resolvedImages = await Promise.all(countryImagesPromises);

        setCountryInfo({
          loading: false,
          error: null,
          data: countries,
          countryImages: resolvedImages,
        });
      } catch (error) {
        console.error('Error fetching country data:', error);
        setCountryInfo({
          loading: false,
          error: error.message,
          data: null,
          countryImages: [],
        });
      }
    };

    fetchCountryInfo();
  }, []);

  return countryInfo;
};

export default useCountry;

import { reactive, watch } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';

export const useCountry = () => {
  const { result, loading } = useQuery(
    gql`
      query fetchCountry {
        countries {
          code
          name
          capital
          continent {
            name
          }
          languages {
            name
          }
          states {
            name
          }
          phone
          currency
          native
        }
      }
    `,
    { fetchCountry: '' },
    {}
  );

  const dataCountries = reactive(result);
  const filteredCountries = reactive({ data: [] });

  const getCountry = (searchInput, continent) => {
    const upperLetterCountry = searchInput.charAt(0).toUpperCase();
    const fetchCountry = `${upperLetterCountry + searchInput.slice(1).toLowerCase()}`;

    filteredCountries.data = dataCountries.value.countries.filter((country) =>
      country.name.includes(fetchCountry) && (!continent || country.continent.name === continent)
    );
  };

  watch(result, () => {
    if (filteredCountries.data.length === 0) {
      filteredCountries.data = dataCountries.value?.countries;
    }
  });

  return { dataCountries, filteredCountries, getCountry, loading };
};
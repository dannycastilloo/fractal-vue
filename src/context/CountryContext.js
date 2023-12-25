import { createStore } from 'vuex';

export default createStore({
  state: {
    isInfoOpen: false,
    selectedCountry: null,
    isContinentsModalOpen: false,
    selectedContinent: null,
    countryImages: [],
  },
  mutations: {
    openInfo(state) {
      state.isInfoOpen = true;
    },
    closeInfo(state) {
      state.isInfoOpen = false;
    },
    openContinentsModal(state) {
      state.isContinentsModalOpen = true;
    },
    closeContinentsModal(state) {
      state.isContinentsModalOpen = false;
    },
    setCountry(state, country) {
      state.selectedCountry = country;
      state.isInfoOpen = true;
    },
    setSelectedContinent(state, continent) {
      state.selectedContinent = continent;
    },
    setCountryImages(state, images) {
      state.countryImages = images;
    },
  },
});

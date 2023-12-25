<script setup>
import SearchBar from '../components/SearchBar.vue'
import ContinentsModal from '../components/ContinentsModal.vue'
import InfoBar from '../components/InfoBar.vue'
import CountryCard from '../components/CountryCard.vue'
</script>

<template>
  <div class='main'>
    <h1>Welcome! 👋</h1>
    <SearchBar setSearch={setSearch} />
    <ContinentsModal />
    <InfoBar />
    <section>
      <div class="cards-container">
        <CountryCard search={search} />
      </div>
    </section>
  </div>
</template>

<style>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  overflow: auto;
}
</style>
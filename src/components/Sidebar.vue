<script setup>

import { ref } from 'vue'

const isAsideVisible = ref(false)

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/danny', label: 'Danny' },
];

const toggleAside = () => {
  isAsideVisible.value = !isAsideVisible.value
}

</script>

<template>
    <div>
        <div class='menu' @click="toggleAside">
            <img src="/extra/menu.png" alt="Menu" />
        </div>
        <aside :class="{ 'visible': isAsideVisible }">
            <span @click="toggleAside">x</span>
            <section class="nav-banner">
                <img src="/extra/logo.png" alt="Logo" />
            </section>

            <section class="nav-section" v-for="(link, index) in navLinks" :key="index">
                <router-link :to="link.to" class="nav-link">{{ link.label }}</router-link>
            </section>
        </aside>
    </div>
</template>

<style>
.menu {
  display: none;
}

aside {
  display: flex;
  flex-direction: column;
  width: 250px;
  background-color: #1e1e1e;
  padding-top: 20px;
  height: 100vh;
  position: sticky;
  top: 0;
}

.nav-banner>img {
    width: 150px;
    display: block;
    margin: 20px auto;
    border-radius: 4px;
}

.nav-section * {
    display: flex;
    height: 100px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.nav-section:hover {
    background-color: rgb(108, 108, 108);
}

.nav-link {
    text-decoration: none;
    color: #eeeeee;
    text-align: center;
}

@media (width < 768px) {
    .menu {
        display: block;
        position: absolute;
        top: 2%;
        left: 4%;
        cursor: pointer;
    }

    aside {
        display: none;
        position: fixed;
    }

    aside>span {
        text-align: end;
        color: #eeeeee;
        font-size: 32px;
        margin-right: 10%;
        cursor: pointer;
    }

    aside.visible {
        display: flex;
    }
}
</style>
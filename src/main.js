// Main Option
import './assets/main.css'

import { createApp, provide } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'

const httpLink = createHttpLink({
    uri: 'https://countries.trevorblades.com/'
})

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
    link: httpLink,
    cache
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.provide(DefaultApolloClient, apolloClient)
app.mount('#app')

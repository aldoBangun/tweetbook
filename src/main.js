import { createApp } from 'vue'
import App from './App.vue'
import './tailwind.css'
import router from './router/router'
import store from './store/index'

// Global Components
import BaseModal from './components/BaseModal.vue'

const app = createApp(App)

// Plugins
app.use(router)
app.use(store)

// Components
app.component('base-modal', BaseModal)

app.mount('#app')
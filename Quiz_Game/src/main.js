import { createApp } from 'vue.js'
import axios from 'axios.js'
import VueAxios from 'vue-axios.js'
import './assets/style.css'
import App from './App.vue'

createApp(App)
.use(VueAxios, axios)
.mount('#app')

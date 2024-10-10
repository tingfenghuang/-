import { createApp } from 'vue'
import App from './App.vue'
import router from './route/index'
import '@/styles/common.scss'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(createPinia())

app.use(router)
app.mount('#app')

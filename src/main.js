import { createApp } from 'vue'
import App from './App.vue'
import router from './route/index'
import '@/styles/common.scss'
import { createPinia } from 'pinia'
import { lazyLoad } from './dircetives'
import { componentsPlugin } from './components'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(lazyLoad)
app.use(componentsPlugin)

app.use(router)
app.mount('#app')
//定义全局指令


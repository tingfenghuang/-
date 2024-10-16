import { createApp } from 'vue'
import App from './App.vue'
import router from './route/index'
import '@/styles/common.scss'
import { createPinia } from 'pinia'
import { lazyLoad } from './dircetives'
import { componentsPlugin } from './components'


const app = createApp(App)
app.use(createPinia())
app.use(lazyLoad)
app.use(componentsPlugin)

app.use(router)
app.mount('#app')
//定义全局指令


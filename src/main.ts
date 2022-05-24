import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// @ts-ignore
app.config.globalProperties.$eel = window['eel']
app.mount('#app')

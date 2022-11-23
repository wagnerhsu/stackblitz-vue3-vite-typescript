import { createApp } from 'vue'
import App from './App.vue'
import VConsole from 'vconsole'

const vConsole = new VConsole()
console.log('vConsole enabled')

createApp(App).mount('#app')


import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from '@/router/index.js'


import App from './App.vue'
const app = createApp(App);

import { createPinia } from 'pinia'
const pinia = createPinia();

import { createPersistedState } from 'pinia-persistedstate-plugin'
const persist = createPersistedState();
pinia.use(persist)
app.use(pinia)
app.use(router);


import locale from 'element-plus/dist/locale/zh-cn.js'

app.use(ElementPlus, { locale })
app.use(ElementPlus);
app.mount('#app')

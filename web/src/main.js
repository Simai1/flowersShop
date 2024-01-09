import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js';

import '@/assets/layout/index.scss';
import components from '@/components/UI';
import router from './router/index';
import store from '@/store';

const app = createApp(App);

components.forEach(component=>(
    app.component(component.name, component)
))


app
.use(router)
.use(bootstrap)
.use(store)
.mount('#app')

 
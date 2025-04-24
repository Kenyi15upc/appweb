import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18n from "./i18n.js";
import PrimeVue from 'primevue/config';
import Material from '@primeuix/themes/material';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Drawer from 'primevue/drawer';
import Avatar from 'primevue/avatar';
import Menu from 'primevue/menu';
import Toolbar from 'primevue/toolbar';
import Tooltip from 'primevue/tooltip';
import Image from 'primevue/image';

const app = createApp(App);

app.use(i18n)
    .use(PrimeVue, {ripple:true, theme: {preset: Material }})
    .component('pv-button',Button)
    .component('pv-card', Card)
    .component('pv-select-button', Button)
    .component('pv-drawer', Drawer)
    .component('pv-avatar', Avatar)
    .component('pv-menu', Menu)
    .component('pv-toolbar', Toolbar)
    .component('pv-tooltip', Tooltip)
    .component('pv-image', Image)
    
    
    .mount('#app');





import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';

// import { gsap } from 'gsap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BootstrapVue3 } from 'bootstrap-vue-3';
import VueLazyLoad from 'vue3-lazyload';

// Textos intenacionalización
import i18nProgramacion from "./locales/i18nProgramacion.js";

// CSS generales
import './styles/global.scss';
import './assets/mainProgramacion.css';
import './assets/mainIlustracion.css';

const app = createApp(App);
app.use(i18nProgramacion)
app.use(router);
app.use(BootstrapVue3);
app.use(VueLazyLoad);
app.mount('#app');
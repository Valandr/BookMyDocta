import { createApp } from 'vue';
import AppRoot from '@/app/AppRoot.vue';
import { router } from '@/router';
import './styles/main.css';

window.__APP_CONFIG__ = {
  VITE_API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
};

createApp(AppRoot).use(router).mount('#app');

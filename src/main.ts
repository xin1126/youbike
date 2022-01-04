import { createApp } from 'vue';
import routers from './routes/index';
import App from './App.vue';
import './index.css';

createApp(App)
  .use(routers)
  .mount('#app');

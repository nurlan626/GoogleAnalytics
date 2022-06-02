import { createApp } from 'vue'
import App from './App.vue'
import VueGtag from "vue-gtag";

// import VueAnalytics from 'vue-analytics';
// import router from "./router"
 
// const app = createApp(App);

// createApp(App).use(VueAnalytics, {
//     id: 'G-759FCGFY76',
    
// }); 
createApp(App).use(VueGtag, {
    config: { id: "G-759FCGFY76" }
  }).mount("#app");
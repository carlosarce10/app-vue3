import { createApp } from "vue";
import { createPinia } from "pinia";
import "./scss/main.scss";
import App from "./App.vue";

// Vuetify
import createVuetify from "./plugins/vuetify.js";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia).use(createVuetify).mount("#app");

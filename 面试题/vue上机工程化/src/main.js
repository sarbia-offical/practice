import App from "./App.vue";
console.log("App", App);
import { creareApp } from "../modules/vue";
creareApp(App).mount("#app");

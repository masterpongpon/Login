import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyBpisg1flvVdGpBsuW1j2nk8cvhyi5ONa8",
    authDomain: "login-50774.firebaseapp.com",
    projectId: "login-50774",
    storageBucket: "login-50774.appspot.com",
    messagingSenderId: "718354644690",
    appId: "1:718354644690:web:18e16a41d613953fb8370b",
    measurementId: "G-3FMJYLFYJB"
  };
  firebase.initializeApp(firebaseConfig);
}
export const db = firebase.firestore();
export const auth = firebase.auth();

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
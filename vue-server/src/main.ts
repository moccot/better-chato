import { createApp } from 'vue/dist/vue.esm-bundler.js';
import { createRouter, createWebHashHistory } from 'vue-router';
import Chat from './Chat.vue';
import RegistrationForm from './RegistrationForm.vue';
import LoginForm from './LoginForm.vue';

// 1. Define route components.
// These can be imported from other files

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    { path: '/', component: Chat },
    { path: '/register', component: RegistrationForm },
    { path: '/login', component: LoginForm }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

const app = createApp({});

app.use(router);
app.mount('#root');

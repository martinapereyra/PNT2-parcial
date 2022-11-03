import Vue from "vue";
import VueRouter from "vue-router"

/* Componentes para rutas */
import Formulario from './componentes/Formulario.vue';
import Respuestas from './componentes/Respuestas.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', redirect: '/formulario'},
        {path : '/formulario' , component: Formulario },
        {path : '/respuestas' , component: Respuestas }

    ]

})
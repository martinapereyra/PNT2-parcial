<template>
  <div class = "container-fluid mt-3">
    <div class="jumbotron">
      <h1>TP4 - Programación nuevas tecnologías</h1>
      <br>
      <Navbar/>
      <br>
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
//import Formulario from './componentes/Formulario/IndexFormulario.vue';
import Navbar from './componentes/Navbar.vue';


export default {
  name: 'App',
  components: {
    Navbar

  }
}
</script>

<style>
  h1 {
    color: rgb(85, 30, 57);
  }
</style>

<template>

  <section class="src-componentes-respuestas">
    <div class="jumbotron">
      <h2>Respuestas</h2>
      <hr>
      <hr>
      <br>
      <table class="table table-light">
          <tr >
            <tr>
            <th>Numero de Pregunta</th>
            <th>Respuesta</th>
          </tr>
          <tr v-for="(pregunta,index) in preguntas" :key="index" >
            <td>{{ pregunta.numero }}</td>
            <td>{{pregunta.respuestas }}</td>
          </tr>
        </table>  
    </div>
  </section>
</template>
<script>

  export default  {
    name: 'src-componentes-respuestas',
    props: [],

    data () {
      return {
          preguntas : [
          { numero: 1, respuestas: ["b, d"] },
          { numero: 2, respuestas: ["c"] },
          { numero: 3, respuestas: ["b, e"] },
          ]
      }
    },
    methods: {
    computed: {
    }
  }
  }

</script>

<style scoped lang="css">
  .src-componentes-http-client {

  }

  .jumbotron {
    background-color: teal;
    color: white;
  }

  hr {
    background-color: #bbb;
  }

</style>

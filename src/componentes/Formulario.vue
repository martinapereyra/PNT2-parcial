<template>

  <section class="src-componentes-formulario">
    <div class="jumbotron">
      <h2>Ingreso de Gastos</h2>
      <hr>

      <vue-form :state="formstate" @submit.prevent="enviar()">
        
        <!-- Campo nombre -->
        <validate tag="div">
          <label for="nombre">Nombre</label>
          <input type="text" id="nombre" v-model="formData.nombre" required name="nombre" autocomplete="off" class="form-control"    :minlength="nombreMinLength"
            :maxlength="nombreMaxLength" no-espacios />
    
            <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo debe tener al menos entre {{ nombreMinLength }} y {{ nombreMaxLength }}  caracteres.
            </div>
            <div slot="no-espacios" class="alert alert-danger mt-1">
              Este campo no permite espacios intermedios
            </div>

          </field-messages>
        </validate>
        <br>

        <!-- Campo Descripción -->
        <validate tag="div">
          <label for="descripcion">Descripción</label>
          <input type="text" id="descripcion" v-model="formData.descripcion" required name="descripcion" autocomplete="off" class="form-control" />
          <field-messages name="descripcion" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Este campo es obligatorio</div>
          </field-messages>
        </validate>
        <br>
        
        <!-- Campo deuda -->
        <validate tag="div">
          <label for="importe">Importe</label>
          <input type="number" id="importe" v-model.number="formData.importe" required name="importe" autocomplete="off" class="form-control" />
          <field-messages name="importe" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Este campo es obligatorio</div>
          </field-messages>
        </validate>
        <br>
        
        <button v-if="gastos.length" class="btn btn-danger my-3 mr-3 " @click="limpiar()">Limpiar tabla</button>
        <button class="btn btn-success my-3" :disabled="formstate.$invalid" type="submit">Enviar</button>
      </vue-form>
      <br>
      <hr>
      <hr>

      <!-- Tabla para representar los datos ingresados -->
      <h2>Detalle de Gastos</h2>
      <hr>
         <label for="descripcion" class="fw-bold"><em>Presupuesto</em></label>
        <input type="number" id="presupuesto" required name="presupuesto" autocomplete="off" class="form-control" v-model="presupuesto" placeholder="Ingrese el presupuesto" />
      <br>


      <div v-if="gastos.length" class="table-responsive ">
        <table class="table table-light ">
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Importe</th>
            <th>Fecha</th>
          </tr>
          <tr v-for="(gasto,index) in gastos" :key="index" >
            <td>{{ gasto.nombre }}</td>
            <td>{{ gasto.descripcion }}</td>
            <td>$ {{ gasto.importe }}</td>
            <td>{{ gasto.fecha }}</td>
          </tr>
          <tr>
            <tr :style="{color: calcularTotal().color }">
            <th></th>
            <th>TOTAL</th>
            <th>$ {{calcularTotal().total}}</th>
          </tr>
        </table>
      </div>
      <h3 v-else class="alert alert-info">No hay gastos ingresados</h3>
    </div>
  </section>
</template>

<script>

  export default  {
    name: 'src-componentes-formulario',
    props: [],
    mounted () {

    },
    data () {
      return {
        formstate : {},
        formData : this.getInitialData(),
        gastos : [],
        nombreMinLength: 3,
        nombreMaxLength: 15,
        total: 0,
        presupuesto: "",
        gastoTopeMin: 1000,
        gastoTopeMax: 5000

      }
    },
    methods: {
      getInitialData() {
        return {
          nombre : null,
          descripcion: null,
          importe: null,
        }
      },

      limpiar(){
        this. gastos = [],
        this.presupuesto = "",
        this.total = 0
      },
      enviar() {
        let gasto = {...this.formData}
        this.total += gasto.importe
        gasto.fecha = new Date().toLocaleString()
        this.gastos.push(gasto)
        this.formData = this.getInitialData()
        this.formstate._reset()
      },
      
      calcularTotal() {
        let color = "#FF00FF"
        if(this.presupuesto > 0 ) this.gastoTopeMax = this.presupuesto;
        if(this.total < this.gastoTopeMin) color = "#14A44D"
        if(this.total > (this.gastoTopeMax)) color = "#E4A11B"

        return {
          total: this.total,
          color
        }
      }
    },
    computed: {
    }
}


</script>

<style scoped lang="css">
  .src-componentes-ingreso {

  }

  .jumbotron {
    background-color: rgb(34, 30, 97);
    color: white;
  }

  hr {
    background-color: #eee;
  }

  pre {
    color: white;
  }
</style>

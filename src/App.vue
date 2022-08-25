<template>
 <div class="container p-5">
 <h1 class="text-center border-bottom pb-3 mb-3">Vue 3 Showing PostgreSQL Data Using NodeJS Express WEB API V2</h1>
  <table class="table table-hover table-bordered mt-5">
    <thead>
      <tr>
        <th scope="col">Datetime</th>
        <th scope="col">w3</th>
        <th scope="col">u3</th>
      </tr>
    </thead>
    <tbody>
     <tr v-for="m in meas" :key="m.Datetime">
        <td>{{m.Datetime}}</td>
        <td>{{m.w3}}</td>
        <td>{{m.u3}}</td>
      </tr>    
    </tbody>
  </table>
  
 
  </div>


</template>

<script>
window.alert(5 + 6);
//importing bootstrap 5 and axios
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'
//call connection from file
import App from './services/connection'

export default {
  data(){
  return {
    meas:[]
    
    }
  },
 mounted () {
    this.listar()
  },
  methods: {
    async listar(){
      const {resp} = await App.getConnection();
      console.log(resp);
    }
  }
 
}
</script>
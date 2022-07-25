<template>
 <div class="container p-5">
 <h1 class="text-center border-bottom pb-3 mb-3">Vue 3 Showing PostgreSQL Data Using NodeJS Express WEB API</h1>
  <table class="table table-hover table-bordered mt-5">
    <thead>
      <tr>
        <th scope="col">pft3</th>
        <th scope="col">thdprom</th>
        <th scope="col">unixtime</th>
      </tr>
    </thead>
    <tbody>
     <tr v-for="user in users" :key="user.unictime">

        <td>{{user.pft3}}</td>
        <td>{{user.thdprom}}</td>
        <td>{{user.unixtime}}</td>
      </tr>

    </tbody>
  </table>


  </div>
</template>
<script>
//importing bootstrap 5 and axios
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'
export default {
  data(){
  return {
    users:[]

    }
  },
 mounted () {
    //api caling
     axios
      .get('http://150.136.7.153/22')
      .then((resp) => {
        console.log(resp);
        this.users = resp.data;
      })
  },

}
</script>
<!-- <template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->

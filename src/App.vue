<template>
  <v-app>
      <v-content>
        <v-container>
          <h1>{{ title }}</h1>

          <quote></quote>
        </v-container>
      </v-content>
  </v-app>
</template>

<script>
  /* Components */
  import Quote from './components/Quote'

  export default {
    data: function(){
      return {
        title: 'Cotizador de seguro de viajes'
      }
    },
    components: {
      'quote': Quote
    }
  }
</script>

<style>
</style>

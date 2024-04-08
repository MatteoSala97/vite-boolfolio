<script>
import axios from 'axios';
import MainApp from './components/MainApp.vue';
import AppHeader from './components/AppHeader.vue';

export default{
    components: {
      MainApp,
      AppHeader,

    },

    data(){{ 
      return{

      }
     }
    },

    methods:{
      
    },

    mounted(){
      
    }
}

</script>

<template>
<header>
  <AppHeader/>
</header>

<main>
  <!-- <MainApp/> -->
</main>

<router-view>

</router-view>

</template>

<style scoped>

</style>

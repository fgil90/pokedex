<script setup lang="ts">
import {RouterView } from "vue-router";
import MyHeader from "./components/myHeader.vue";
import MyBody from "./components/myBody.vue";
import MyFooter from "./components/myFooter.vue";
import { ref } from "vue";

const currentData = ref({});

async function getPokemonByName(name:string){
  try {
    name = name.toLowerCase();
    let response: any = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    let data: any = await response.json();
    console.log(data);
    currentData.value = data;
  } catch (error) {
    alert(`Pokemon ${name} does not exist`);
    console.log(error);
  }
}

</script>

<template>  
  <MyHeader @connectAPI="getPokemonByName" ></MyHeader>
  <MyBody :pokeData="currentData"></MyBody>
  <MyFooter></MyFooter>
  <RouterView />
</template>

<style scoped>

</style>

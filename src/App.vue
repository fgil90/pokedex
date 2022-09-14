<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import MyHeader from "./components/myHeader.vue";
import MyBody from "./components/myBody.vue";
import MyFooter from "./components/myFooter.vue";
import { ref } from "vue";

const currentData = ref({});

async function logTest(value:string){
  try {
    let response: any = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`);
    let data: any = await response.json();
    console.log(data);
    currentData.value = data;
  } catch (error) {
    alert(`Pokemon ${value} does not exist`);
    console.log(error);
  }
}

</script>

<template>  
  <MyHeader @test="logTest" ></MyHeader>
  <MyBody :pokeData="currentData"></MyBody>
  <MyFooter></MyFooter>
  <RouterView />
</template>

<style scoped>

</style>

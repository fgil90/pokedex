<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import MyHeader from "./components/myHeader.vue";
import MyFooter from "./components/myFooter.vue";

</script>

<template>  
  <MyHeader></MyHeader>
  <MyFooter></MyFooter>
  <RouterView />
</template>

<style scoped>
</style>

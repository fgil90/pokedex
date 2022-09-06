<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import MyHeader from "./components/myHeader.vue";
import MyBody from "./components/myBody.vue";
import MyFooter from "./components/myFooter.vue";

</script>

<template>  
  <MyHeader></MyHeader>
  <MyBody></MyBody>
  <MyFooter></MyFooter>
  <RouterView />
</template>

<style scoped>
</style>

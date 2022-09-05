<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import MyHeader from "./components/myHeader.vue";
</script>

<template>
  <MyHeader></MyHeader>

  <RouterView />
</template>

<style scoped>
</style>

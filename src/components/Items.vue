<script setup lang='ts'>

import { ref } from 'vue';
import MoveCard from './MoveCard.vue'
import * as Helper from "../scripts/scripts";

const itemList = ref([{ name: "", url: "" }]);

Helper.getList('item').then((response) => { itemList.value = response });

</script>

<template>
    <!-- TITLE -->
    <div class="title">
        <h1 class="h1 text-primary text-center m-3">Item List</h1>

    </div>
    <!-- /TITLE -->
    <!-- CARDS -->
    <div class="container card-body d-flex flex-wrap mb-3">
        <MoveCard v-for="item in itemList" :key="item.name" :move-object="item"></MoveCard>
    </div>
    <!-- /CARDS -->

</template>

<style scoped>
.container {
    justify-content: center;
}

.card-body {
    padding: 0px !important;
}
</style>
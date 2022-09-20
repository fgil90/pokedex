<script setup lang='ts'>

import { ref } from 'vue';
import MoveCard from './MoveCard.vue'
import * as Helper from "../scripts/scripts";

const abilityList = ref([{name:"", url:""}]);

Helper.getList('ability').then((response) => { abilityList.value = response });
    
</script>

<template>
    <!-- TITLE -->
    <div class="title">
    <h1 class="h1 text-primary text-center m-3">Abilities List</h1>
        
    </div>
    <!-- /TITLE -->    
    <!-- CARDS -->
    <div class="container card-body d-flex flex-wrap mb-3">
        <MoveCard v-for="move in abilityList" :key="move.name" :move-object="move"></MoveCard>
    </div>
    <!-- /CARDS -->

</template>

<style scoped>
    .container{
        justify-content: center;
    }
    
    .card-body{
        padding: 0px !important;
    }
    </style>
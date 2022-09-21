<script setup lang='ts'>

import { ref } from 'vue';
import PokemonCard from './PokemonCard.vue'
import * as Helper from "../scripts/scripts";

const pokemonList = ref([{ name: "", url: "" }]);

Helper.getList('pokemon').then((response)=>{pokemonList.value = response});

</script>

<template>      
    <!-- TITLE -->
    <div class="title">
        <h1 class="h1 text-primary text-center m-3">Choose your pokemon</h1>        
    </div>
    <!-- /TITLE -->

    <!-- CARDS -->
    <div class="container card-body d-flex flex-wrap mb-3">
        <PokemonCard v-for="pkmn in pokemonList" :key="pkmn.name" :pkmn-object="pkmn"></PokemonCard>
    </div>
    <!-- /CARDS -->

</template>

<style scoped>
.container{
    display: flex;
    justify-content: center;
}

.card-body {
    padding: 0px !important;
}
</style>
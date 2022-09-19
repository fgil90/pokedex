<script setup lang='ts'>

import { ref } from 'vue';
import PokemonCard from './PokemonCard.vue'

const pokemonList = ref([{name:"", url:""}]);

async function getPokemonList(off:number=0, limit:number=20){
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${off}&limit=${limit}`);
        let data = await response.json();
        pokemonList.value = await data.results;
        console.log(pokemonList.value);
        
        return await data;
    } catch (error) {
        console.log(error);
    }
}

let currentPokemonData = getPokemonList(0,20)
// console.log(currentPokemonData);


</script>

<template>
    
    
    <!-- TITLE -->
    <div class="title">
        <h1 class="h1 text-primary text-center m-3">Escolha seu pokemon</h1>
        
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
    justify-content: center;
}

.card-body{
    padding: 0px !important;
}
</style>
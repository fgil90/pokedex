<script setup lang='ts'>

    import { ref } from 'vue';
    import MoveCard from './MoveCard.vue'
    
    const moveList = ref([{name:"", url:""}]);
    
    async function getMoveList(off:number=0, limit:number=20){
        try {
            let response = await fetch(`https://pokeapi.co/api/v2/ability/?offset=${off}&limit=${limit}`);
            let data = await response.json();
            moveList.value = await data.results;
            console.log(moveList.value);
            
            return await data;
        } catch (error) {
            console.log(error);
        }
    }
    
    let currentmoveData = getMoveList(0,20)
    // console.log(currentmoveData);
        
    </script>

<template>
    <!-- TITLE -->
    <div class="title">
    <h1 class="h1 text-primary text-center m-3">Abilities List</h1>
        
    </div>
    <!-- /TITLE -->    
    <!-- CARDS -->
    <div class="container card-body d-flex flex-wrap mb-3">
        <MoveCard v-for="move in moveList" :key="move.name" :move-object="move"></MoveCard>
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
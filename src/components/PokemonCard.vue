<script setup lang="ts">
  import { ref } from 'vue';

  const props:any = defineProps(['pkmnObject']);
  let pokeName:string = props.pkmnObject.name as string;
  let pokeUrl:string = props.pkmnObject.url as string;
  let pokeId:string = pokeUrl.split('/').reverse()[1]
  
  let pkmnImg = ref("");
  pkmnImg.value = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeId}.png`

  function getName() {
    let name: string = pokeName;
    if (!name) return "";
    return name.charAt(0).toUpperCase().concat(name.slice(1));
  }

</script>


<template>
  <!-- we have to see if there is a better way of doing this without inline styling -->
  <div class="div-pkn m-2 d-flex bg-pokemon" :style="{backgroundImage: 'url('+ pkmnImg + ')'}"> 
    <div class="card-body">
      <h5 class="card-title text-primary">{{getName()}}</h5>      
    </div>
  </div>
</template>

<style scoped>
h5{
      color: black !important;
      font-weight: bold;
      margin: 0;
      padding: 0;
      text-align: center;
  }

.div-pkn{
    width: 140px    ;
    height: 140px;
    border-radius: 10px;
}
.bg-pokemon{
    display: block;
    background-color: lightgray;
    background-size: cover;    
}
.badge{
    margin: 0px;
    border: 0px;
    align-self: right;
    align-self: bottom;
}
</style>
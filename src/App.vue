
  <!-------------------------- SCRIPT ------------------------>
<script setup lang="ts">
import {RouterView } from "vue-router";
import { ref } from "vue";
import PokemonLogoIcon from "../src/components/icons/IconPokemonLogo.vue"
import SearchIcon from "../src/components/icons/IconSearch.vue"
import IconFacebook from "./components/icons/IconFacebook.vue"
import IconTwitter from "./components/icons/IconTwitter.vue"
import IconInstagram from "./components/icons/IconInstagram.vue"
import IconLinkedin from "./components/icons/IconLinkedin.vue"
import IconGoogleplay from "./components/icons/IconGoogleplay.vue"
import IconGit from "./components/icons/IconGit.vue"
import Pokemons from "./components/Pokemons.vue"
import MyBody  from "./components/MyBody.vue"
import Moves from "./components/Moves.vue"
import Items from "./components/Items.vue"
import Ability from "./components/Ability.vue"

let searchValue: any;
let state = ref("details");

const currentData = ref({});

function setState(value:string):void{
  state.value = value;
}

async function getPokemonByName(name:string){
  try {
    name = name.toLowerCase();
    let response: any = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    let data: any = await response.json();
    console.log(data);
    currentData.value = data;
  } catch (error) {
    alert(`Pokemon ${name} does not exist`);
    console.log(error);
  }
}

</script>
  <!-------------------------- /SCRIPT ------------------------>

<template>  

  <!-------------------------- HEADER ------------------------>
  <header id="myHeader" @connectAPI="getPokemonByName">
    <nav class="navbar navbar-expand-lg navbar-dark d-flex ml-auto">
      <a class="navbar-brand" href="#" @click="setState('details')" style="font-family: 'Pokemon Hollow'; font-size: 25px;">
        <PokemonLogoIcon class="pokemon-logo"/>
          </a>                       
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
          <div >

          </div>
          
          <div class="collapse navbar-collapse mr-1" id="navbarNavDropdown">
            <a class="navbar-brand" href="#"  @click="setState('pokemon')">Pokemon</a>
            <a class="navbar-brand" href="#"  @click="setState('moves')">Moves</a>
            <a class="navbar-brand" href="#"  @click="setState('itens')">Items</a>
            <a class="navbar-brand" href="#"  @click="setState('ability')">Ability</a>
            <!-- <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
              <a class="nav-link" href="#">
                <img src="../assets/icon-home.svg" height="50"/><small>Home</small><span class="sr-only">(current)</span>
              </a>
                  </li>
                  <a class="nav-link dropdown-toggle mr-5" href="#" role="button" data-toggle="dropdown"
                  aria-expanded="false"><img src="../assets/icon-folder.svg" height="50"/><small>Emulators</small></a>
                  <div class="dropdown-menu bg-dark mb-2">
                      <a class="dropdown-item text-light" href="#">Game Boy Colors</a>
                      <a class="dropdown-item text-light" href="#">Game Boy Advanced</a>
                      <a class="dropdown-item text-light" href="#">Nintendo DS</a>
                      <a class="dropdown-item text-light" href="#">Game Cube</a>                    
                  </div>
              </ul> -->
          </div>
          <div class="search-bar">
              <form class="form-inline" @submit.prevent="$emit('connectAPI', searchValue)">
                  <div class="input-group">
                      <!-- SEARCH IMP -->
                      <input v-model="searchValue" type="text" class="form-control" placeholder="Search" aria-label="Username"
                          aria-describedby="basic-addon1">
                      <div class="input-group-append">
                          <button 
                              class="input-group-text" 
                              id="basic-addon2"                              
                          ><SearchIcon class="search-icon"/></button>
                      </div>
                  </div>
              </form>              
          </div>
      </nav>
  </header>
  <!------------------------- /HEADER ------------------------>



  <!-------------------------- HTML BODY --------------------->
  <MyBody v-if="state === 'details'" :pokeData="currentData"></MyBody>
  <Pokemons v-if="state === 'pokemon'"></Pokemons>
  <Moves v-if="state === 'moves'"></Moves>
  <Items v-if="state === 'itens'"></Items>
  <Ability v-if="state === 'ability'"></Ability>
  <!------------------------- /HTML BODY --------------------->
  


    
  <!------------------------- FOOTER ------------------------->
  <footer class="text-center text-white">
        <!------------------- Grid container ----------------->
        <div class="container p-1 pb-0">
            <!------------ Section: Social media ------------->
            <small>Check it out to learn more about </small>
            <section class="">
                
                <!------------- Facebook --------------------->
                <a class="btn btn-floating m-0 p-0" href="https://www.facebook.com/Pokemon" role="button"
                ><IconFacebook class="facebook-logo"/></a>
                
                <!------------- Twitter ---------------------->
                <a class="btn  btn-floating  m-0 p-0" href="https://twitter.com/Pokemon" role="button"
                ><IconTwitter class="twitter-logo"/></a>
                
                <!------------- Instagram --------------------->
                <a class="btn  btn-floating  m-0 p-0" href="https://www.instagram.com/pokemon/" role="button"
                ><IconInstagram class="instagram-logo"/></a>
                
                <!------------- Linkedin ---------------------->
                <a class="btn  btn-floating  m-0 p-0" href="https://www.linkedin.com/company/pokemon/" role="button"
                ><IconLinkedin class="linkedin-logo"/></a>
                
                <!------------- Pokemon Go -------------------->
                <a class="btn  btn-floating  m-0 p-0" href="https://play.google.com/store/apps/details?id=com.nianticlabs.pokemongo&hl=pt_BR&gl=US" role="button"
                ><IconGoogleplay class="gplay-logo"/></a>

                <!--------------- Github ---------------------->
                <a class="btn  btn-floating  m-0 p-0" href="https://github.com/topics/pokemon" role="button"
                ><IconGit class="git-logo"/></a>

            </section>
            <!------------ Section: Social media -------------->
        </div>
        <!------------------  Grid container ------------------>

        <!-- ------------------ COPYRIGHT --------------------->        
        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
            <small>© 2022 Copyright - Produced by <a class="text-white git-link" href="https://github.com/fgil90">Felipe Gil</a> <span>e</span> <a class="text-white git-link" href="https://github.com/lindotex">Alisson Lindote </a></small>
        </div>
        <!-- ----------------- /COPYRIGHT ---------------------->
  </footer>
  <!-- -----------------------/FOOTER------------------------->

  <RouterView />

</template>

<!---------------------------- STYLE SCOPED ------------------>
<style scoped>

/*--------------------------- HEADER -----------------------------*/
header{
  background-color: transparent;
}

@media (max-width: 767.98px) {
  search-bar{
    width: 100% !important;
  }
  
}

.pokemon-logo{
    height: 60px;
    width: 140px;
}
.search-icon{
    height: 20px;
    width: 20px;
}
.input-group{
    width: 100%;
}

/*--------------------------- FOOTER --------------------------- */
footer section{
  min-height: 50px;
  display: flex;
  flex-direction: row;
  align-self: center;
  align-content: center;
  justify-content: center;
}

/* MEDIA LOGOS ------------------*/
.facebook-logo{
  height: 30px;
  width: 30px;
  color: #3b5998;
  padding: 0;
  margin: 0;
}
.facebook-logo:hover{
  height: 48px;
  width: 48px;
  transition: 200ms;
}
.twitter-logo{
  height: 30px;
  width: 50px;
  color: #00acee;  
}
.twitter-logo:hover{
  height: 48px;
  width: 48px;
  transition: 200ms;
}
.instagram-logo{
  height: 30px;
  width: 30px;  
}
.instagram-logo:hover{
  height: 48px;
  width: 48px;
  transition: 200ms;
}
.linkedin-logo{
  height: 30px;
  width: 50px;  
}
.linkedin-logo:hover{
  height: 48px;
  width: 48px;
  transition: 200ms;
}
.gplay-logo{
  height: 26px;
  width: 28px;  
}
.gplay-logo:hover{
  height: 48px;
  width: 48px;
  transition: 200ms;
}
.git-logo{
  height: 28px;
  width: 44px;  
}
.git-logo:hover{
  height: 48px;
  width: 48px;
  transition: 200ms;
}

/* GITHUB LINKS ------------------*/
.git-link{
  text-decoration: underline;
}
</style>

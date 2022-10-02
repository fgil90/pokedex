<script setup lang="ts">
const props: any = defineProps(['pokeData'])

</script>

<template>
    <div>

        <!-- POKEMON NAME AND CHANGE-ARROW BUTTONS -->
        <div class="container mt-3">
            <div class="row">
                <button class="btn bg-dark px-5 mx-1"><strong>  &lt;</strong></button>                
                <div class="block w-75 name-text bg-light text-dark ctn mx-4">
                    <h2><small class="h6"># 155</small><strong> Cyndaquil</strong></h2>
                </div>
                <button class="btn bg-dark px-5  mx-1"><strong>  ></strong></button>                
            </div>
        </div>
        <!-- /POKEMON NAME AND CHANGE-ARROW BUTTONS -->

        <!-- POKEMON IMAGE CARD -->
        <div class="container mt-3 ">
            <div class="row">
                <div class="col-sm  pkn-picture ctn">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/155.png" width="100%" height="100%"/>                    
                </div>
                <div class="col-sm  pt-1 p-3 ctn text-dark">
                    <h2><strong>Description:</strong></h2>
                    <h3>Cyndaquil protects itself by flaring up the flames on its back. The flames are vigorous if the Pokémon is angry. However, if it is tired, the flames splutter fitfully with incomplete combustion.</h3>
                </div>
            </div>
        </div>
        <!-- /POKEMON IMAGE CARD -->

        <!-- POKEMON INFORMATION SECTION  -->
        <div class="container mt-1s pb-3 mb-3">

            <!-- PKM INFO SECTION DIVS -->
            <div class="row ">

                <!-- SIZE,WEIGHT AND GENDER ASIDE SECTION -->
                <div class="col-sm mt-1 p-3 ctn">
                    <h3 class="bg-dark  brd-1 my-1"><strong>Size</strong></h3>
                    <p class="bg-info  brd-1 my-1">0.5 m{{props.pokeData.height}}</p>
                    <h3 class="bg-dark  brd-1 my-1"><strong>Weight</strong></h3>
                    <p class="bg-info  brd-1 my-1">7.9 kg{{props.pokeData.weight}}</p>
                    <h3 class="bg-dark  brd-1 my-1"><strong>Gender</strong></h3>
                    <p class="bg-info  brd-1 my-1">50% M | 50% F</p>
                </div>
                <!-- /SIZE,WEIGHT AND GENDER ASIDE SECTION -->

                <!-- PKM TYPE, WEAKNESS AND STRONGNESS -->
                <div class="col-sm mt-1 p-3  ctn">
                    <h3 class="bg-dark  brd-1 my-1"><strong>Pokemon Type</strong></h3>
                    <div class="d-flex">
                        <h4><span class="m-1 badge badge-fire">Fire</span></h4>
                        <h4><span class="m-1 badge badge-bug"></span></h4>
                    </div>
                    <h3 class="bg-dark  brd-1 my-1"><strong>Strong against</strong></h3>
                    <div class="d-flex">
                        <h4><span class="m-1 badge badge-grass">Grass</span></h4>
                        <h4><span class="m-1 badge badge-bug">Bug</span></h4>
                    </div>
                    <h3 class="bg-dark  brd-1 my-1"><strong>Weakeness</strong></h3>
                    <div class="d-flex">
                        <h4><span class="m-1 badge badge-water">Water</span></h4>
                        <h4><span class="m-1 badge badge-ice">Ice</span></h4>
                    </div>
                </div>
                <!-- /PKM TYPE, WEAKNESS AND STRONGNESS -->

                <!-- PKM ABILITIES -->
                <div class="col-sm mt-1 p-3 ctn">
                    <h3 class="bg-dark  brd-1 my-1"><strong>Passive Abilities</strong></h3>
                    <ul>
                        <li class="bg-info  brd-1 my-1">Blaze</li>
                        <li class="bg-info  brd-1 my-1">Flash-fire</li>                        
                    </ul>
                </div>
                <!-- /PKM ABILITIES -->

                <!-- PKM MOVE LIST -->
                <div class="col-sm mt-1 p-3 ctn">
                    <h3 class="bg-dark  brd-1 my-1"><strong>Move List</strong></h3>
                    <h6 class="text-dark  brd-1 my-1">This pokemon has 67 possible moves</h6>
                    <ul>
                        <li class="bg-info  brd-1 my-1">cut</li>
                        <li class="bg-info  brd-1 my-1">double-kick</li>
                        <li class="bg-info  brd-1 my-1">headbutt</li>
                        <li class="bg-info  brd-1 my-1">tackle</li>
                        <li class="bg-info  brd-1 my-1">body-slam</li>
                        <li class="bg-info  brd-1 my-1">...</li>
                    </ul>
                </div>
                <!-- /PKM MOVE LIST -->

            </div>
            <!-- /PKM INFO SECTION DIVS -->

        </div>
        <!-- /POKEMON INFORMATION SECTION  -->

    </div>
    <!-- BAD PRACTICE. LINKS SHOULD NEVER BE ON THE BODY OF THE HTML. -->
    <link rel="stylesheet" href="../assets"> 

</template>

<style scoped>

ul{
    padding-inline-start: 0px;
}

.ctn {
    border-radius: 30px;
    background: var(--pkn-dark);
    margin: 2px;
}
.brd-1{
    border-radius: 10px;
    align-self: center;
    text-align: center;
}

.name-text {
    text-align: center;
}

.img-fluid {
    border-radius: 20px;
    padding: 5px;
}

.pkn-picture {
    width: 100%;
    max-width: 400px;
}

.bg-dark{    
    border-radius: 20px;
    box-shadow: 5px;
}
.sm-border {
    border: 1px solid red;
}

li {
    list-style: none;
}
</style>


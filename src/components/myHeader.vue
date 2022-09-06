<script setup lang="ts">
    import PokemonLogoIcon from "./icons/IconPokemonLogo.vue"
</script>

<template>
    <header id="myHeader">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark ml-auto">
            <a class="navbar-brand" href="#" style="font-family: 'Pokemon Hollow'; font-size: 25px;">
                <PokemonLogoIcon class="pokemon-logo"/>
            </a>                       
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <IconCommunity/>        
        <div class="collapse navbar-collapse mr-4" id="navbarNavDropdown">
                <div>
                    <form class="form-inline m-auto">
                        <div class="input-group">
                            <!-- SEARCH IMPUT -->
                            <input type="text" class="form-control" placeholder="Search" aria-label="Username"
                                aria-describedby="basic-addon1">
                            <div class="input-group-append">
                                <span class="input-group-text" id="basic-addon2"><img src="../assets/icon-search.svg" height="20"></span>
                            </div>
                        </div>
                    </form>
                </div>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">
                            <img src="../assets/icon-home.svg" height="50"/><small>Home</small><span class="sr-only">(current)</span>
                        </a>
                    </li>
                    <a class="nav-link dropdown-toggle mr-5" href="#" role="button" data-toggle="dropdown"
                    aria-expanded="false"><img src="../assets/icon-folder.svg" height="50"/><small>Emulators</small></a>
                    <div class="dropdown-menu bg-dark">
                        <a class="dropdown-item text-light" href="#">Game Boy Colors</a>
                        <a class="dropdown-item text-light" href="#">Game Boy Advanced</a>
                        <a class="dropdown-item text-light" href="#">Nintendo DS</a>
                        <a class="dropdown-item text-light" href="#">Game Cube</a>
                        
                    </div>
                </ul>
            </div>
        </nav>
    </header>
</template>

<style scoped>
.pokemon-logo{
    height: 80px;
    width: 120px;
}
</style>
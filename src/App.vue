<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header id="header">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#" style="font-family: 'Pokemon Hollow'; font-size: 25px;">Pokemon</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ml-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="#">Página Inicial <span class="sr-only">(current)</span></a>
                    </li>
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                        Emuladores
                    </a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Game Boy Colors</a>
                        <a class="dropdown-item" href="#">Game Boy Advanced</a>
                        <a class="dropdown-item" href="#">Nintendo DS</a>
                        <a class="dropdown-item" href="#">Game Cube</a>
                    </div>
                  </li>
                  <form class="form-inline">
                      <div class="input-group">
                      <div class="input-group-prepend">
                          <span class="input-group-text ml-3" id="basic-addon1">Pokemon</span>
                      </div>
                      <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
                      </div>
                  </form>
            </ul>
          </div>
        </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

<template>
  <div class="div-pkn m-2 d-flex bg-pokemon">
    <div class="card-body">
      <h5 class="card-title text-primary">Cyndaquil</h5>      
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
    background: url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/155.png);
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
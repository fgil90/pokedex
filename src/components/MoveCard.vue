<script setup lang="ts">

    const props:any = defineProps(['moveObject']);
    let moveName:string = props.moveObject.name as string;
    let moveUrl:string = props.moveObject.url as string;
    let moveId:string = moveUrl.split('/').reverse()[1]

    function getMove() {
      let name: string = moveName;
      if (!name) return "";
      return name.charAt(0).toUpperCase().concat(name.slice(1));
    }
  
</script>

<template>
    <div class="m-4 d-flex m-2">
        <div class="card">
            <button class="btn card-body text-primary ">
                {{getMove()}}
            </button>
        </div>
    </div>
</template>

<style scoped>
    button{
        width: 200px;
    }
</style>
<script setup lang="ts">

const props: any = defineProps(['moveObject']);
let moveName: string = props.moveObject.name as string;
let moveUrl: string = props.moveObject.url as string;
let moveId: string = moveUrl.split('/').reverse()[1]

function getMoveName() {
    //Makes the name have Title Case
    let name: string = moveName;
    if (!name) return "";
    let nameArr: Array<string> = name.split('-');
    nameArr = nameArr.map(word => {
        return word.charAt(0).toUpperCase().concat(word.slice(1));
    })
    return nameArr.join(" ");
}

</script>

<template>
    <div class="m-4 d-flex m-2">
        <div class="card">
            <button class="btn card-body text-primary ">
                {{getMoveName()}}
            </button>
        </div>
    </div>
</template>

<style scoped>
button {
    width: 200px;
}
</style>
<script setup lang="ts">
const props: any = defineProps(['pokeData'])

</script>

<template>
    <div>
        <div class="container  mt-3">
            <div class="row">
                <div class="col-1 col-sm-1  sm-border">
                    <p>&lt;</p>
                </div>
                <div class="col-9 col-sm-10 sm-border name-text bg-pkn-yellow">
                    <h2>Cyndaquil</h2>
                </div>
                <div class="col-1 col-sm-1 sm-border">
                    <p>></p>
                </div>
            </div>
        </div>

        <div class="container mt-3 ">
            <div class="row">
                <div class="col-sm sm-border pkn-picture ctn">
                    <img src="../assets/images/Cyndaquil.png" class="img-fluid" />
                </div>
                <div class="col-sm sm-border pt-1 p-3 ctn">
                    <h5>Some Title</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi animi provident id eligendi
                        officiis
                        ad dolores minus nam magni! Dolores quis, qui magnam veniam dolore iste ab est illum vero!</p>
                </div>
            </div>
        </div>

        <div class="container mt-1s pb-3 mb-3">
            <div class="row ">
                <div class="col-sm mt-1 p-3 sm-border ctn">
                    <h3>Size:</h3>
                    <p>{{props.pokeData.height}} ft</p>
                    <h3>Weight</h3>
                    <p>{{props.pokeData.weight}} lb</p>
                    <h3>Gender</h3>
                    <p>50% M | 50% F</p>
                </div>
                <div class="col-sm mt-1 p-3 sm-border ctn">
                    <h3>Pokemon Type</h3>
                    <div class="d-flex">
                        <h4><span class="m-1 badge badge-fire">Fire</span></h4>
                        <h4><span class="m-1 badge badge-bug"></span></h4>
                    </div>
                    <h3>Strong against</h3>
                    <div class="d-flex">
                        <h4><span class="m-1 badge badge-grass">Grass</span></h4>
                        <h4><span class="m-1 badge badge-bug">Bug</span></h4>
                    </div>
                    <h3>Weakeness</h3>
                    <div class="d-flex">
                        <h4><span class="m-1 badge badge-water">Water</span></h4>
                        <h4><span class="m-1 badge badge-ice">Ice</span></h4>
                    </div>
                </div>
                <div class="col-sm mt-1 p-3 sm-border ctn">
                    <h3>Passive Abilities List</h3>
                    <ul>
                        <li>bla bla bla</li>
                        <li>bla bla bla</li>
                        <li>bla bla bla</li>
                    </ul>
                </div>
                <div class="col-sm mt-1 p-3 sm-border ctn">
                    <h3>Move List</h3>
                    <ul>
                        <li>bla bla bla</li>
                        <li>bla bla bla</li>
                        <li>bla bla bla</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- BAD PRACTICE. LINKS SHOULD NEVER BE ON THE BODY OF THE HTML. -->
    <link rel="stylesheet" href="../assets"> 

</template>

<style scoped>
.ctn {
    border-radius: 30px;
    background: var(--pkn-black);
    margin: 2px;
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

.sm-border {
    border: 1px solid red;
}

li {
    list-style: none;
}
</style>

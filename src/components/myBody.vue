<template>
    <link rel="stylesheet" href="../assets">    
    <div class="container  mt-3">
        <div class="row">
            <div class="col-1 col-sm-1  bordinha"><p>&lt;</p></div>
            <div class="col-9 col-sm-10 bordinha name-text bg-pkn-yellow"><h2>Cyndaquil</h2></div>
            <div class="col-1 col-sm-1 bordinha"><p>></p></div>        
        </div>
    </div>

    <div class="container mt-3 ">    
        <div class="row">
            <div class="col-sm bordinha pkn-picture ctn">
                <img src="../assets/images/Cyndaquil.png" class="img-fluid" />
            </div> 
            <div class="col-sm bordinha pt-1 p-3 ctn">
                <h5>Vernaculos textuais</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi animi provident id eligendi officiis ad dolores minus nam magni! Dolores quis, qui magnam veniam dolore iste ab est illum vero!</p>
            </div>
        </div>
    </div>
    
    <div class="container mt-1s pb-3 mb-3">    
        <div class="row ">
            <div class="col-sm mt-1 p-3 bordinha ctn">
                <h3>Size:</h3><p>4' 2"</p>
                <h3>Weight</h3><p>34 oz</p>
                <h3>Gender</h3><p>Colorfull</p>
            </div>
            <div class="col-sm mt-1 p-3 bordinha ctn">
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
            <div class="col-sm mt-1 p-3 bordinha ctn">
                <h3>Passive Abilities List</h3>              
                <ul>
                    <li>bla bla bla</li>
                    <li>bla bla bla</li>
                    <li>bla bla bla</li>
                </ul>                
            </div>
            <div class="col-sm mt-1 p-3 bordinha ctn">
                <h3>Move List</h3>              
                <ul>
                    <li>bla bla bla</li>
                    <li>bla bla bla</li>
                    <li>bla bla bla</li>
                </ul>
            </div>
        </div>
    </div>
    
</template>

<style scoped>
.ctn{
    border-radius: 30px;
    background: var(--pkn-black);
    margin: 2px;
}
.name-text{
    text-align: center;
}
.img-fluid{
    border-radius: 20px;
    padding: 5px;
}
.pkn-picture{
    width: 100%;
    max-width: 400px;
}
.bordinha {
    border: 1px solid red;
}

li{
    list-style: none;
}

</style>
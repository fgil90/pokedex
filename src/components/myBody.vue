<template>
    
    <div class="container mt-3">
        <div class="row">
            <div class="col-1 col-sm-1  bordinha"><p>&lt;</p></div>
            <div class="col-9 col-sm-10 bordinha name-text"><h2>Cyndaquil</h2></div>
            <div class="col-1 col-sm-1 bordinha"><p>></p></div>        
        </div>
    </div>

    <div class="container mt-3 ">    
        <div class="row">
            <div class="col-sm bordinha pkn-picture">
                <img src="../assets/images/Cyndaquil.png" class="img-fluid" />
            </div> 
            <div class="col-sm bordinha pt-1">
                <h5>Vernaculos textuais</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi animi provident id eligendi officiis ad dolores minus nam magni! Dolores quis, qui magnam veniam dolore iste ab est illum vero!</p>
            </div>
        </div>
    </div>
    
    <div class="container mt-3 pb-3">    
        <div class="row">
            <div class="col-sm mt-3 bordinha">
                <h3>Size:</h3><p>4' 2"</p>
                <h3>Weight</h3><p>34 oz</p>
                <h3>Gender</h3><p>Colorfull</p>
            </div>
            <div class="col-sm mt-3 bordinha">
                <h3>Type</h3><p>Fire</p>
                <h3>Strong against</h3><p>grass</p>
                <h3>Weakeness</h3><p>water</p>
            </div>
            <div class="col-sm mt-3 bordinha">
                <h3>Passive Abilities List</h3>              
                <ul>
                    <li>bla bla bla</li>
                    <li>bla bla bla</li>
                    <li>bla bla bla</li>
                </ul>                
            </div>
            <div class="col-sm mt-3 bordinha">
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
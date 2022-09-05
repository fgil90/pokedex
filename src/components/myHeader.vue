<template>
    <header id="myHeader">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#" style="font-family: 'Pokemon Hollow'; font-size: 25px;">Pokemon</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Página Inicial <span class="sr-only">(current)</span></a>
                    </li>
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                        aria-expanded="false">
                        Emuladores
                    </a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Game Boy Colors</a>
                        <a class="dropdown-item" href="#">Game Boy Advanced</a>
                        <a class="dropdown-item" href="#">Nintendo DS</a>
                        <a class="dropdown-item" href="#">Game Cube</a>
                    </div>

                    <form class="form-inline">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text ml-3" id="basic-addon1">Pokemon</span>
                            </div>
                            <input type="text" class="form-control" placeholder="Username" aria-label="Username"
                                aria-describedby="basic-addon1">
                        </div>
                    </form>
                </ul>
            </div>
        </nav>
    </header>
</template>
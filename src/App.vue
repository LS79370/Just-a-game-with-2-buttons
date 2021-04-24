<template>
    <div class="hello">
        <h1>Test de bouton</h1>
        <p>I receive Money</p>
        <p>
            You <strong><em>receive</em></strong> Nothing <br>
            Do you accept?
        </p>
        <div class="button">
            <button id="button-yes" onclick="yes(); compte()">Accept</button>
            <button id="button-no" onclick="no(); compte()">Refuse</button>
            <p id="Resultat"> </p>
            <div id="count"></div>
        </div>
    </div>
</template>

<script>
    function yes() {
        document.getElementById("Resultat").innerHTML = "Merci, nous nous reverrons jamais.";
    }
    function no() {
        document.getElementById("Resultat").innerHTML = "Dommage, nous avions tellement à faire...";
    }
    function compte() {
        if (typeof (Storage) !== "undefined") {
            if (localStorage.clicked) {
                localStorage.clicked = Number(localStorage.clicked) + 1;
            }
            else {
                localStorage.clicked = 1;
            }
        }
        document.getElementById("count").innerHTML = "Vous avez cliqué sur un bouton " + localStorage.clicked + " fois!";
    }
</script>

<style>
#app {
}
</style>

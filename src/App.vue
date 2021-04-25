<script>
    export default {
        el: "#hello",
        data() {
            return {
                index: 0,
                result: "",
                test: require(".\\assets\\img\\sweat.png"),
                index: 0,
                image: null,
                items: [
                { test: require(".\\assets\\img\\choice.png") },
                { test: require(".\\assets\\img\\sweat.png") },
                { test: require(".\\assets\\img\\thumbup.png") },
                { test: require(".\\assets\\img\\twice.png") }
                ]
            }
        },
        methods: {
            yes: function () {
                this.result = "Merci de ton argent";
            },
            no: function() {
                this.result = "Haha, perdu";
            },

            pouf: function() {
                this.image = this.items[this.index];
                this.result = this.index;
                this.index = (this.index + 1) % this.items.length;
            },
        }
    };
</script>

<template>
    <div class="body">
        <head>
            <meta charset="utf-8" />
            <link rel="preconnect" href="https://fonts.gstatic.com">
            <link href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap" rel="stylesheet">
        </head>
        <header>
            <img class="icon" src=".\\assets\\logo.png" alt="logo" />
            <h1>Juste un jeu avec 2 boutons...</h1>
        </header>
        <div class="game-scene">
            <pre><h2>Atteindrez-vous la plan�te Mars ?</h2></pre>
            <pre>Finalement, vous n'avez pas assez de vivres pour tout l'�quipage... il vous faut �jecter un membre (-1) ou consommer plus de carburant pour aller faire les courses(-2).</pre>
            <div class="game-ui">
                <img src=".\\assets\\img\\twice.png" alt="capitaine" />
                <div class="controller">
                    <ul>
                        <li>
                            <img class="icon" src=".\\assets\\img\\crewmate.png" alt="crew" />
                            <h2>
                                15
                            </h2>
                        </li>
                        <li>
                            <img class="icon" src=".\\assets\\img\\lightning.png" alt="spaceship" />
                            <h2>
                                20
                            </h2>
                        </li>
                    </ul>
                    <button>Ejecter un membre</button>
                    <button>Faire les courses</button>
                </div>
            </div>
        </div>
        <footer>
            <pre>
                Jeu développé par Félix Delesalle et Lilian Sananikone, étudiants au CNAM-ENJMIN.
            </pre>
        </footer>
    </div>
</template>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');
    @import '.\\stylesheets\\style.css';
</style>



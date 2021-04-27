<script>
    export default {
        el: "#hello",
        data() {
            return {
                resultat: "", //variable qui affiche les images. elle prend une valeur dans boup et face
                index: 0,
                membres: 15,
                carburant : 20,
                items: [ //liste des images
                    require(".\\assets\\img\\choice.png"),
                    require(".\\assets\\img\\twice.png"),
                    require(".\\assets\\img\\sweat.png"),
                    require(".\\assets\\img\\thumbup.png")
                ],
            }
        },
        mounted() {
            this.cycle();
        },
        methods: {
            cycle: function () { // sert � initialiser l'image, que y'ai pas un trou
                this.resultat = this.items[this.index];
            },
            bouton1: function () { // affiche que les images des bouton : choice et twice
                this.resultat = this.items[2];
                if (this.membres > 0) {
                    this.membres = this.membres - 1;
                }
                else {
                    this.membres = 0;
                }
            },
            bouton2: function () { //affiche que le pilote sweat et thumbup
                this.resultat = this.items[3];
                if (this.carburant > 0) {
                    this.carburant = this.carburant - 2;
                }
                else {
                    this.carburant = 0;
                }
            }
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
            <pre><h2>Atteindrez-vous la planète Mars ?</h2></pre>
            <pre>Finalement, vous n'avez pas assez de vivres pour tout l'équipage... il vous faut éjecter un membre (-1) ou consommer plus de carburant pour aller faire les courses(-2).</pre>
            <div class="game-ui">
                <img v-bind:src="resultat" alt="capitaine" />
                <div class="controller">
                    <ul>
                        <li>
                            <img class="icon" src=".\\assets\\img\\crewmate.png" alt="crew" />
                            <h2>
                                {{membres}}
                            </h2>
                        </li>
                        <li>
                            <img class="icon" src=".\\assets\\img\\lightning.png" alt="spaceship" />
                            <h2>
                                {{carburant}}
                            </h2>
                        </li>
                    </ul>
                    <button v-on:click="bouton1">Ejecter un membre</button>
                    <button v-on:click="bouton2">Faire les courses</button>
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



<script>
    import initiateMissions from './utilities/scenarios';
    import initiateButton1 from './utilities/Bouton1';
    import initiateButton2 from './utilities/Bouton2';

    export default {
        el: "#hello",
        data() {
            return {
                missnbr: 0,
                previous: 0,

                missions: initiateMissions(),
                TXT1: initiateButton1(),
                TXT2: initiateButton2(),
                CB1: [0, -1, -1, -1, -1, -4, -3, -1, -2, -2, -4, -1, -1, -3, -3, -4], //listes des prix
                CB2: [-1, -2, -3, -3, -2, -3, -3, -2, -3, -1, -1, -2, -1, -5, -3, -2],
            }
        },
        mounted() {
            this.cycle();
            initiateMissions();
        },
        methods: {
            cycle: function () { // sert � initialiser l'image, que y'ai pas un trou
                this.resultat = this.items[0];
                this.mission = this.missionlist[this.missnbr];
            },
            boup: function () { // affiche que les images des bouton : choice et twice
                this.index = (this.index + 1) % 2;
                this.resultat = this.items[this.index];
            },
            face: function () { //affiche que le pilote sweat et thumbup
                this.pilote = this.items.slice(2);
                this.index = (this.index + 1) % 2;
                this.resultat = this.pilote[this.index];
            }
        }
    };
</script>

<template>
    <div class="body">
        <head>
            <meta charset="utf-8" />
        </head>
        <header>
            <img class="icon" src=".\\assets\\logo.png" alt="logo" />
            <h1>Juste un jeu avec 2 boutons...</h1>
        </header>
        <div class="game-scene">
            <h2>Atteindrez-vous la planète Mars ?</h2>
            <p>
                <span v-html="missions[0]"></span>
            </p>
            <div class="game-ui">
                <img class="reactionImg" v-bind:src="resultat" alt="capitaine" />
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
                    <div class="buttons">
                        <button v-on:click="boup">Ejecter un membre</button>
                        <button v-on:click="face">Faire les courses</button>
                    </div>
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



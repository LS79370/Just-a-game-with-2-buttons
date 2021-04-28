<script>
    import initiateMissions from './utilities/scenarios';

    export default {
        el: "#hello",
        data() {
            return {
                missions: initiateMissions(),
            }
        },
        mounted() {
            this.cycle();
            initiateMissions();
        },
        methods: {
            yes: function () {
                this.result = "Merci de ton argent";
            },
            boup: function () { // affiche que les images des bouton : choice et twice
                this.index = (this.index + 1) % 2;
                this.test = this.items[this.index];
            },
            face: function () { //affiche que le pilote sweat et thumbup
                this.pilote = this.items.slice(2);
                this.index = (this.index + 1) % 2;
                this.test = this.pilote[this.index];
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
                {{ missions[0] }}
            </p>
            <div class="game-ui">
                <img class="reactionImg" src=".\\assets\\img\\twice.png" alt="capitaine" />
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
                        <button>Ejecter un membre</button>
                        <button>Faire les courses</button>
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



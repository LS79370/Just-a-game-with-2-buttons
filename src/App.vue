<script>
    export default {
        el: "#hello",
        data() {
            return {
                index: 0,
                result: "",
                images: [{
                    id: 1, src: ".\\assets\\img\\choice.png", alt: "Choix"
                },
                {
                    id: 2, src: ".\\assets\\img\\sweat.png", alt: "Sweat"
                },
                {
                    id: 3, src: ".\\assets\\img\\thumbup.png", alt: "Thumbup"
                },
                {
                    id: 4, src: ".\\assets\\img\\twice.png", alt: "Twice"
                }
                ]
            }
        },
        mounted() {
            this.cycle();
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



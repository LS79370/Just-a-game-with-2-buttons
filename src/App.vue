<script>
    export default {
        el: '#test',
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
        methods: {
            yes: function () {
                this.result = "Merci de ton argent";
            },
            no: function () {
                this.result = "Haha, perdu";
            },

            pouf: function () {
                this.result = "Prout";
            },
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
                Finalement, vous n’avez pas assez de vivres pour tout l’équipage…
                <br />il vous faut éjecter un membre (-1) ou consommer plus de carburant pour aller faire les courses(-2).
            </p>
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
            <p>
                Jeu développé par Félix Delesalle et Lilian Sananikone, étudiants au CNAM-ENJMIN.
            </p>
        </footer>
    </div>
</template>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300&display=swap');
    @import '.\\stylesheets\\style.css';
</style>



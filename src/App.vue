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
                decodedNFC: "",

                resultat: "", //variable qui affiche les images. elle prend une valeur dans boup et face
                index: 0,
                images: [ //liste des images
                    require("./assets/img/choice.png"),
                    require("./assets/img/twice.png"),
                    require("./assets/img/sweat.png"),
                    require("./assets/img/thumbup.png")
                ],
                missions: initiateMissions(),
                TXT1: initiateButton1(),
                TXT2: initiateButton2(),
                TXTB3: "Joker!",
                CB1: [0, -1, -1, -1, -1, -4, -3, -1, -2, -2, -4, -1, -1, -3, -3, -4, 0, 0], //listes des prix
                CB2: [-1, -2, -3, -3, -2, -3, -3, -2, -3, -1, -1, -2, -1, -5, -3, -2, 0, 0],
                members: 15, //variables des membres, morceaux de vaisseau, et nombres de sauts à faire
                ship: 21,
                sauts: 12,
                Titre: "Atteindrez vous la planète Mars?",
                joker: 1,
            }
        },
        mounted() {
            this.cycle();
            initiateMissions();
            initiateButton1();
            initiateButton2();
            this.askNFCPermission();

        },
        methods: {
            cycle: function () { // sert à initialiser l'image, le texte les coûts
                this.resultat = this.images[2];
            },
            Button1: function () { //paye le coût en members, vérifie si les members est supp à 0, si oui, continue, sinon echec. Si oui, décrémente sauts, jusqu'à victoire
                if (this.missnbr == 3 || this.missnbr == 4 || this.missnbr == 0) {
                    this.members = this.members + this.CB1[this.missnbr];
                    this.ship = this.ship - 1;
                    if (this.members <= 0) {
                        this.members = 0;
                    }
                    else if (this.ship <= 0) {
                        this.ship = 0;
                    }
                }
                else {
                    this.members = this.members + this.CB1[this.missnbr];
                    if (this.members <= 0) {
                        this.members = 0;
                    }
                    else if (this.ship <= 0) {
                        this.ship = 0;
                    }
                }
                if (this.sauts == 0) {
                    this.Victoire();
                }
                else {
                    if (this.members == 0 || this.ship == 0) {
                        this.echec();
                    }
                    else {
                        this.sauts = this.sauts - 1;
                        this.previous = this.missnbr;
                        this.missnbr = Math.floor(Math.random() * (15 - 1 + 1)) + 1;
                        while (this.previous == this.missnbr || this.missnbr == 0) {
                            this.missnbr = Math.floor(Math.random() * (15 - 1 + 1)) + 1;
                        }
                        this.cycle();
                    }
                }
            },
            Button2: function () { //paye le coût en ship, vérifie si le ship est supp à 0, si oui, continue, sinon echec. Si oui, décrémente sauts, jusqu'à victoire
                this.ship = this.ship + this.CB2[this.missnbr];
                if (this.ship <= 0) {
                    this.ship = 0;
                }
                if (this.sauts == 0) {
                    this.Victoire();
                }
                else {
                    if (this.members == 0 || this.ship == 0) {
                        this.echec();
                    }
                    else {
                        this.sauts = this.sauts - 1;
                        this.previous = this.missnbr;
                        this.missnbr = Math.floor(Math.random() * (15 - 1 + 1)) + 1;
                        while (this.previous == this.missnbr || this.missnbr == 0) {
                            this.missnbr = Math.floor(Math.random() * (15 - 1 + 1)) + 1;
                        }
                        this.cycle();
                    }
                }
            },
            Victoire: function () { //Vous avez gagné
                this.joker = 0;
                this.resultat = this.images[3];
                this.Titre = "VICTOIRE!";
                this.missnbr = 16;
            },
            echec: function () { //Vous avez perdu
                this.joker = 0;
                this.members = 0;
                this.ship = 0;
                this.resultat = this.images[2];
                this.missnbr = 17;
                this.Titre = "Oh non!";
            },
            Tension: function () {
                this.resultat = this.images[0];
            },
            Part: function () {
                this.resultat = this.images[2]
                if (this.sauts == 0) {
                    this.resultat = this.images[3];
                }
            },
            Twice: function () {
                this.resultat = this.images[1];
            },
            askNFCPermission()
            {
                navigator.permissions.query({ name: "nfc" }).then(({ state }) => {
                    switch (state) {
                        case "granted":
                        case "prompt":
                            Pass();                     
                            break;
                        default:
                            // Don’t do anything if the permission was denied.
                            break;
                    }
                });
            },
            async Pass() {
                if ("NDEFReader" in window) {
                    const ndef = new NDEFReader();
                    try {
                        await ndef.scan();
                        ndef.onreading = event => {
                            const decoder = new TextDecoder();
                            /*global NDEFReader*/
                            let record = event.message.records[0];
                            this.decodedNFC = decoder.decode(record.data);
                            if (this.decodedNFC == "skip") {
                                if (this.joker <= 0) {
                                    this.joker = 0;
                                }
                                else {
                                    this.joker = this.joker - 1;
                                    this.sauts = this.sauts - 1;
                                    this.previous = this.missnbr;
                                    this.missnbr = Math.floor(Math.random() * (15 - 1 + 1)) + 1;
                                    while (this.previous == this.missnbr || this.missnbr == 0) {
                                        this.missnbr = Math.floor(Math.random() * (15 - 1 + 1)) + 1;
                                    }
                                    this.cycle();
                                }
                            }
                        }
                    } catch (error) {
                        this.Titre = error;
                    }
                }
            }
        },
    }
</script>

<template>
    <div class="body">
        <head>
            <meta charset="utf-8" />
        </head>
        <header>
            <img class="icon" src="./assets/logo.png" alt="logo" />
            <h1>Juste un jeu avec 2 boutons...</h1>
        </header>
        <div class="game-scene">
            <h2>{{Titre}}</h2>
            <p>
                <span v-html="missions[this.missnbr]"></span>
            </p>
            <div class="game-ui">
                <img class="reactionImg" v-bind:src="resultat" alt="capitaine" />
                <div class="controller">
                    <ul>
                        <li>
                            <img class="icon" src="./assets/img/crewmate.png" alt="crew" />
                            <h2>
                                {{members}}
                            </h2>
                        </li>
                        <li>
                            <img class="icon" src="./assets/img/lightning.png" alt="spaceship" />
                            <h2>
                                {{ship}}
                            </h2>
                        </li>
                    </ul>
                    <div class="buttons">
                        <button v-on:click="Button1" v-on:mouseover="Tension" v-on:mouseleave="Part">{{TXT1[this.missnbr]}}</button>
                        <button v-on:click="Button2" v-on:mouseover="Tension" v-on:mouseleave="Part">{{TXT2[this.missnbr]}}</button>
                        <button v-on:click="Pass" v-on:mouseover="Twice" v-on:mouseleave="Part">{{TXTB3}}</button>
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
    @import './stylesheets/style.css';
</style>
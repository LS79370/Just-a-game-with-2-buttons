<script>
    import initiateMissions from "./utilities/scenarios";
    import { initiateChoice1, initiateCost1 } from "./utilities/choice1";
    import { initiateChoice2, initiateCost2 }  from "./utilities/choice2";
    import readNFC from "./utilities/nfcmanager";

    export default {
        el: "#hello",
        data() {
            return {
                missionsID: 0, //index de la mission en cours
                missionsPrevious: 0, //index de la mission précédente
                showedImg: "", //variable contenant le lien de l'image affichée.
                //tableau contenant les liens des images du capitaine à afficher
                captainImg: [
                    require("./assets/img/choice.webp"),
                    require("./assets/img/twice.webp"),
                    require("./assets/img/sweat.webp"),
                    require("./assets/img/thumbup.webp"),
                ],
                missions: initiateMissions(),//tableau contenant l'ensemble des missions
                textBtn1: initiateChoice1(),//tableau contenant l'ensemble des choix du 1er bouton
                textBtn2: initiateChoice2(),//tableau contenant l'ensemble des choix du 2nd bouton
                costBtn1: initiateCost1(),//tableau contenant l'ensemble des coûts pour le 1er bouton
                costBtn2: initiateCost2(),//tableau contenant l'ensemble des coûts pour le 2e bouton
                btnIsShowing: false, //si faux, cache un des 2 boutons au début
                lifeMembers: 15,//variable de vie : nombre de membres de votre équipe
                lifeShip: 20,//variable de vie : partie de votre vaisseau
                jumps: 12,//nombre de transistion entre les missions
                title: "Atteindrez-vous la planète Mars ?",//titre affiché sur la page
                joker: 1,//nombre de jokers utilisables dans le jeux
            };
        },
        mounted() { //appelée lorsque la page a finie de charger et que le template est affichée
            this.init();
            
        },
        methods: {
            init: function () {
                //sert à initialiser l'image affichée
                this.showedImg = this.captainImg[1];
            },
            onClick_action1: function () {
                if (this.btnIsShowing == false) {
                    this.btnIsShowing = true; //affiche le 2e bouton quand la partie commence
                }
                //décrémente lifeMembers et vérifié si le joueur a gagné ou perdu
                if (this.missionsID == 3 || this.missionsID == 4 || this.missionsID == 0) {
                    this.lifeMembers = this.lifeMembers + this.costBtn1[this.missionsID];
                    this.lifeShip = this.lifeShip - 1;
                    if (this.lifeMembers <= 0) {
                        this.lifeMembers = 0;
                    } else if (this.lifeShip <= 0) {
                        this.lifeShip = 0;
                    }
                } else {
                    this.lifeMembers = this.lifeMembers + this.costBtn1[this.missionsID];
                    if (this.lifeMembers <= 0) {
                        this.lifeMembers = 0;
                    } else if (this.lifeShip <= 0) {
                        this.lifeShip = 0;
                    }
                }
                if (this.jumps == 0) {
                    this.setWonGame();
                } else {
                    if (this.lifeMembers == 0 || this.lifeShip == 0) {
                        this.setLostGame();
                    } else {
                        this.jumps = this.jumps - 1;
                        this.missionsPrevious = this.missionsID;
                        this.missionsID = Math.floor(Math.random() * (15 - 1 + 1)) + 1;
                        while (this.missionsPrevious == this.missionsID || this.missionsID == 0) {
                            this.missionsID = Math.floor(Math.random() * (15 - 1 + 1)) + 1;
                        }
                        this.init();
                    }
                }
            },
            onClick_action2: function () {
                //décrémente lifeShip et vérifié si le joueur a gagné ou perdu
                this.lifeShip = this.lifeShip + this.costBtn2[this.missionsID];
                if (this.lifeShip <= 0) {
                    this.lifeShip = 0;
                }
                if (this.jumps == 0) {
                    this.setWonGame();
                } else {
                    if (this.lifeMembers == 0 || this.lifeShip == 0) {
                        this.setLostGame();
                    } else {
                        this.jumps = this.jumps - 1;
                        this.missionsPrevious = this.missionsID;
                        this.missionsID = Math.floor(Math.random() * (15 - 1 + 1)) + 1;
                        while (this.missionsPrevious == this.missionsID || this.missionsID == 0) {
                            this.missionsID = Math.floor(Math.random() * (15 - 1 + 1)) + 1;
                        }
                        this.init();
                    }
                }
            },
            setWonGame: function () {
                //Change certaines variables et affichage quand le joueur gagne
                this.joker = 0;
                this.showedImg = this.captainImg[3];
                this.title = "VICTOIRE !";
                this.missionsID = 16;
                this.btnIsShowing = false;//cache le 2e bouton quand la partie est gagnée
            },
            setLostGame: function () {
                //Change certaines variables et affichage quand le joueur perd
                this.joker = 0;
                this.lifeMembers = 0;
                this.lifeShip = 0;
                this.showedImg = this.captainImg[2];
                this.missionsID = 17;
                this.title = "Oh non !";
                this.btnIsShowing = false;//cache le 2e bouton quand la partie est perdue
            },
            onOver_switchImg: function () {
                this.showedImg = this.captainImg[0];
            },
            onLeave_switchImg: function () {
                this.showedImg = this.captainImg[2];
                if (this.jumps == 0) {
                    this.showedImg = this.captainImg[3];
                }
            },
            onClick_useJoker: function ()
            {
                //appelle l'utilisation du joker
                try
                {
                    console.log("Test");
                    console.log(readNFC());
                    if (readNFC() == "Passe") {//vérifie si le message de la puce correspond au message attendu
                        if (this.joker <= 0)
                        {
                            this.joker = 0;
                        }
                        else
                        {
                            //utilise le joker
                            this.showedImg = this.captainImg[1];
                            this.joker = this.joker - 1;
                            this.jumps = this.jumps - 1;
                            this.missionsPrevious = this.missionsID;
                            this.missionsID = Math.floor(Math.random() * (15 - 1 + 1)) + 1;
                            while (this.missionsPrevious == this.missionsID || this.missionsID == 0)
                            {
                                this.missionsID = Math.floor(Math.random() * (15 - 1 + 1)) + 1;
                            }
                            this.init();
                        }
                    }
                }
                catch (error)
                {
                        this.title = " Utilisation du joker : Appareil incompatible ou permission refusée !";
                }
            },
        },
    };
</script>

<template>
    <div class="site">
        <head>
            <meta charset="utf-8" />
            <link rel="manifest" href="./manifest.json" />
        </head>
        <header>
            <img class="icon" src="./assets/img/logo.webp" alt="logo" />
            <h1>Juste un jeu avec 2 boutons...</h1>
        </header>
        <div class="body">
            <h2 class="title">{{title}}</h2>
            <div class="missions">
                <span v-html="missions[this.missionsID]"></span>
            </div>
            <div class="captnImg">
                <img v-bind:src="showedImg" @click="onClick_useJoker" alt="capitaine" />
            </div>
            <ul>
                <li>
                    <img class="icon" src="./assets/img/crewmate.webp" alt="crew" />
                    <h2>
                        {{lifeMembers}}
                    </h2>
                    </li>
                <li>
                    <img class="icon" src="./assets/img/lightning.webp" alt="spaceship" />
                     <h2>
                        {{lifeShip}}
                     </h2>
                </li>
            </ul>
            <div class="buttons">
                <button v-on:click="onClick_action1" v-on:mouseover="onOver_switchImg" v-on:mouseleave="onLeave_switchImg">{{textBtn1[this.missionsID]}}</button>
                <button v-on:click="onClick_action2" v-on:mouseover="onOver_switchImg" v-on:mouseleave="onLeave_switchImg" v-show="btnIsShowing">{{textBtn2[this.missionsID]}}</button>
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
    @import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');
    @import './stylesheets/style.css';
</style>
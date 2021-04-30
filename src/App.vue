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
            <h2>{{Titre}}</h2>

            <p>
                {{mission}}
            </p>
            <div class="game-ui">
                <img class="reactionImg" v-bind:src="resultat" alt="capitaine" />
                <div class="controller">
                    <ul>
                        <li>
                            <img class="icon" src=".\\assets\\img\\crewmate.png" alt="crew" />
                            <h2>
                                {{members}}
                            </h2>
                        </li>
                        <li>
                            <img class="icon" src=".\\assets\\img\\lightning.png" alt="spaceship" />
                            <h2>
                                {{ship}}
                            </h2>
                        </li>
                    </ul>
                    <div class="buttons">
                        <button v-on:click="Button1" v-on:mouseover="Tension" v-on:mouseleave="Part">{{TXTB1}}</button>
                        <button v-on:click="Button2" v-on:mouseover="Tension" v-on:mouseleave="Part">{{TXTB2}}</button>
                        <button v-on:click="readTag()" v-on:mouseover="Twice" v-on:mouseleave="Part">{{TXTB3}}</button>
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

<script>
    export default {
        el: "#hello",
        data() {
            return {
                resultat: "", //variable qui affiche les images. elle prend une valeur dans boup et face
                index: 0,
                items: [ //liste des images
                    require(".\\assets\\img\\choice.png"),
                    require(".\\assets\\img\\twice.png"),
                    require(".\\assets\\img\\sweat.png"),
                    require(".\\assets\\img\\thumbup.png")
                ],
                missnbr: 0, //indice de la mission, qui syncronise les coûts et les boutons
                previous: 0,
                mission: "",
                missionlist: [ //liste des missions
                    "Votre but est d'atteindre la planète Mars sans perdre la totalité des memebres de votre équipage ou celle des éléments de votre vaisseau. Pour commencer, faites décoller le vaiseau (-1)!",
                    "Ah mince ! Vous n'avez pas attendu Patrick, il est resté sur Terre. Faites demi-tour (-2) ou ignorez-le (-1)...",
                    "Une brèche dans le compartiment P6 du vaisseau ! Emma s'y trouve, elle va être aspirée dans l'espace... vous pouvez la sauver (-3) ou fermer le sas (-1) et présuriser l'engin.",
                    "Un alien ravageur se trouve dans la chambre de Thibal ! Il vous faut condamner Thibal et sa chambre (-1 -1) ou permettre à Thibal de s'échapper à vos risques et périls. (-3)",
                    "Un virus informique brouille l'image des caméras de surveillance, le Novid. Envoyer Florian, l'expert informatique, en salle de contrôle (-1 -1) ou laisser l'anti-virus Javast agir (-2)?",
                    "4 cabines d'hybernation sont en panne, des membres de l'équipage proposent de laisser leur places mais ils peuvent mourir d'insomnie spatiale. Acceptez leur proposition (-4) ou faites réparer les cabines (-3).",
                    "Vous n'avez plus assez de carburant mais à ce stade, vous ne pouvez que vous en procurer au marché rouge ! Un vendeur exige 3 membres de votre équipage contre du carburant (-3) ... Si vous n'acceptez pas l'offre votre vaisseau sera vite en panne (-3).",
                    "Vous n’avez pas assez de vivres pour tout l’équipage… Il vous faut éjecter un membre(-1) ou consommer plus de carburant pour aller faire les courses(-2).",
                    "2 membres de votre équipe nuisent à l'ambiance du groupe, mais ils s'agit des ouvriers en chef de l'aile est du vaisseau. A vous de choisir quoi sacrifier entre la cohésion du groupe (-2) et l'entretien du vaisseau(-3)...",
                    "Votre supérieure en chef, Tifanie, vous demande un rapport intermédiaire de mission mais votre Holophone est cassé... Vous pouvez envoyer 2 subordonnés au spatioport pour un compte-rendu (-2) ou faire réparer (-1) votre appareil de communication ! ",
                    "Toutes les innovations présentes sur la plateau Projet du vaisseau ont pris feu ! 4 membres de votre équipage sont au coeur de l'incendie, sauvez-les (-1) ! Ou profitez-en pour faire des licenciements (-4) !",
                    "Vous êtes attaqués par un raton-laveur et un tréant de l'espace. Envoyez votre jardinier zoologiste (-1) ou utilisez vos canons (-2)!",
                    "Ulysse a perdu contact avec l'un de ses 31 drones caméra. Il vous propose d'aller le retrouver personnellement (-1) à ses dernières coordonnées GPS au lieu d'utiliser un autre drone et risquer de le perdre (-1) Que choisissez-vous ?",
                    "Le compartiment P17 de votre vaisseau est fortement endommagé, certains membre de l'équipage y sont bloqués et risque de mourir d'asphyxie. Heureusement, ils sont prêts des cabines de sauvetages. Autorisez-les à embarquer dans les cabines (-3) ou attendez que l'accès au compartement soit réparé (-5).",
                    "Vous arrivez presque à destination : un martien s'échappe du vaisseau avec les chips préférées de 3 de vos subordonnés! Mais il va dans la direction opposée du vaisseau... faites demi-tour (-3) pour faire plaisir à votre équipage ou laissez-les y aller seuls (-3).",
                    "Il y a une mutinerie dans votre vaisseau, protégez-vous en condamnant l'accès au pont (-2) ou laissez-les approcher et tuez les mutins (-4)!",
                ],
                CB1: [0, -1, -1, -1, -1, -4, -3, -1, -2, -2, -4, -1, -1, -3, -3, -4], //listes des prix
                CB2: [-1, -2, -3, -3, -2, -3, -3, -2, -3, -1, -1, -2, -1, -5, -3, -2],
                TXTB1: "", //textes des boutons
                TXTB2: "",
                TXTB3: "Joker!",
                TXT1: ["En route vers l'aventure!", //texte bouton 1
                    "Ignorer Patrick",
                    "Présurisez l'engin",
                    "Condamner Thibal",
                    "Envoyer Florian",
                    "Accepter leur proposition",
                    "Acheter le carburant",
                    "Ejecter un membre",
                    "La cohésion",
                    "Envoyer les subordonnés",
                    "Licencier",
                    "Jardinier Zoologiste",
                    "Envoyer Ulysse",
                    "Les capsules!",
                    "Qu'ils y aillent seuls",
                    "AU COMBAT!",
                ],
                TXT2: ["En route vers l'aventure!", //texte bouton 2
                    "Faire demi-tour",
                    "Sauver Emma",
                    "Sauver Thibal",
                    "Laisser Javast faire",
                    "Réparer les cabines",
                    "Continuer",
                    "Aller faire les courses",
                    "L'entretien",
                    "Allô?",
                    "Les sauver",
                    "Canons",
                    "Envoyer un drone",
                    "Réparer le système",
                    "POUR LES CHIPS!",
                    "Condamner le pont",
                    "Bravo!",
                    "Perdu!"
                ],
                members: 15,
                ship: 21,
                sauts: 12,
                Titre: "Atteindrez vous la planète Mars?",
                joker: 1,
                verif: "joker",
            }
        },
        mounted() {
            this.cycle();
        },
        methods: {
            cycle: function () { // sert à initialiser l'image, le texte les coûts
                this.resultat = this.items[2];
                this.mission = this.missionlist[this.missnbr];
                this.TXTB1 = this.TXT1[this.missnbr];
                this.TXTB2 = this.TXT2[this.missnbr];
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
                this.resultat = this.items[3];
                this.Titre = "VICTOIRE!";
                this.mission = "Vous avez réussi! Vous êtes arrivés à atteidre la planète Mars! La planète rouge est à vous! Vous serez inscrit dans l'histoire!";
                this.TXTB1 = this.TXT2[16];
                this.TXTB2 = this.TXT2[16];
                this.TXTB3 = this.TXT2[16];
            },
            echec: function () { //Vous avez perdu
                this.members = 0;
                this.ship = 0;
                this.resultat = this.items[2];
                this.Titre = "Oh non!";
                this.mission = "Mince! Vous avez raté votre mission... Que ce soit par manque de personnel, ou que votre vaisseau est devenu une véritable passoire, il n'empêche que vous avez perdu!";
                this.TXTB1 = this.TXT2[17];
                this.TXTB2 = this.TXT2[17];
                this.TXTB3 = this.TXT2[17];
            },
            Tension: function () {
                this.resultat = this.items[0];
            },
            Part: function () {
                this.resultat = this.items[2]
                if (this.sauts == 0) {
                    this.resultat = this.items[3];
                }
            },
            Twice: function () {
                this.resultat = this.items[1];
            },
            Pass: function () {
                if (this.joker == 0) {
                    this.mission = "Désolé vous avez utilisé tous vos jokers! " + this.missionlist[this.missnbr];
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
        },
    };
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');
    @import '.\\stylesheets\\style.css';
</style>
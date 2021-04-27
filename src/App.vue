<script>
    export default {
        el: "#hello",
        data() {
            return {
                mission_0: "Votre but est d'atteindre la planète Mars sans perdre tout votre équipage () ou tous les éléments de votre vaisseau (). Pour commencer, faites décoler le vaiseau(-1) !",

                mission_1: "Ah mince ! Vous n'avez pas attendu Patrick, il est resté sur Terre. Faites demi-tour (-2) ou ignorez-le (-1)...",

                mission_2: "Une brèche dans le compartiment P6 du vaisseau ! Emma s'y trouve, elle va être aspirée dans l'espace... vous pouvez la sauver (-3) ou fermer le sas (-1) et présuriser l'engin.",

                mission_3: "Un alien ravageur se trouve dans la chambre de Thibal ! Il vous faut condamner Thibal et sa chambre (-1 -1) ou permettre à Thibal de s'échapper à vos risques et périls. (-3)",

                mission_4: "Un virus informique brouille l'image des caméras de surveillance, le Novid. Envoyer Florian, l'expert informatique, en salle de contrôle (-1 -1) ou laisser l'anti-virus Javast agir (-2).",

                mission_5: "4 cabines d'hybernation sont en panne, des membres de l'équipage propose de laisser leur places mais il peuvent mourir d'insomnie spatiale. Acceptez leur proposition (-4) ou faites réparer les cabines (-3).",

                mission_6: "Vous n'avez plus assez de carburant mais à ce stade, vous ne pouvez que vous en procurer au marché rouge ! Un vendeur exige 3 membres de votre équipage contre du carburant (-3) ... si vous n'acceptez pas l'offre votre vaisseau sera vite en panne (-3).",

                mission_7: "Vous n’avez pas assez de vivres pour tout l’équipage… il vous faut éjecter un membre(-1) ou consommer plus de carburant pour aller faire les courses(-2).",

                mission_8: "2 membres de votre équipe nuisent à l'ambiance du groupe, mais ils s'agissent des ouvriers en chef de l'aile est du vaisseau. A vous de choisir entre la cohésion du groupe (-2) et l'entretien du vaisseau(-3)...",

                mission_9: "Votre supérieur en chef, Tifanie, vous demande un rapport intermédiaire de mission mais votre Holophone est cassé... Vous pouvez envoyer 2 subordonnés au spatioport pour un compte-rendu (-2) ou faire réparer (-1) votre appareil de communication ! ",

                mission_10: "Toutes les innovations présentes sur la plateau Projet du vaisseau ont pris feu ! 4 membres de votre équipage sont au coeur de l'incendie, sauvez-les (-1) ! Ou profitez-en pour faire des licenciements (-4) !",

                mission_11: "Vous êtes attaqués par un raton-laveur et un tréant de l'espace. Envoyez votre répliquer votre jardinier zoologiste (-1) ou utilisez vos canons (-2).",

                mission_12: "Ulysse a perdu contact avec l'un de ses 31 drones caméra. Il vous propose d'aller le retrouver personnellemnt (-1) à ses dernières coordonnées GPS au lieu d'utiliser un autre drone et risquer de le perdre (-1) Que choisissez-vous ?",

                mission_13: "Le compartiment P17 de votre vaisseau est fortement endommagé, certains membre de l'équipage y sont bloqués et risque de mourir d'asphyxie. Heureusement, ils sont prêts des cabines de sauvetages. Autorisez-les à embarquer dans les cabines (-3) ou attendez que l'accès au compartement soit réparé (-5).",

                mission_14: "Vous arrivez presque à destination : un marsien s'échappe du vaisseau avec les chips préférées de 3 vos subordonnés! Mais il va dans la direction opposée du vaisseau... faites demi-tour (-3) pour faire plaisir à votre équipage ou laissez-les y aller seuls (-3).",

                mission_15: "Il y a une mutinerie dans votre vaisseau, protégez vous et condamnez l'accès au pont (-2) ou laissez vous approcher et tuer les mutins (-4).",
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
        </head>
        <header>
            <img class="icon" src=".\\assets\\logo.png" alt="logo" />
            <h1>Juste un jeu avec 2 boutons...</h1>
        </header>
        <div class="game-scene">
            <h2>Atteindrez-vous la planète Mars ?</h2>
            <p>
                {{mission_15}}
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
            <p>
                Jeu développé par Félix Delesalle et Lilian Sananikone, étudiants au CNAM-ENJMIN.
            </p>
        </footer>
    </div>
</template>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');
    @import '.\\stylesheets\\style.css';
</style>



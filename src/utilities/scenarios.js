function initiateMissions()
{
    var mission_0 = "Votre but est d'atteindre la planète Mars sans perdre tout votre équipage (<img class='littleIcon' src='../../crewmate.png' alt='crew'/>) ou tous les éléments de votre vaisseau (<img class='littleIcon' src='../../lightning.png' alt='spaceship'/>). Pour commencer, faites décoler le vaiseau(-1<img class='littleIcon' src='../../lightning.png' alt='spaceship'/>) !";

    var mission_1 = "Ah mince ! Vous n'avez pas attendu Patrick, il est resté sur Terre. Faites demi-tour (-2<img class='littleIcon' src='../../lightning.png' alt='spaceship'/>) ou ignorez-le (-1<img class='littleIcon' src='../../crewmate.png' alt='crew'/>)...";

    var mission_2 = "Une brèche dans le compartiment P6 du vaisseau ! Emma s'y trouve, elle va être aspirée dans l'espace... vous pouvez la sauver (-3<img class='littleIcon' src='../../lightning.png' alt='spaceship'/>) ou fermer le sas (-1<img class='littleIcon' src='../../crewmate.png' alt='crew'/>) et présuriser l'engin.";

    var mission_3 = "Un alien ravageur se trouve dans la chambre de Thibal ! Il vous faut condamner Thibal et sa chambre (-1<img class='littleIcon' src='../../crewmate.png' alt='crew'/>-1<img class='littleIcon' src='../../lightning.png' alt='spaceship'/>) ou permettre à Thibal de s'échapper à vos risques et périls. (-3<img class='littleIcon' src='../../lightning.png' alt='spaceship'/>)";

    var mission_4 = "Un virus informique brouille l'image des caméras de surveillance, le Novid. Envoyer Florian, l'expert informatique, en salle de contrôle (-1<img class='littleIcon' src='../../crewmate.png' alt='crew'/>-1<img class='littleIcon' src='../../lightning.png' alt='spaceship'/>) ou laisser l'anti-virus Javast agir (-2<img class='littleIcon' src='../../lightning.png' alt='spaceship'/>).";

    var mission_5 = "4 cabines d'hybernation sont en panne, des membres de l'équipage proposent de laisser leur places mais il peuvent mourir d'insomnie spatiale. Acceptez leur proposition (-4<img class='littleIcon' src='../../crewmate.png' alt='crew'/>) ou faites réparer les cabines (-3<img class='littleIcon' src='../../lightning.png' alt='spaceship'/>).";

    var mission_6 = "Vous n'avez plus assez de carburant mais à ce stade, vous ne pouvez que vous en procurer au marché rouge ! Un vendeur exige 3 membres de votre équipage contre du carburant (-3<img class='littleIcon' src='../../crewmate.png' alt='crew'/>) ... si vous n'acceptez pas l'offre votre vaisseau sera vite en panne (-3<img class='littleIcon' src='../../lightning.png' alt='spaceship'/>).";

    var mission_7 = "Vous n’avez pas assez de vivres pour tout l’équipage… il vous faut éjecter un membre(-1<img class='littleIcon' src='../../crewmate.png' alt='crew'/>) ou consommer plus de carburant pour aller faire les courses(-2<img class='littleIcon' src='../../lightning.png' alt='spaceship'/>).";

    var mission_8 = "2 membres de votre équipe nuisent à l'ambiance du groupe, mais il s'agit des ouvriers en chef de l'aile est du vaisseau. A vous de choisir entre la cohésion du groupe (-2<img class='littleIcon' src='../../crewmate.png' alt='crew'/>) et l'entretien du vaisseau(-3<img class='littleIcon' src='../../lightning.png' alt='spaceship'/>)...";

    var mission_9 = "Votre supérieur en chef, Tifanie, vous demande un rapport intermédiaire de mission mais votre Holophone est cassé... Vous pouvez envoyer 2 subordonnés au spatioport pour un compte-rendu (-2<img class='littleIcon' src='../../crewmate.png' alt='crew'/>) ou faire réparer (-1<img class='littleIcon' src='../../lightning.png' alt='spaceship'/>) votre appareil de communication ! ";

    var mission_10 = "Toutes les innovations présentes sur le plateau Projet du vaisseau ont pris feu ! 4 membres de votre équipage sont au coeur de l'incendie, sauvez-les (-1<img class='littleIcon' src='../../lightning.png' alt='spaceship'/>) ! Ou profitez-en pour faire des licenciements (-4<img class='littleIcon' src='../../crewmate.png' alt='crew'/>) !";

    var mission_11 = "Vous êtes attaqués par un raton-laveur et un tréant de l'espace. Envoyez répliquer votre jardinier zoologiste (-1<img class='littleIcon' src='../../crewmate.png' alt='crew'/>) ou utilisez vos canons (-2<img class='littleIcon' src='../../lightning.png' alt='spaceship'/>).";

    var mission_12 = "Ulysse a perdu contact avec l'un de ses 31 drones caméra. Il vous propose d'aller le retrouver personnellement (-1<img class='littleIcon' src='../../crewmate.png' alt='crew'/>) à ses dernières coordonnées GPS au lieu d'utiliser un autre drone et risquer de le perdre (-1<img class='littleIcon' src='../../lightning.png' alt='spaceship'/>) Que choisissez-vous ?";

    var mission_13 = "Le compartiment P17 de votre vaisseau est fortement endommagé, certains membre de l'équipage y sont bloqués et risque de mourir d'asphyxie. Heureusement, ils sont prêts des cabines de sauvetages. Autorisez-les à embarquer dans les cabines (-3<img class='littleIcon' src='../../lightning.png' alt='spaceship'/>) ou attendez que l'accès au compartement soit réparé (-5<img class='littleIcon' src='../../crewmate.png' alt='crew'/>).";

    var mission_14 = "Vous arrivez presque à destination : un marsien s'échappe du vaisseau avec les chips préférées de 3 vos subordonnés! Mais il va dans la direction opposée du vaisseau... faites demi-tour (-3<img class='littleIcon' src='../../lightning.png' alt='spaceship'/>) pour faire plaisir à votre équipage ou laissez-les y aller seuls (-3<img class='littleIcon' src='../../crewmate.png' alt='crew'/>).";

    var mission_15 = "Il y a une mutinerie dans votre vaisseau, protégez-vous et condamnez l'accès au pont (-2<img class='littleIcon' src='../../lightning.png' alt='spaceship'/>) ou laissez vous approcher et tuer les mutins (-4<img class='littleIcon' src='../../crewmate.png' alt='crew'/>).";

    var mission_16 = "Vous avez réussi! Vous êtes arrivés à atteidre la planète Mars! La planète rouge est à vous! Vous serez inscrit dans l'histoire !";

    var mission_17 = "Mince! Vous avez raté votre mission... Que ce soit par manque de personnel, ou que votre vaisseau est devenu une véritable passoire, il n'empêche que vous avez perdu !";

    return [mission_0, mission_1, mission_2, mission_3, mission_4, mission_5, mission_6, mission_7, mission_8, mission_9, mission_10, mission_11, mission_12, mission_13, mission_14, mission_15, mission_16, mission_17];
}

export default initiateMissions
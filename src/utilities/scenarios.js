function initiateMissions() {
  var mission_0 =
    "Votre but est d'atteindre la plan�te Mars sans perdre tout votre �quipage (<img class='littleIcon' src='../../crewmate.png' alt='crew'/>) ou tous les �l�ments de votre vaisseau (<img class='littleIcon' src='../../lightning.png' alt='spaceship'/>). Pour commencer, faites d�coller le vaiseau(-1<img class='littleIcon' src='../../lightning.png' alt='spaceship'/>) !";

  var mission_1 =
    "Ah mince ! Vous n'avez pas attendu Patrick, il est rest� sur Terre. Faites demi-tour (-2<img class='littleIcon' src='../../lightning.png' alt='spaceship'/>) ou ignorez-le (-1<img class='littleIcon' src='../../crewmate.png' alt='crew'/>)...";

  var mission_2 =
    "Une br�che dans le compartiment P6 du vaisseau ! Emma s'y trouve, elle va �tre aspir�e dans l'espace... vous pouvez la sauver (-3<img class='littleIcon' src='../../lightning.png' alt='spaceship'/>) ou fermer le sas (-1<img class='littleIcon' src='../../crewmate.png' alt='crew'/>) et pr�suriser l'engin.";

  var mission_3 =
    "Un alien ravageur se trouve dans la chambre de Thibal ! Il vous faut condamner Thibal et sa chambre (-1<img class='littleIcon' src='../../crewmate.png' alt='crew'/>-1<img class='littleIcon' src='../../lightning.png' alt='spaceship'/>) ou permettre � Thibal de s'�chapper � vos risques et p�rils. (-3<img class='littleIcon' src='../../lightning.png' alt='spaceship'/>)";

  var mission_4 =
    "Un virus informique brouille l'image des cam�ras de surveillance, le Novid. Envoyer Florian, l'expert informatique, en salle de contr�le (-1<img class='littleIcon' src='../../crewmate.png' alt='crew'/>-1<img class='littleIcon' src='../../lightning.png' alt='spaceship'/>) ou laisser l'anti-virus Javast agir (-2<img class='littleIcon' src='../../lightning.png' alt='spaceship'/>).";

  var mission_5 =
    "4 cabines d'hybernation sont en panne, des membres de l'�quipage proposent de laisser leur places mais il peuvent mourir d'insomnie spatiale. Acceptez leur proposition (-4<img class='littleIcon' src='../../crewmate.png' alt='crew'/>) ou faites r�parer les cabines (-3<img class='littleIcon' src='../../lightning.png' alt='spaceship'/>).";

  var mission_6 =
    "Vous n'avez plus assez de carburant mais � ce stade, vous ne pouvez que vous en procurer au march� rouge ! Un vendeur exige 3 membres de votre �quipage contre du carburant (-3<img class='littleIcon' src='../../crewmate.png' alt='crew'/>) ... si vous n'acceptez pas l'offre votre vaisseau sera vite en panne (-3<img class='littleIcon' src='../../lightning.png' alt='spaceship'/>).";

  var mission_7 =
    "Vous n�avez pas assez de vivres pour tout l��quipage� il vous faut �jecter un membre(-1<img class='littleIcon' src='../../crewmate.png' alt='crew'/>) ou consommer plus de carburant pour aller faire les courses(-2<img class='littleIcon' src='../../lightning.png' alt='spaceship'/>).";

  var mission_8 =
    "2 membres de votre �quipe nuisent � l'ambiance du groupe, mais il s'agit des ouvriers en chef de l'aile est du vaisseau. A vous de choisir entre la coh�sion du groupe (-2<img class='littleIcon' src='../../crewmate.png' alt='crew'/>) et l'entretien du vaisseau(-3<img class='littleIcon' src='../../lightning.png' alt='spaceship'/>)...";

  var mission_9 =
    "Votre sup�rieur en chef, Tifanie, vous demande un rapport interm�diaire de mission mais votre Holophone est cass�... Vous pouvez envoyer 2 subordonn�s au spatioport pour un compte-rendu (-2<img class='littleIcon' src='../../crewmate.png' alt='crew'/>) ou faire r�parer (-1<img class='littleIcon' src='../../lightning.png' alt='spaceship'/>) votre appareil de communication ! ";

  var mission_10 =
    "Toutes les innovations pr�sentes sur le plateau Projet du vaisseau ont pris feu ! 4 membres de votre �quipage sont au coeur de l'incendie, sauvez-les (-1<img class='littleIcon' src='../../lightning.png' alt='spaceship'/>) ! Ou profitez-en pour faire des licenciements (-4<img class='littleIcon' src='../../crewmate.png' alt='crew'/>) !";

  var mission_11 =
    "Vous �tes attaqu�s par un raton-laveur et un tr�ant de l'espace. Envoyez r�pliquer votre jardinier zoologiste (-1<img class='littleIcon' src='../../crewmate.png' alt='crew'/>) ou utilisez vos canons (-2<img class='littleIcon' src='../../lightning.png' alt='spaceship'/>).";

  var mission_12 =
    "Ulysse a perdu contact avec l'un de ses 31 drones cam�ra. Il vous propose d'aller le retrouver personnellement (-1<img class='littleIcon' src='../../crewmate.png' alt='crew'/>) � ses derni�res coordonn�es GPS au lieu d'utiliser un autre drone et risquer de le perdre (-1<img class='littleIcon' src='../../lightning.png' alt='spaceship'/>) Que choisissez-vous ?";

  var mission_13 =
    "Le compartiment P17 de votre vaisseau est fortement endommag�, certains membre de l'�quipage y sont bloqu�s et risque de mourir d'asphyxie. Heureusement, ils sont pr�ts des cabines de sauvetages. Autorisez-les � embarquer dans les cabines (-3<img class='littleIcon' src='../../lightning.png' alt='spaceship'/>) ou attendez que l'acc�s au compartement soit r�par� (-5<img class='littleIcon' src='../../crewmate.png' alt='crew'/>).";

  var mission_14 =
    "Vous arrivez presque � destination : un marsien s'�chappe du vaisseau avec les chips pr�f�r�es de 3 vos subordonn�s! Mais il va dans la direction oppos�e du vaisseau... faites demi-tour (-3<img class='littleIcon' src='../../lightning.png' alt='spaceship'/>) pour faire plaisir � votre �quipage ou laissez-les y aller seuls (-3<img class='littleIcon' src='../../crewmate.png' alt='crew'/>).";

  var mission_15 =
    "Il y a une mutinerie dans votre vaisseau, prot�gez-vous et condamnez l'acc�s au pont (-2<img class='littleIcon' src='../../lightning.png' alt='spaceship'/>) ou laissez vous approcher et tuer les mutins (-4<img class='littleIcon' src='../../crewmate.png' alt='crew'/>).";

  var mission_16 =
    "Vous avez r�ussi! Vous �tes arriv�s � atteidre la plan�te Mars! La plan�te rouge est � vous! Vous serez inscrit dans l'histoire !";

  var mission_17 =
    "Mince! Vous avez rat� votre mission... Que ce soit par manque de personnel, ou que votre vaisseau est devenu une v�ritable passoire, il n'emp�che que vous avez perdu !";

  return [
    mission_0,
    mission_1,
    mission_2,
    mission_3,
    mission_4,
    mission_5,
    mission_6,
    mission_7,
    mission_8,
    mission_9,
    mission_10,
    mission_11,
    mission_12,
    mission_13,
    mission_14,
    mission_15,
    mission_16,
    mission_17,
  ];
}

export default initiateMissions;

function initiateChoice1() { //retourne toutes les inscriptions affichées sur le 1er bouton
  var txt0 = "En route vers l'aventure !";

  var txt1 = "Ignorer Patrick";

  var txt2 = "Presurisez l'engin";

  var txt3 = "Condamner Thibal";

  var txt4 = "Envoyer Florian";

  var txt5 = "Accepter leur proposition";

  var txt6 = "Acheter le carburant";

  var txt7 = "Ejecter un membre";

  var txt8 = "La cohésion";

  var txt9 = "Envoyer les subordonnes";

  var txt10 = "Licencier";

  var txt11 = "Jardinier Zoologiste";

  var txt12 = "Envoyer Ulysse";

  var txt13 = "Les capsules !";

  var txt14 = "Qu'ils y aillent seuls";

  var txt15 = "AU COMBAT !";

  var txt16 = "Bravo !";

  var txt17 = "Perdu !";

  return [
    txt0,
    txt1,
    txt2,
    txt3,
    txt4,
    txt5,
    txt6,
    txt7,
    txt8,
    txt9,
    txt10,
    txt11,
    txt12,
    txt13,
    txt14,
    txt15,
    txt16,
    txt17,
  ];
}

function initiateCost1()
{//retourne les facteurs de dégâts infligés par le clic du bouton
    return [0,-1,-1,-1,-1,-4,-3,-1,-2,-2,-4,-1,-1,-5,-3,-4,0,0];
}

export { initiateChoice1, initiateCost1 }

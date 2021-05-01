# Juste un jeu avec 2 boutons
## Récupération du projet
Nous vous invitons à télécharger le projet web à ce trouvant à cette adresse :
```
https://github.com/LS79370/Button
```
Pour le bon fonctionnement du projet, vous devez installer des dépendances à l'aide de la commande ci-dessous (avec installation de Node.js au préalable) :
```
npm install
```
Vous pouvez ensuite lancer le projet avec la commande ci-après, vous le retrouverez sur http://localhost:8080/ :
```
npm run serve
```
Vous pouvez sinon aller sur le site à cette adresse : https://just-a-game-with-2-buttons.netlify.app/.
### L'Idée...
L'idée était de de quelque chose qui nous amusait, le meme avec la personne devant un choix difficile : 2 boutons !
Vous trouverez un exemple ci-dessous.

![image](./src/assets/img/readme/meme.jpg)
#### Le Jeu
Nous avons donc décider de nous réinterpréter cette image au sein d'un jeu en ligne :

vous êtes le capitaine d'une navette spatiale en route vers Mars et à l'aide de 2 boutons, vous devez faire des choix difficiles pour arriver à destination avec un vaisseau en bon état et un équipage le plus complet possible...
#### L'Inspiration
Le jeu *Sort the court* est notre principale inspiration. Dans ce jeu, vous dirigez un royaume et devez sacrifiez des ressources pour faire en sorte que votre royaume ne s'effondre pas.

![image](./src/assets/img/readme/sortTheCourt.png)

Dans notre jeu, vous devez alterner entre sacrifier **des membres de votre équipage** ou **des parties de votre vaisseau** le temps d'un trajet vers Mars, le but étant d'arriver sur la planète dans un vaisseau (pas forcément entier) et avec une équipe (plus ou moins réduite).
### Un petit plus
Nous avons eu l'idée d'ajouter un joker dans le jeu, à utilisation unique ! Il vous permettra de passer une des péripéties les plus difficiles !
Il s'agit d'un 3e bouton, mais bon... les gros boutons rouges, c'était déjà pris !
#### Comment ?
Ainsi, nous n'utiliserons pas de bouton pour ce joker mais une puce... non pas une puce d'un marchien,  une puce **NFC** !
Si l'appareil que vous utilisez (téléphone, tablette, ordinateur...) est compatible au **NFC**, il vous suffit de scanner la puce avec votre appareil pour utiliser le joker.

Cela nécessite en revanche de programmer la puce au préalable pour l'utiliser. (Comme pour les piles, c'est pas fourni ! )
#### Programmer une puce NFC
Pour programmer la puce, il vous faut un lecteur NFC compatible comme NFC Tools sur Android ou sur PC. Dans NFC Tools par exemple, il faut sélectionner l'option "ajouter un enregistrement", puis celle de "Texte". Ensuite, il suffit d'écrire le message 'skip', puis cliquer sur "Ecrire" et passer la puce sur le lecteur. L'application écrit dans la puce le texte 'skip'. 
Ce mot de passe sera utilisé pour lancer la fonction de joker. Une fois ceci fait, votre puce est prête. Vous pouvez commencer à jouer, et si un évenement est trop difficile, il suffit juste de scanner la puce.
L'évenement en question est passé grâce au joker, ce qui vous permet de ne pas payer les coûts de celui-ci.
### Notre charte graphique
#### Mon 1er est un ensemble d'images et de couleurs...
![image](./src/assets/img/readme/charteGraphique1.PNG)
#### Mon 2nd est du texte...
![image](./src/assets/img/readme/charteGraphique2.PNG)
#### Mon tout a une version desktop...
![image](./src/assets/img/readme/charteGraphique3.PNG)
#### Et une version mobile !
![image](./src/assets/img/readme/charteGraphique4.PNG)
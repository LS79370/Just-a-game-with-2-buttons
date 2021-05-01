# Juste un jeu avec 2 boutons
## Rï¿½cupï¿½ration du projet
Nous vous invitons ï¿½ tï¿½lï¿½charger le projet web ï¿½ ce trouvant ï¿½ cette adresse :
```
https://github.com/LS79370/Button
```
Pour le bon fonctionnement du projet, vous devez installer des dï¿½pendances ï¿½ l'aide de la commande ci-dessous (avec installation de Node.js au prï¿½alable) :
```
npm install
```
Vous pouvez ensuite lancer le projet avec la commande ci-aprï¿½s, vous le retrouverez sur http://localhost:8080/ :
```
npm run serve
```
Vous pouvez sinon aller sur le site ï¿½ cette adresse : https://just-a-game-with-2-buttons.netlify.app/.
### L'Idï¿½e...
L'idï¿½e ï¿½tait de de quelque chose qui nous amusait, le meme avec la personne devant un choix difficile : 2 boutons !
Vous trouverez un exemple ci-dessous.

![image](./src/assets/img/readme/meme.jpg)
#### Le Jeu
Nous avons donc dï¿½cider de nous rï¿½interprï¿½ter cette image au sein d'un jeu en ligne :

vous ï¿½tes le capitaine d'une navette spatiale en route vers Mars et ï¿½ l'aide de 2 boutons, vous devez faire des choix difficiles pour arriver ï¿½ destination avec un vaisseau en bon ï¿½tat et un ï¿½quipage le plus complet possible...
#### L'Inspiration
Le jeu *Sort the court* est notre principale inspiration. Dans ce jeu, vous dirigez un royaume et devez sacrifiez des ressources pour faire en sorte que votre royaume ne s'effondre pas.

![image](./src/assets/img/readme/sortTheCourt.png)

Dans notre jeu, vous devez alterner entre sacrifier **des membres de votre ï¿½quipage** ou **des parties de votre vaisseau** le temps d'un trajet vers Mars, le but ï¿½tant d'arriver sur la planï¿½te dans un vaisseau (pas forcï¿½ment entier) et avec une ï¿½quipe (plus ou moins rï¿½duite).
### Un petit plus
Nous avons eu l'idï¿½e d'ajouter un joker dans le jeu, ï¿½ utilisation unique ! Il vous permettra de passer une des pï¿½ripï¿½ties les plus difficiles !
Il s'agit d'un 3e bouton, mais bon... les gros boutons rouges, c'ï¿½tait dï¿½jï¿½ pris !
#### Comment ?
Ainsi, nous n'utiliserons pas de bouton pour ce joker mais une puce... non pas une puce d'un marchien,  une puce **NFC** !
Si l'appareil que vous utilisez (tï¿½lï¿½phone, tablette, ordinateur...) est compatible au **NFC**, il vous suffit de scanner la puce avec votre appareil pour utiliser le joker.

Cela nï¿½cessite en revanche de programmer la puce au prï¿½alable pour l'utiliser. (Comme pour les piles, c'est pas fourni ! )
#### Programmer une puce NFC
<<<<<<< HEAD
Pour programmer la puce, il vous faut un lecteur NFC compatible comme **NFC Tools** sur Android ou sur PC. Dans NFC Tools par exemple, il faut sï¿½lectionner l'option "**ajouter un enregistrement**", puis celle de "**Texte**". Ensuite, il suffit d'**ï¿½crire le message 'skip'**, puis cliquer sur "**Ecrire**" et passer la puce sur le lecteur. L'application ï¿½crit dans la puce le texte 'skip'. 
Ce mot de passe sera utilisï¿½ pour **lancer la fonction de joker**. Une fois ceci fait, votre puce est prï¿½te. Vous pouvez commencer ï¿½ jouer, et si un ï¿½venement est trop difficile, il suffit juste de scanner la puce.
L'ï¿½venement en question est passï¿½ grï¿½ce au joker, ce qui vous permet de ne pas payer les coï¿½ts de celui-ci. Evidemment, vous ne pourrez utiliser ce joker qu'une seule fois.
=======
Pour programmer la puce, il vous faut un lecteur NFC compatible comme **NFC Tools** sur Android ou sur PC. Dans NFC Tools par exemple, il faut sélectionner l'option "**ajouter un enregistrement**", puis celle de "**Texte**". Ensuite, il suffit d'**écrire le message 'skip'**, puis cliquer sur "**Ecrire**" et passer la puce sur le lecteur. L'application écrit dans la puce le texte 'skip'. 
Ce mot de passe sera utilisé pour **lancer la fonction de joker**. Une fois ceci fait, votre puce est prête. Vous pouvez commencer à jouer, et si un évenement est trop difficile, il suffit juste de scanner la puce.
L'évenement en question est passé grâce au joker, ce qui vous permet de ne pas payer les coûts de celui-ci. Evidemment, vous ne pourrez utiliser ce joker qu'une seule fois.
>>>>>>> main
### Notre charte graphique
#### Mon 1er est un ensemble d'images et de couleurs...
![image](./src/assets/img/readme/charteGraphique1.PNG)
#### Mon 2nd est du texte...
![image](./src/assets/img/readme/charteGraphique2.PNG)
#### Mon tout a une version desktop...
![image](./src/assets/img/readme/charteGraphique3.PNG)
#### Et une version mobile !
![image](./src/assets/img/readme/charteGraphique4.PNG)
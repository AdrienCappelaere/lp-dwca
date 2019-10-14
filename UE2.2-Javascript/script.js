//Exercices Javascript UE2.2//

//A partir de 2 nombres, effectuer les opérations +, -, * et / //

//On défini des variables//
var x, y, somme , multiple, division, soustraction;

//On attribu des valeurs à ces variables//
x = 12;
y = 5;

//On crée des opérations de calcul//
somme = x + y;
multiple = x * y;
division = x / y;
soustraction = x - y;

//On affiche le résultat de ces calculs//
console.log("Exercice 1 : utiliser les opérateurs standards")
console.log("La somme est "+somme);
console.log("La multiplication est "+multiple);
console.log("La division est "+division);
console.log("La soustraction est "+soustraction);

/*Appliquez l'opérateur modulo (%) sur un nombre, opération qui retourne le reste de la division.
Par ex. 5 % 2, retourne 1. En effet 5 ne se divise pas par 2, mais 2 * 2 = 4, il reste donc 1 pour obtenir 5*/

var modulo;
modulo = x%y;

console.log("Exercice 2 : Utiliser la fonction modulo")
console.log("Le modulo de "+x+" divisé par "+y+" est "+modulo);

//D'un nombre n donné, calculez le carré, le cube. Pour le nombre 3, le carré vaut 3 * 3, le cube vaut 3 * 3 * 3, soit 9 et 27, respectivement.//
var n, carre, cube;
n = 4;
carre = n*n;
cube = n*n*n;

console.log("Exercice 3 : carré et cube");
console.log("Le carré de "+n+" est "+carre);
console.log("Le cube de "+n+" est "+cube);

//Soit un rectangle de longueur L et de largeur l, calculez le périmètre, la surface.//
var L, l, perimetre, surface;
L = 11; l = 7;
perimetre = l*2+L*2;
surface = l*L;

console.log("Exercice 4 : Périmètre et surface");
console.log("Le périmètre d'un rectangle de longueur "+L+"cm et de largeur "+l+"cm est de "+perimetre+"cm");
console.log("La surface d'un rectangle de longueur "+L+"cm et de largeur "+l+"cm est de "+surface+"cm²");

//D'un cercle de rayon R, calculez le diamètre, le périmètre, la surface. On prendra pour Pi la valeur 3.14, ou l'objet mathématique en javascript Math.PI //
var r, diametre, cercleperimetre, cerclesurface;
r = 6;
diametre=2*r;
cercleperimetre = 2*r*Math.PI;
cerclesurface = r*r*Math.PI;

console.log("Exercice 5 : Calculs pour un cercle");
console.log("Le diamètre d'un cercle de rayon "+r+"cm est "+diametre+"cm");
console.log("Le périmètre d'un cercle de rayon "+r+"cm est "+Math.round(cercleperimetre)+"cm");
console.log("Le diamètre d'un cercle de rayon "+r+"cm est "+Math.round(cerclesurface)+"cm");

//D'un montant HT, calculez la TVA (on prendra un taux de TVA de 20%), puis le montant TTC //
var ht, tva, ttc;
ht = 50;
tva = 50*0.2;
ttc = ht + tva;

console.log("Exercice 6 : Prix HT, TVA et TTC");
console.log("Pour un prix hors taxe de "+ht+"€, la TVA s'élève à "+tva+"€ et le prix TTC est de "+ttc+"€.")

//Convertir un nombre de jours en heures, minutes, puis secondes. Par ex. 5 jours, c'est 120h, ou 7200mn ou encore 432000s. //
var jour, heure, minute, seconde;
jour = 7;
heure = jour*24;
minute = jour*heure*60;
seconde = jour*heure*minute*60;

console.log("Exercice 7 : Jour, heures, minutes et secondes");
console.log("Dans "+jour+" jours, il y a "+heure+" heures, "+minute+" minutes et "+seconde+" secondes.")

/*Convertir un nombre de secondes en nombre de jours, d'heures, de minutes et de secondes. Utiliser l'opérateur modulo %. 1 jour, c'est 86400s.
Information annexe : Typiquement on appelle un timestamp le nombre de secondes écoulées depuis le 1er janvier 1970 (langage PHP)*/

//J'utilise les variables définies à l'exercice précédent en ajoutant un caractère aléatoire entre 1000 et 99999999 aux nombres de secondes initiales//
function getRandom(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

var secondeDepart
secondeDepart = getRandom(1000,99999999);
jour = Math.round(secondeDepart/86400);
heure = Math.round(secondeDepart%86400/3600);
minute = Math.round(secondeDepart%86400%3600/60);
seconde = Math.round(secondeDepart%86400%3600%60/60);

console.log("Exercice 8 : Transformer un nombre de secondes en jour, heure, minute et secondes")
console.log(secondeDepart+" secondes correspondent à "+jour+" jours, "+heure+" heures, "+minute+" minutes et "+seconde+" secondes.");
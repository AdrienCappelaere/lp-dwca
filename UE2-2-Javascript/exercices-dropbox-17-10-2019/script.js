/*
Exercice 1
A, B et C sont 3 variables entre 1 et 9.
ABC est une variable comprise en 111 et 999, où A est la centaine, B la dizaine et C l'unité.
Il faut présenter avec un console.log() les itérations où ABC = A³ + B³ + C³
*/
console.log ("Exercice 1")
console.log ("Les nombres ci-dessous sont ceux pour lesquels ABC = A³ + B³ + C³")
var a, b, c;

for (a = 1; a < 10; a++) {
    for (b = 1; b < 10; b++) {
        for (c = 1; c < 10; c++) {
            var abc = a*100 + b * 10 + c;
            var test = Math.pow(a, 3)+Math.pow(b, 3)+Math.pow(c, 3);
            if (abc == test) {
                console.log(abc);
                } else {};
        };
    };
};

/*
Exercice 2
Il faut rendre le change de la manière la plus efficace avec des billets de 1, 5, 10, 20, 50, 100 et 200 manat
*/
console.log ("Exercice 2")
var b1, b5, b10, b20, b50, b100, b200, change;

// Je génère un nombre au hasard pour le change //
function getRandom(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
};
change = getRandom(1000, 9999);
console.log("Votre change initial est de "+change+" Manat.");

b200 = Math.floor(change/200);
b100 = Math.floor(change%200/100);
b50 = Math.floor(change%200%100/50);
b20 = Math.floor(change%200%100%50/20);
b10 = Math.floor(change%200%100%50%20/10);
b5 = Math.floor(change%200%100%50%20%10/5);
b1 = Math.floor(change%200%100%50%20%10%5/1);

/* PENSER A SUPPRIMER CE COMMENTAIRE AVANT DE RENDRE LES EXERCICES !!!
console.log("Il vous faut "+b200+" billets de 200 manat, "+b100+" billets de 100 manat, "+b50+" billets de 50 manat, 
"+b20+" billets de 20 manat, "+b10+" billets de 10 manat, "+b5+" billets de 5 manat et "+b1+" billets de 1 manat pour vos "+change+" manat de change.")
*/

/*
Exercice 3
Il faut tester la validité de numéros de CB avec l'algorithme de Luhn.
*/
console.log ("Exercice 3 - A FAIRE")
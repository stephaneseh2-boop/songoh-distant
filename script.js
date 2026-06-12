// ===== CODE 01 =====
function Message() {
  alert("Afficher ce message lorsque vous cliquez sur le bouton Afficher");
}

// ===== CODE 02 =====
function code02() {
  alert("Afficher ce message :Bonjour à Tous");
}

// ===== CODE 03 =====
function code03() {
  alert("Si vous voyez ce message c'est que votre code a été exécuté");
}

// ===== CODE 04 =====
var Nom = "Emile Zola";
function Afficher() {
  document.getElementById("output04").innerHTML = Nom;
}

// ===== CODE 05 =====
var Note = 85;
var Bonus = 5;
function Afficher_Note() {
  var result = Note + Bonus;
  result--;
  document.getElementById("output05").innerHTML = "Résultat : " + result;
}

// ===== CODE 06 =====
function code06() {
  var d = new Date();
  var time = d.getHours();
  if (time < 10) {
    document.getElementById("output06").innerHTML = "<b>Good morning</b>";
  } else {
    document.getElementById("output06").innerHTML = "";
  }
}

// ===== CODE 07 =====
function code07() {
  var d = new Date();
  var time = d.getHours();
  if (time < 10) {
    document.getElementById("output07").innerHTML = "<b>Good morning</b>";
  } else {
    document.getElementById("output07").innerHTML = "<b>Good day</b>";
  }
}

// ===== CODE 08 =====
function code08() {
  var d = new Date();
  var theDay = d.getDay();
  var msg;
  switch (theDay) {
    case 5: msg = "Finally Friday"; break;
    case 6: msg = "Super Saturday"; break;
    case 0: msg = "Sleepy Sunday"; break;
    default: msg = "I'm looking forward to this weekend!";
  }
  document.getElementById("output08").innerHTML = msg;
}

// ===== CODE 09 =====
function code09() {
  var out = "";
  for (var i = 0; i <= 5; i++) {
    out += "The number is " + i + "<br />";
  }
  document.getElementById("output09").innerHTML = out;
}

// ===== CODE 10 =====
function code10() {
  var i = 0;
  var out = "";
  while (i <= 5) {
    out += "The number is " + i + "<br />";
    i++;
  }
  document.getElementById("output10").innerHTML = out;
}

// ===== CODE 11 =====
function code11() {
  var i = 0;
  var out = "";
  do {
    out += "The number is " + i + "<br />";
    i++;
  } while (i <= 5);
  document.getElementById("output11").innerHTML = out;
}

// ===== CODE 12 =====
function somme_N_entiers(nb) {
  var somme = 0;
  var out = "";
  for (var i = 1; i <= nb; i++) {
    somme = somme + i;
    out += "Pour i = " + i + " , somme = " + somme + "<br />";
  }
  document.getElementById("output12").innerHTML = out;
  return somme;
}

// ===== CODE 13 =====
function somme_N_entiers2(nb) {
  var somme = 0;
  var out = "";
  for (var i = 1; i <= nb; i++) {
    somme = somme + i;
    out += "Pour i = " + i + " , somme = " + somme + "<br />";
  }
  document.getElementById("output13").innerHTML = out;
  return somme;
}

// ===== CODE 14 =====
function Nbre_images() {
  var x = document.getElementsByTagName("img");
  alert("Nombre d'images : " + x.length);
}

// ===== CODE 15 =====
function obtenirValeur() {
  var x = document.getElementById("titre");
  alert(x.innerHTML);
}

// ===== CODE 16 =====
function testerMdp() {
  var mdp = "motdepasse";
  var password = prompt("Entrer votre mot de passe:", "");
  if (password == mdp) {
    alert("Bon mot de passe ! Redirection vers interets.html");
  } else {
    alert("Mauvais mot de passe ! Redirection vers erreur.html");
  }
}

// ===== CODE 17 =====
function Menu(x) {
  var pages = ["", "programmeur.html", "outils.html", "interets.html", "formulaire.html"];
  if (x > 0) {
    document.getElementById("dest").innerHTML =
      "Redirection vers : <b>" + pages[x] + "</b>";
  }
}

// ===== CODE 18 =====
function Tester(Forme1) {
  var choix = null;
  for (var i = 0; i < Forme1.test.length; i++) {
    if (Forme1.test[i].checked) {
      choix = Forme1.test[i].value;
    }
  }
  if (choix) {
    alert("Vous avez choisi : " + choix);
  } else {
    alert("Veuillez sélectionner une option.");
  }
}

// ===== CODE 19 =====
function Choix_Reponse(Forme2) {
  if (Forme2.Case1.checked && Forme2.Case2.checked) {
    alert("Vous avez choisi la bonne réponse !");
  } else {
    alert("Vous n'avez pas la bonne réponse.");
  }
}

// ===== CODE 20 =====
function afficherClick() {
  alert("Ceci est un Click");
}

// ===== CODE 21 =====
function Bienvenue() {
  alert("Bienvenue sur mon site : Bonne navigation");
}
function AuRevoir() {
  alert("Au revoir ! À bientôt.");
}

// ===== CODE 22 =====
function mouseOver() {
  document.getElementById("b1").style.background = "#ff6b35";
  document.getElementById("b1").innerText = "Souris dessus !";
}
function mouseOut() {
  document.getElementById("b1").style.background = "#0077cc";
  document.getElementById("b1").innerText = "Survolez-moi";
}

// ===== CODE 23 =====
function setStyle(id) {
  var y = document.getElementById(id);
  y.style.background = "yellow";
  y.style.outline = "2px solid orange";
}
function removeStyle(id) {
  var y = document.getElementById(id);
  y.style.background = "";
  y.style.outline = "";
}

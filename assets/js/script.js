var eersteVariabele = "test";
console.log(eersteVariabele);

var voornaam = "Dean"; // wijzig dit in jouw eigen voornaam
var tussenvoegsel = "Jeremy"; // wijzig dit in jouw eigen eventuele tussenvoegsel
var achternaam = "Blok"; // wijzig dit in jouw eigen achternaam
var volledigeNaam = voornaam + " " + tussenvoegsel + " " +achternaam; // plak hier de 3 bovenstaande variabelen aan elkaar, met spaties
var geboortedag = "8"; // je geboortedag
var geboortemaand = "Maart"; // je geboortemaand
var geboortejaar = "2006"; // je geboortejaar
var huidig_jaartal = "2022"// het huidige jaar;
var leeftijd = huidig_jaartal - geboortejaar; // bereken hier jouw leeftijd op basis van de eerder ingevulde geboortegegevens.
// const dag_van_het_jaar = new Date();// bereken hier hoeveelste dag van dit kalenderjaar het is
var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = now - start;
var oneDay = 1000 * 60 * 60 * 24;
var dag_van_het_jaar = Math.floor(diff / oneDay);
console.log('Dag van het jaar: ' + dag_van_het_jaar);
var straat = "Burgermeester van der heidelaan"; // je straat;
var huisnummer = "4"; // je huisnummer;
var woonplaats = "Vleuten"; // je woonplaats;
// var woonachtig_in_utrecht = ; // check hier dmv een boolean of jouw woonplaats gelijk is aan "Utrecht"
const woonachtig_in_utrecht = new Boolean(true); 
var aantal_studenten_in_deze_klas = 24;
var kosten_van_frikandelbroodje = 1.76;
var totale_lunchkosten = 2 * aantal_studenten_in_deze_klas * kosten_van_frikandelbroodje; // bereken hier het totaalbedrag als iedere student 2 frikandelbroodjes zou kopen



// toon de waardes hieronder op het scherm gescheiden door het html: '<br>' element voor een nieuwe-regel
//   bijvoorbeeld:
  document.write("Voornaam: " + voornaam);
  document.write("<br>");
  document.write("Tussenvoegsel: " + tussenvoegsel);
  document.write("<br>");
  document.write("Achternaam: " + achternaam);
  document.write("<br>");
  document.write("Volledigenaam: " + volledigeNaam);
  document.write("<br>");
  document.write("Geboortedag: " + geboortedag);
  document.write("<br>");
  document.write("Geboortemaand: " + geboortemaand);
  document.write("<br>");
  document.write("Geboortejaar: " + geboortejaar);
  document.write("<br>");
  document.write("Huidig jaartal: " + huidig_jaartal);
  document.write("<br>");
  document.write("Leeftijd: " + leeftijd);
  document.write("<br>");
  document.write("Dag van het jaar: " + dag_van_het_jaar);
  document.write("<br>");
  document.write("Straat: " + straat);
  document.write("<br>");
  document.write("Huisnummer: " + huisnummer);
  document.write("<br>");
  document.write("Woonplaats: " + woonplaats);
  document.write("<br>");
  document.write("Woonachtig Utrecht: " + woonachtig_in_utrecht);
  document.write("<br>");
  document.write(" Aantal studenten: " + aantal_studenten_in_deze_klas);
  document.write("<br>");
  document.write(" Kosten van frikandelbroodje: " + kosten_van_frikandelbroodje);
  document.write("<br>");
  document.write("Totale lunch kosten: " + totale_lunchkosten);
  document.write("<br>");
  
//   enzovoorts, zorg dat alle bovenstaande variabelen op het scherm komen


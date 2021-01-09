var prefixes = [
    "2",
    "3",
    "4",
    "7",
    "24",
    "89",
    "69",
    "99",
    "100",
    "204",
    "Extrem",
    "Brudal",
    "Neue",
    "Klasse",
    "Erfahrene",
    "Richtig",
    "Kaum",
    "Sicke",
    "Arg",
    "Wenig",
    "Bissle",
    "Mittel",
    "Scho ziemlich",
    "Etwas",
    "Ganz schoen",
    "Eher wenig",
    "Die",
    "Auzoga"
];

var adjectives = [
    "Nackte",
    "Bsoffene",
    "Naerrische",
    "Hungrige",
    "Verspielte",
    "Sportliche",
    "Hybride",
    "Nerdige",
    "Zockende",
    "Saufende",
    "Weibische",
    "Friedliche",
    "Freundliche",
    "Taktische",
    "Gerissene",
    "Faule",
    "Kreative",
    "Extreme",
    "Lustige",
    "Gewiefte",
    "Agressive",
    "Hoorige",
    "Huebsche",
    "Junge",
    "Ausdauernde",
    "Flinke",
    "Wortgewandte",
    "Gewitzte",
    "Clevere",
    "Auzogene",
    "Umtribiege",
    "Augriabige",
    "Auleidige",
    "Auzogene",
    "Assoziale",
    "Tagebuchschreibende",
    "Aumegliche",
    "Produzierende",
    "Glueckliche",
    "Spassige",
    "Muskuloese",
    "Dancende",
    "Trinkende",
    "Fahrende",
    "Lachende",
    "Geile",
    "Schleifende",
    "Einhaendige",
    "Laute",
    "Hobelnde",
    "Nüchterne"


];

var nouns = [
    "Besoffene",
    "Kreative",
    "Spielmacher",
    "Regierende",
    "Saufnasen",
    "Pizzafresser",
    "Suffkoepfe",
    "Spassmacher",
    "Zeichner",
    "Optimierer",
    "Portionierer",
    "Ausdauernde",
    "Clevere",
    "Maschina",
    "Saufende",
    "Sauhunde",
    "Auzogene",
    "Raketa",
    "Trialer",
    "Verbrecher",
    "Geniesser",
    "Filmemacher",
    "Produzenten",
    "Rematiker",
    "Spieler",
    "Gamer",
    "Nerds",
    "Affa",
    "Kaschper",
    "Bananen",
    "Penen",
    "Rettiche",
    "Pampelmusen",
    "Busa",
    "Vesper",
    "Luemmel",
    "Loerres",
    "Pimml",
    "Hobel"
];

var companyLabel = [
    "Bande",
    "Haufen",
    "Truppe",
    "Baggage",
    "Leit",
    "Pack",
    "Ltd.",
    "GmbH",
    "& Co. KG",
    "KG",
    "AG",
    "Jungs"
];

// Calculate the number of options
var countOptions = prefixes.length * adjectives.length * nouns.length * companyLabel.length;
countOptions = countOptions.toLocaleString();
console.log (countOptions);


function generateName () {

    var chosenPrefix;
    var chosenAdjective;
    var chosenNoun;

    // Randomly choose a word
    chosenAdjective = adjectives[Math.floor(Math.random()*adjectives.length)];
    chosenNoun = nouns[Math.floor(Math.random()*nouns.length)];


    // Exceptions

    var cases = [
    ];


    if (cases.indexOf(chosenAdjective) != -1) { var percentagePrefix = 100; }
    else { var percentagePrefix = Math.floor(Math.random() * 100); }



    // Chance to add a Prefix
    if (percentagePrefix <= 40) { chosenPrefix = prefixes[Math.floor(Math.random()*prefixes.length)]; }
    else { chosenPrefix = ""; }


    // Put the full name into a variable
    var yourName =
        chosenPrefix +
        " " +
        chosenAdjective +
        " " +
        chosenNoun
        ;

    // Display the name in the HTML
    document.write(yourName);
}

function showCompany () {
    var chosenCompany;

    // Chance to add a Company Label
    var percentageCompany = Math.floor(Math.random() * 100);

    if (percentageCompany <= 50) { chosenCompany = companyLabel[Math.floor(Math.random()*companyLabel.length)]; }
    else { chosenCompany = ""; }

    // Display the Label in the HTML
    document.write(chosenCompany);
}

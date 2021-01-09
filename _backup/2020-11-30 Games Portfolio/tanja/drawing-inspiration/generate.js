
var prefixes = [
    "charlie der hund",
    "mama",
    "lisa die lehrerin",
    "karstn der wellensittich",
    "jakob der bär",
    "deine nachbarin",
    "deine beste freundin",
    "dein enorm toller freund",
    "tanja",
    "ein einsamer koala",
    "dein bruder",
    "eins von zwei schweinchen",
    "erdmund das erdmännchen",
    "der kellner aus der havanna bar",
    "jovan der alte lurch",
    "der kollege vom campingplatz in frankreich, der seinen sohn trotz corona in die schule schicken wollte",
    "eine weiße eule",
    "der nächste, an den du denkst",
    "mr. hund",
    "eine verrückte kartoffel",
    "ein fettsack",
    "affe gerhard",
    "der typ mit dem fliegenklatschen-tattoo auf'm arsch",
    "der dickliche bauarbeiter",
    "der kleine lenny",
    "der herabschauende hund",
    "ein hahn",
    "eine giraffe mit verdammt kurzem hals",
    "olivia wilde",
    "sean paul",
    "manch einer",
    "mady",
    "niemand",
    
    "alexa",
    "elisa",
    "joe black",
];

var adjectives = [
    "macht yoga",
    "macht den aufschauenden hund",
    "futtert nackt einen toast",
    "schnarcht enorm laut",
    "kriecht über den boden",
    "stirbt vor lachen (literally)",
    "zeichnet sich selbst",
    "bastelt geschenke",
    "putzt die wohnung",
    "programmiert spiele",
    "ruft im wahn 'kaufen, kaufen'",
    "macht einen kopfstand",
    "buddelt ein loch",
    "betrinkt sich",
    "entblößt sich",
    "schlägt wild um sich",
    "futtert eukalyptus",
    "mag wuschelhaarige pandas",
    "kuschelt mit einem hühnchen",
    "tindert",
    "hat ne kurze hose an",
    "isst käse und trinkt dazu wein",
    "kocht gemütlich vor sich hin",
    "tanzt nackt",
    "daydrinkt",
    "macht unsinn",
    "zündet frech ein haus an",
    "stinkt ganz schön",
    "macht schweinische sachen",
    "spielt 'die sims'",
    "schubst kinder vom fahrrad",
    "hängt den ganzen tag auf insta rum",
    "rennt wie bekloppt",
    
    "castet talente",
    "hat 3 augen",
    "springt hoch",
];

var nouns = [
    "in einem aufzug",
    "in der schule",
    "in einem verdammt kleinen schuhkarton",
    "auf der baustelle",
    "nachts",
    "ohne unterhose",
    "im vierundsechzigsten stock",
    "mit nur einem finger",
    "während die welt entsetzt dabei zuschaut",
    "auf einer einsamen insel",
    "ohne scham",
    "und lacht laut dabei",
    "auf zwei beinen",
    "auf der königstraße",
    "während einer LGBTQ+ parade",
    "und malt dabei das erste was dir in den sinn kommt",
    "in der u-bahn",
    "mit doppeltem mundschutz",
    "obwohl es winter ist",
    "obwohl keiner da ist",
    "mit den füßen",
    "weil es schneit",
    "in einem tunnel",
    "mit einem zauberstab in der hand",
    "und hat ein loch in beiden socken",
    "während ein meteor auf die erde zurast",
    "während ein kuchen aus dem fenster fällt",
    "und corona ist auch kein thema mehr",
    "und macht tiktok videos davon",
    "und postet es auf pornhub",
    "weil die bahn mal wieder zu spät ist",
    "auf ganz dramatische art",
    "ganz romantisch",
    
    "für sich selbst",
    "in der wüste",
    "und gibt vollgas",
];

// Calculate the number of options
var countOptions = prefixes.length * adjectives.length * nouns.length * companyLabel.length;
countOptions = countOptions.toLocaleString();
console.log (countOptions);


function generateInspiration() {

    var chosenPrefix;
    var chosenAdjective;
    var chosenNoun;

    // Randomly choose a word
    chosenPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    chosenAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    chosenNoun = nouns[Math.floor(Math.random() * nouns.length)];

    // Put the full name into a variable
    var yourName =
        chosenPrefix +
        " " +
        chosenAdjective +
        " " +
        chosenNoun +
        "."
        ;

    // Display the name in the HTML
    document.write(yourName);
}


var themes = [
    "Clown",
    "Jockel",
    "Kindergarten",
    "Mafia",
    "Pirata",
    "Wikinger",
    "Zirkus",
    
    "Fahrrädle",
    "Obst & Gemüse",
    "Raketa",
    "Sport",
    "Tiere",
    
    "Mann ⬌ Frau",
    "Hartz IV",
    "Manu",
    "Nerds",
    "Promis",
    "Tittn",
    
    "Elektronisch",
    "Fett",
    "Gwalttätig",
    "Intelligent",
    "Mysteriös",
    "Spaß",
    "Verhüllt",
    
    "Dunkel",
    "Grün",
    "Hell",
    "Rot",
    "Schwarz-weiß",
    
    "Afrikanisch",
    "Asiatisch",
    "Deutsch",
    "Hawaiianisch",
    "Italienisch",
    "Russisch",
    "Spanisch",
    "Südamerikanisch",
    "Türkisch",
    
    "Bauernhof",
    "Malle",
    "Mond",
    "Puff",
    "Top10",
    "Wald",
    
    "80er",
    "90er",
    "Mittelalter",
    "Sommer",
    "Winter",

];

// Calculate the number of options
var countOptions = prefixes.length * adjectives.length * nouns.length * companyLabel.length;
countOptions = countOptions.toLocaleString();
console.log (countOptions);


function generateTheme(emoji) {
    var chosenTheme;

    // Randomly choose a word
    chosenTheme = themes[Math.floor(Math.random() * themes.length)];

    var newTheme = emoji + " " + chosenTheme;

    // Display the name in the HTML
    document.write(newTheme);
}
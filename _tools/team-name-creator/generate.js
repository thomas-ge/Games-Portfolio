var prefixes = [
    "The",
    "Very",
    "Super",
    "Insanely",
    "Completely",
    "Awesomely",
    "Extremely",
    "Mostly",
    "Somehow",
    "Weirdly",
    "Barely",
    "Heavily",
    "Painfully",
    "Excessively",
    "Awkwardly",
    "Dramatically",
    "Perfectly",
    "Rarely",
    "Always",
    "Sometimes",
    "Somewhat",
    "Mildly",
    "Sufficiently",
    "Hardly",
    "Nearly",
    "Highly",
    "Madly",
    "Mostly",

    "You",
    "Us",
    "We",
    "Our",
    "We like",
    "We love",

    "Don't do",
    "Don't argue with",
    "Don't eat",
    "Don't fight with",

    "End of the",
    "The first",
    "The last",
    // "The Vault",
    "Guild of the",
    "New Generation of the",
    "We love",
    "Sons of",
    "Children of the",
    "Protectors of the",
    "Guardians of the",
    "Brotherhood of the",
    "All Hail the",
    "Never enough",
    "We hate",
    "Our beloved",
    "Our enemies are",
    "No one likes",
    "Number One",

    // "One",
    "Two",
    "Three",
    "Four",
    // "1",
    "2",
    "3",
    "4",
    "24",
    "89",
    "99",
    "100",
    "204"
];

var adjectives = [
    "Good",
    "Crazy",
    "Lazy",
    "Stupid",
    "Awesome",
    "Great",

    "Swabian",
    "Bavarian",
    "German",
    "American",
    "French",
    "Italian",
    "Spanish",
    "British",
    "Chinese",
    "Japanese",
    "Indian",
    "South American",
    "Australian",
    "Scandinavian",
    "Canadian",
    "Eastern",
    "Western",
    "Northern",
    "Southern",

    "Tall",
    "Tiny",
    "Cute",
    "Crafty",
    "Huge",

    "Pink",
    "Purple",
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Orange",
    "Black",
    "White",

    "Rude",
    "Self-conscious",
    "Medium-rare",
    "Sexy",
    "Insane",
    "Toasted",
    "Concerned",
    "Wasted",
    "Drunken",
    "Nifty",
    "Chubby",
    "Fat",
    "Well-toned",
    "Introverted",
    "Hot",
    "Naked",
    "Nice",
    "Small",
    "Big",
    "Intergalactic",
    "Fast",
    "Slow",
    "Dancing",
    "Hipster",
    "Illegal",
    "Flat",

    "2-dimensional",
    "Old",
    "High",
    "Bad",
    "Two Thirds",
    "Half",

    "Sweet",
    "Bitter",
    "Salty",
    "Blind",
    "Dirty",
    "Filthy",
    "Painful",
    "Fluffy",
    "Loud",
    "Quiet",
    "Dramatic",
    "Dark",
    "Cool",
    "Wet",
    "Slick",
    "Tight",
    "Evil",
    "Nervous",
    "Lonely",
    "Bored",
    "Frantic",
    "Creepy",
    "Terrible",
    "Fancy",
    "Awkward",
    "Clumsy",
    "Horrible",

    "Heavy",
    "Light-weighted",
    "Concerned",
    "Nasty",
    "Naughty",
    "Nice",
    "Universal",
    "Extroverted",
    "Coding",
    "Creative",
    "Sick",
    "Smoking",
    "Tasty",
    "Selfish",
    "Relaxed",
    "Brave",
    "Damaged",
    "Pathetic",
    "Sympathetic",
    "Raging",
    "Angry",
    "Emotional",
    "Hateful",
    "Intelligent",
    "Infinite",
    "Needy",
    "Noisy",
    "Poor",
    "Pretty",
    "Real",
    "Rich",
    "Loyal",
    "Sticky",
    "Thirsty",
    "Ugly",
    "Handsome",
    "Violent",
    "Wild",
    "Funny",
    "Cursing",
    "Lit",
    "Fly",
    "Woke",
    "Savage",
    "Done",
    // "Square",
    "Epic",
    "Quick",
    "Freezing",
    "Confused",
    "Sleepy",
    "Sneaky",
    "Empty",
    "Wicked",
    "Nuclear",
    "Contaminated",
    "Impressive",
    "Unattractive",
    "Bearded",
    "Shaved",

    // Exceptions

    "End of the",
    "The first",
    "The last",
    // "The Vault",
    "Guild of the",
    "New Generation of the",
    "We love",
    "Sons of",
    "Children of the",
    "Protectors of the",
    "Guardians of the",
    "Brotherhood of the",
    "All Hail the",
    "Never enough",
    "We hate",
    "Our beloved",
    "Our enemies are",
    "No one likes",
    "Number One",

    "24%",
    "50%",
    "24 inches",

    // "Mrs.",
    // "Mr.",
    // "Mr. & Mrs."
];

var nouns = [
    // "Unity Dev",
    // "Unreal Dev",

    // "Mom",
    // "Dad",
    // "Brother",
    // "Sister",

    // "Koala",
    // "Sloth",
    // "Giraffe",
    // "Dog",
    // "Unicorn",
    // "Panda",
    // "Monkey",
    // "Sheep",
    // "Fox",
    // "Rhino",
    // "Wolf",
    // "Puppy",
    // "Cow",
    // "Bear",
    // "Bee",
    // "Animal",
    // "Chicken",
    // "Pig",
    // "Yeti",
    // "Turtle",
    // "Snail",
    // "Zebra",
    // "Penguin",
    // "Squirrel",
    // "Elephant",
    // "Eagle",
    // "Owl",
    // "Bull",

    // "Moustache",
    // "Caveman",
    // "Cavewoman",
    // "Bacon",
    // "Hipster",
    // "Chocolate",
    // "Doctor",
    // "Bratwurst",
    // "Grandpa",
    // "Baby",
    // "Toddler",
    // "Vodkalover",
    // "Rumlover",
    // "Beerlover",
    // "Winelover",
    // "Tequilalover",
    // "Jägermeister",
    // "Whiskeylover",

    // "Swabian",
    // "Bavarian",
    // "German",
    // "American",
    // "Frenchman",
    // "Frenchwoman",
    // "Italian",
    // "Spaniard",
    // "Brit",
    // "Chinese",
    // "Japanese",
    // "Indian",
    // "South American",
    // "Australian",
    // "Scandinavian",
    // "Canadian",

    // "Infinity",
    // // "Hat",
    // // "Bomb",
    // // "Pixel",
    // // "Data",
    // "Boy",
    // "Girl",
    // "People",
    // // "World",
    // "Love",
    // "President",
    // // "Time",
    // "Hero",
    // "Pilot",
    // "Engineer",
    // "Developer",
    // "Dentist",
    // "Firefighter",
    // "Nurse",
    // "Farmer",
    // "Stripper",
    // "Samurai",
    // "Tourist",
    // "Savage",
    // // "Hashtag",
    // "Grandma",
    // "Soldier",
    // "Mage",
    // "Hunter",
    // "Paladin",
    // "Warrior",
    // "Necromancer",
    // "Thief",
    // "Battlemage",
    // "Tank",
    // "Healer",
    // "Ranger",
    // "Alchemist",
    // "Beastmaster",
    // "Rogue",
    // "Shaman",
    // "Warlock",
    // "Blacksmith",
    // "Wizard",
    // "Barbarian",
    // "Cleric",
    // "Bard",
    // "Monk",
    // "Fighter",
    // "Crusader",
    // "Arcanist",
    // "Knight",
    // "Priest",
    // "Patriot",
    // "Adventurer",
    // "Dwarf",
    // "Human",
    // "Elf",
    // "Orc",
    // "Undead",
    // "Drunk",
    // "Berserk",
    // "Zombie",
    // "Smoker",
    // "Snow",
    // "Square",
    // "Beard",
    // // Pie",
    // "Taco",

    // "Captain",
    // "General",
    // "Lieutenant",
    // "Commander",
    // "Admiral",
    // "Major",
    // "Marshal",
    // "Officer",
    // "Sergeant",

    // "Sun",
    // // "Moon",
    // "Star",
    // "Comet",
    // // "Space",
    // // "Fallout",
    // "Banana",
    // "Apple",
    // "Lemon",
    // "Lime",
    // "Avocado",
    // "Broccoli",
    // "Cherry",
    // "Kiwi",
    // "Mushroom",
    // "Peanut",
    // "Berry",
    // "Tomato",
    // "Coconut",
    // "Chili",
    // "Hangover",
    // "Nerd",
    // "Pirate",
    // "Assassin",
    // "Ninja",
    // "Soul",
    // "Virgin",
    // // "Drug",
    // "Astronaut",
    // "Rocketman",
    // "Rocketwoman",
    // "Vegetarian",
    // "Vegan",

    /////////////////////////////////////////////////////////

    "Unity Devs",
    "Unreal Devs",

    "Moms",
    "Dads",
    "Brothers",
    "Sisters",

    "Koalas",
    "Sloths",
    "Giraffes",
    "Dogs",
    "Unicorns",
    "Pandas",
    "Monkeys",
    "Sheeps",
    "Foxes",
    "Rhinos",
    "Wolves",
    "Puppies",
    "Cows",
    "Bears",
    "Bees",
    "Animals",
    "Chickens",
    "Pigs",
    "Yetis",
    "Turtles",
    "Snails",
    "Zebras",
    "Penguins",
    "Squirrels",
    "Elephants",
    "Eagles",
    "Owls",
    "Bulls",

    "Moustaches",
    "Cavemen",
    "Cavewomen",
    "Bacons",
    "Hipsters",
    "Chocolates",
    "Doctors",
    "Bratwursts",
    "Grandpas",
    "Babies",
    "Toddlers",
    "Vodkalovers",
    "Rumlovers",
    "Beerlovers",
    "Winelovers",
    "Tequilalovers",
    "Jägermeisters",
    "Whiskeylovers",

    "Swabians",
    "Bavarians",
    "Germans",
    "Americans",
    "Frenchmen",
    "Frenchwomen",
    "Italians",
    "Spaniards",
    "Brits",
    "Chinese",
    "Japanese",
    "Indians",
    "South Americans",
    "Australians",
    "Scandinavians",
    "Canadians",

    // "Infinities",
    // "Hats",
    // "Bombs",
    // "Pixels",
    // "Datas",
    "Boys",
    "Girls",
    // "Peoples",
    // "Worlds",
    // "Loves",
    "Presidents",
    // "Times",
    "Heroes",
    "Pilots",
    "Engineers",
    "Developers",
    "Dentists",
    "Firefighters",
    "Nurses",
    "Farmers",
    "Strippers",
    "Samurais",
    "Tourists",
    "Savages",
    // "Hashtags",
    "Grandmas",
    "Soldiers",
    "Mages",
    "Hunters",
    "Paladins",
    "Warriors",
    "Necromancers",
    "Thieves",
    "Battlemages",
    "Tanks",
    "Healers",
    "Rangers",
    "Alchemists",
    "Beastmasters",
    "Rogues",
    "Shamans",
    "Warlocks",
    "Blacksmiths",
    "Wizards",
    "Barbarians",
    "Clerics",
    "Bards",
    "Monks",
    "Fighters",
    "Crusaders",
    "Arcanists",
    "Knights",
    "Priests",
    "Patriots",
    "Adventurers",
    "Dwarves",
    "Humans",
    "Elves",
    "Orcs",
    "Undeads",
    "Drunks",
    "Berserks",
    "Zombies",
    "Smokers",
    // "Snows",
    // "Squares",
    "Beards",
    // "Pies",
    "Tacos",

    "Captains",
    "Generals",
    "Lieutenants",
    "Commanders",
    "Admirals",
    "Majors",
    "Marshals",
    "Officers",
    "Sergeants",

    "Suns",
    // "Moons",
    "Stars",
    "Comets",
    // "Spaces",
    // "Fallouts",
    "Bananas",
    "Apples",
    "Lemons",
    "Limes",
    "Avocados",
    "Broccolis",
    "Cherries",
    "Kiwis",
    "Mushrooms",
    "Peanuts",
    "Berries",
    "Tomatoes",
    "Coconuts",
    "Chilis",
    // "Hangovers",
    "Nerds",
    "Pirates",
    "Assassins",
    "Ninjas",
    "Souls",
    "Virgins",
    // "Drugs",
    "Astronauts",
    "Rocketmen",
    "Rocketwomen",
    "Vegetarians",
    "Vegans",

    ""
];

var companyLabel = [
    "Inc.",
    "Corporation",
    // "Softworks",
    // "Arts",
    // "Studio",
    // "Studios",
    // "Industries",
    "Creatives",
    // "Creations",
    // "Development",
    // "Games",
    // "Designs",
    // "Works",
    // "Codeworks",
    // "Productions",
    // "Entertainment",
    // "Interactive",
    "Team",
    "Bunch",
    // "Designworks",
    "Labs",
    "Factory",
    // "Manufactory",
    "Foundry",
    // "Manufacturing",
    // "Forge",
    "Crew",
    "Squad",
    "Horde",
    "Unit",
    "Party",
    "Mafia",
    // "Artists",
    // "Crafts",
    "Ltd.",
    // "Electronics",
    // "Animals"
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
        "End of the",
        "The first",
        "The last",
        // "The Vault",
        "Guild of the",
        "New Generation of the",
        "We love",
        "Sons of",
        "Children of the",
        "Protectors of the",
        "Guardians of the",
        "Brotherhood of the",
        "All Hail the",
        "Never enough",
        "We hate",
        "Our beloved",
        "Our enemies are",
        "No one likes",
        "Number One",

        "24%",
        "50%",
        "24 inches",

        // "Mrs.",
        // "Mr.",
        // "Mr. & Mrs.",
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

    if (percentageCompany <= 30) { chosenCompany = companyLabel[Math.floor(Math.random()*companyLabel.length)]; }
    else { chosenCompany = ""; }

    // Display the Label in the HTML
    document.write(chosenCompany);
}

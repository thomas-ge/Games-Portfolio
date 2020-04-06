Termify = Game_Interpreter.prototype.pluginCommand;
var _termification = new Termify();

var ideas = [];

var genre = [];
var topic = [];
var numberPlayers = [];
var graphicsType = [];
var sideScrollTypes = [];
var moreThanOne = [];
var minutes = [];

var generated;
var generatedCleartext;

var whatType;
var graphicsTypeRandom;
var genreRandom;
var numberPlayersRandom;
var whatMode;
var topicRandomA;
var topicRandomB;

Game_Interpreter.prototype.pluginCommand = function(command, args) {
    Termify.call(this, command, args);

    switch(command) {
        case 'asSentence':
            getTerms();
            asSentence();
            break;
        case 'asList':
            getTerms();
            asList();
            break;
        case 'saveIdea':
            saveIdeas();
            break;
        case 'showIdeas':
            showIdeas();
            break;
    }
};


function getTerms() {

// First we list all the genres
    genre = [
        "Horror",
        "Action",
        "Platformer",
        "Simulation",
        "Shooter",
        "Sports",
        "Adventure",
        "Beat'em Up",
        "Music",
        "JRPG",
        "Action RPG",
        "Strategy",
        "Minigames",
        "Open World",
        "Shoot'em Up",
        "Racing",
        "Boardgames",
        "Quiz",
        "Drinking",
        "Turn-based",
        "Cards",
        "Demolition"
    ];

    genreRandom = genre[Math.floor(Math.random()*genre.length)];

// The we add a topic
    topic = [
        "Space",
        "Underground",
        "Sea",
        "Underwater",
        "Fire",
        "Water",
        "Earth",
        "Wind",
        "Dogs",
        "Movies",
        "Dinosaurs",
        "Apocalypse",
        "War",
        "Medieval",
        "BBQ",
        "Fun",
        "Pizza",
        "Sex",
        "Winter",
        "Western",
        "Japan",
        "Moon",
        "Stupid Animals",
        "Alcohol",
        "Tobacco",
        "Night",
        "Party",
        "Women",
        "Men",
        "Grandpas",
        "Grandmas",
        "Computer",
        "Design",
        "Furniture",
        "Sleeping",
        "University",
        "Politics",
        "Psychology",
        "Nature",
        "Food",
        "Cars",
        "Music",
        "Light",
        "Sun",
        "Violence",
        "Sky",
        "Clouds",
        "Electricity",
        "Survival",
        "Island",
        "Weed",
        "The Future",
        "Ancient Egypt",
        "Ancient Rome",
        "Ancient Greece",
        "Gods",
        "Nightmares",
        "Robots",
        "Stone Age",
        "The Roaring 20s",
        "1940s",
        "1980s",
        "1990s",
        "Hipster",
        "Parallel Universe",
        "Twisted Reality",
        "Time Travel",
        "AI",
        "Vikings",
        "England",
        "Magic",
        "South Pole",
        "Drugs",
        "Gaming",
        "Source Code",
        "Pirates",
        "Burnout"
    ];

    topicRandomA = topic[Math.floor(Math.random()*topic.length)];
    topicRandomB = topic[Math.floor(Math.random()*topic.length)];

// Determine the number of players
    numberPlayers = [
        "1 Player",
        "2 Players",
        "3 Players",
        "4 Players",
        "5 Players",
        "6 Players and more",
        "1-2 Players",
        "1-3 Players",
        "1-4 Players",
        "1-5 Players",
        "2-3 Players",
        "2-4 Players",
        "2-5 Players",
        "3-4 Players",
        "3-5 Players",
        "4-5 Players"
    ];

    numberPlayersRandom = numberPlayers[Math.floor(Math.random()*numberPlayers.length)];

// Determine the time it takes to play
    minutes = [
        "5 Seconds",
        "30 Seconds",
        "1 Minute",
        "5 Minutes",
        "15 Minutes",
        "30 Minutes",
        "1 Hour",
        "2 Hours",
        "more than 3 Hours",
        "the whole evening"
    ];

    minutesRandom = minutes[Math.floor(Math.random()*minutes.length)];


// Set a graphics style
    graphicsType = [
        "Side Scroller",
        "3D",
        "2D",
        "2.5D",
        "Textbased",
        "Visual Novel",
        "Top Down"
    ];

    graphicsTypeRandom = graphicsType[Math.floor(Math.random()*graphicsType.length)];

    // If the graphicsType is "Side Scroller" we need the subcategory
    if (graphicsTypeRandom == "Side Scroller") {
        sideScrollTypes = [
            "Horizontal",
            "Vertical",
            "Diagonal"
        ];
        whatType = sideScrollTypes[Math.floor(Math.random()*sideScrollTypes.length)] + " ";
    } else { whatType = ""; }

// Set the position of the window in RPG Maker
    $gameMessage.setPositionType(1);
}

function asSentence() {
// If the number of players is bigger than One, we need another category for the game mode
    if (numberPlayersRandom !== "1 Player" ) {
        moreThanOne = [
            "Coop",
            "Versus"
        ];
        whatMode = moreThanOne[Math.floor(Math.random()*moreThanOne.length)];
    } else { whatMode = ""; }

// Generate the result and store it
    generated =
    "Let's create a "
    + "\\c[23]"
    + whatType
    + graphicsTypeRandom + " "
    + "\\c[23]"
    + genreRandom + "\n"
    + "\\c[0]"
    + "game for "
    + "\\c[23]"
    + numberPlayersRandom
    + "\\c[0]" + " with a " + "\\c[23]"
    + whatMode
    + "\\c[0]"
    + " mode that takes "
    + "\\c[23]"
    + minutesRandom
    + "\\c[0]"
    + "."
    + "\n\n"
    + "And the topic is "
    + "\\c[23]"
    + topicRandomA
    + "\\c[0]"
    + " and "
    + "\\c[23]"
    + topicRandomB
    + "\\c[0]"
    + ".";

    generatedCleartext =
    whatType + " " + graphicsTypeRandom + " " + genreRandom + " " + topicRandomA + " " + topicRandomB + " " + numberPlayersRandom + " " + whatMode;

// And get the result
    $gameMessage.add(generated);
}

function asList() {
// If the number of players is bigger than One, we need another category for the game mode
    if (numberPlayersRandom !== "1 Player" ) {
        moreThanOne = [
            "Coop",
            "Versus"
        ];
        whatMode = moreThanOne[Math.floor(Math.random()*moreThanOne.length)];
    } else { whatMode = ""; }

// Generate the result and store it
    generated =
    "\\c[0]" + "Type " + "\\c[23]" + whatType + graphicsTypeRandom + "\n" +
    "\\c[0]" + "Genre " + "\\c[23]" + genreRandom + "\n" +
    "\\c[0]" + "Topic " + "\\c[23]" + topicRandomA + "\\c[0]" + " and " + "\\c[23]" + topicRandomB + "\n" +
    "\\c[0]" + "Players " + "\\c[23]" + numberPlayersRandom + "\n" +
    "\\c[0]" + "Mode " + "\\c[23]" + whatMode;

    generatedCleartext =
    whatType + " " + graphicsTypeRandom + " " + genreRandom + " " + topicRandomA + " " + topicRandomB + " " + numberPlayersRandom + " " + whatMode;

// And get the result
    $gameMessage.add(generated);
}

function saveIdeas() {
    ideas.push(generatedCleartext);
    console.log(ideas);
}

function showIdeas() {
    $gameMessage.add(ideas);
}

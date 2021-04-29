
class card {
    constructor(name, health, defence, strength, magic, intelligence, agility, duality, wins) {
        this._name = name;
        this._health = health;
        this._defence = defence;
        this._strength = strength;
        this._magic = magic;
        this._intelligence = intelligence;
        this._agility = agility;
        this._duality = duality;
        this._wins = wins;
    }
    
    get name() {
        return this._name;
    }
    get health() {
        return this._health;
    }
    get defence() {
        return this._defence;
    }
    get strength() {
        return this._strength;
    }
    get magic() {
        return this._magic;
    }
    get intelligence() {
        return this._intelligence;
    }
    get agility() {
        return this._agility;
    }
    get duality() {
        return this._duality;
    }
    get wins() {
        return this._wins;
    }
}

const animeDeck = {
    card1: new card("Light Yagami", 50, 0, 1, 3, 10, 0, 8, 0),
    card2: new card("Guts", 250, 2, 5, 0, 3, 1, 2, 0),
    card3: new card("Baki Hanma", 50, 4, 5, 0, 4, 5, 1, 0),
    card4: new card("Edward Elric", 50, 2, 1, 8, 9, 0, 4, 0),
    card5: new card("Akame", 100, 0, 4, 5, 6, 9, 3, 0),
    card6: new card("Akira Fudo", 200, 6, 7, 7, 5, 8, 6, 0),
    card7: new card("Natsu Dragneel", 100, 5, 1, 7, 2, 1, 1, 0),
    card8: new card("Koro-sensei", 50, 9, 2, 0, 8, 10, 5, 0),
    card9: new card("Meliodas", 300, 7, 8, 9, 4, 3, 5, 0),
    card10: new card("Erza Scarlet", 100, 3, 4, 3, 7, 5, 2, 0),
    card11: new card("Ken Kaneki", 100, 4, 4, 0, 5, 4, 2, 0),
    card12: new card("Ichigo Kurosaki", 100, 2, 4, 7, 1, 3, 2, 0),
    card13: new card("Tatsumi", 50, 7, 2, 4, 3, 5, 1, 0),
    card14: new card("Naruto Uzumaki", 150, 2, 3, 9, 3, 9, 0, 0),
    card15: new card("Isaac Netero", 150, 3, 3, 7, 7, 5, 2, 0),
    card16: new card("Eren Yeager", 50, 5, 5, 4, 1, 2, 4, 0),
    card17: new card("Aang", 50, 2, 1, 9, 6, 5, 0, 0),
    card18: new card("Kageyama Shigeo", 50, 0, 0, 9, 1, 1, 5, 0),
    card19: new card("Son Goku", 150, 3, 9, 9, 1, 10, 3, 0),
    card20: new card("Kaguya Otsutsuki", 200, 2, 1, 9, 6, 7, 6, 0),
    card21: new card("Saitama", 50, 10, 10, 0, 0, 8, 5, 0),
    card22: new card("Itachi Uchiha", 150, 2, 1, 10, 10, 6, 4, 0),
    card23: new card("Monkey D. Luffy", 50, 7, 6, 5, 2, 4, 5, 0),
    card24: new card("Rin Okumura", 50, 3, 2, 7, 1, 2, 0, 0),
    card25: new card("Izuku Midoriya", 50, 5, 9, 5, 7, 6, 0, 0),
    card26: new card("Asta", 50, 4, 4, 8, 2, 5, 0, 0),
    card27: new card("Julius Novachrono", 50, 6, 1, 10, 9, 9, 3, 0),
    card28: new card("Simon", 50, 8, 1, 10, 5, 3, 5, 0),
    card29: new card("Gon Freecss", 50, 3, 9, 6, 3, 3, 3, 0),
    card30: new card("Tanjirou Kamado", 50, 3, 4, 7, 8, 3, 0, 0)
}

const warframeDeck = {};

const generateHands = (deck) => {
    let generatedNum = [];
    let hand = [];
    for (let i = 0; i < Object.keys(deck).length; i += 2) {
        let randomNum = Math.floor(Math.random() * 30);
        while (generatedNum.includes(randomNum)) {
            randomNum = Math.floor(Math.random() * 30);
        }
        generatedNum.push(randomNum);
        hand.push(Object.keys(deck)[randomNum]);
    }
    return hand;
}

const player1Win = () => {
    console.log(`Player 1 has won with ${player1Attribute[1]}`);
    let cardWon = cardSelection(player1Hand);
    cardWon._wins++;
    player1Hand.push(player1Hand.shift());
    player1Hand.push(player2Hand.shift());
    if (cardsToBeWon[0] != undefined) {
        player1Hand = player1Hand.concat(cardsToBeWon);
        for (let i = cardsToBeWon.length; i > 0; i--) {
            cardsToBeWon.pop();
        }
    }
}

const player2Win = () => {
    console.log(`Player 2 has won with ${player2Attribute[1]}`);
    let cardWon = cardSelection(player2Hand);
    cardWon._wins++;
    player2Hand.push(player2Hand.shift());
    player2Hand.push(player1Hand.shift());
    if (cardsToBeWon[0] != undefined) {
        player2Hand = player2Hand.concat(cardsToBeWon);
        for (let i = cardsToBeWon.length; i > 0; i--) {
            cardsToBeWon.pop();
        }
    }
}

const gameState = () => {
    if (player1Attribute[0] == "duality" && player1Attribute[1] < player2Attribute[1]) {
        player1Win();
    } else if (player1Attribute[0] == "duality" && player1Attribute[1] > player2Attribute[1])
        player2Win();
    else if (player1Attribute[1] == player2Attribute[1]) {
        console.log("There is a draw")
        cardsToBeWon.push(player1Hand.shift());
        cardsToBeWon.push(player2Hand.shift());
        console.log(cardsToBeWon);
        player1Turn = false;
    } else if (player1Attribute[1] > player2Attribute[1]) {
        player1Win();
        player1Turn = true;
    } else {
        player2Win()
        player1Turn = false;
    }
}

const chooseDeck = () => {
    // let choice = prompt("What deck would you like to use: \n1. Anime \n2. Warframe");
    let choice = 1;
    if (choice == 1) {
        return animeDeck;
    } else if (choice == 2) {
        return warframeDeck;
    } else {
        return chooseDeck();
    }
}

let deck = chooseDeck();
let player1Hand = generateHands(deck);
let player2Hand = generateHands(deck);
let player1Turn = true;
let player1Attribute;
let player2Attribute;
let cardsToBeWon = [];

const cardSelection = (hand) => {
    let select = Object.getOwnPropertyDescriptor(deck, `${hand[0]}`);
    return select.value;
}

const showCardNice = (attributes) => {
    let attributeNames = ["name", "health", "defence", "strength", "magic", "intelligence", "agility", "duality"];
    for (let i = 0; i < attributes.length - 1; i++) {
        console.log(`${i}. ${attributeNames[i]}: ${attributes[i]}`);
    }
}

const chooseAttribute = (hand, selected) => {
    let selectedCard = selected(hand);
    let attributeNames = ["name", "health", "defence", "strength", "magic", "intelligence", "agility", "duality"];
    let attributes = Object.values(selectedCard);
    showCardNice(attributes);
    let result = prompt("Choose an attribute");
    while (result != 1 && result != 2 && result != 3 && result != 4 && result != 5 && result != 6 && result != 7) {
        result = prompt("Choose an attribute");
    }
    if (selectedCard == selected(player1Hand)) {
        player2Attribute = [attributeNames[result], Object.values(selected(player2Hand))[result]];
        return [attributeNames[result], Object.values(selectedCard)[result]];
    } else {
        player1Attribute = [attributeNames[result], Object.values(selected(player1Hand))[result]];
        return [attributeNames[result], Object.values(selectedCard)[result]];
    }
}

const compareAttributes = () => {
    if (player1Turn == true) {
        console.log("Player 1s' turn")
        player1Attribute = chooseAttribute(player1Hand, cardSelection);
        console.log(`Player 1 has choosen ${player1Attribute[0]}, which is ${player1Attribute[1]}`);
        console.log("Player 2s' card is: ");
        showCardNice(Object.values(cardSelection(player2Hand)));
        console.log(`Player 2 cards' ${player2Attribute[0]} is ${player2Attribute[1]}`);
        gameState();
    } else {
        console.log("Player 2s' turn")
        player2Attribute = chooseAttribute(player2Hand, cardSelection);
        console.log(`Player 2 has choosen ${player2Attribute[0]}, which is ${player2Attribute[1]}`);
        console.log("Player 1s' card is: ");
        showCardNice(Object.values(cardSelection(player1Hand)));
        console.log(`Player 1 cards' ${player1Attribute[0]} is ${player1Attribute[1]}`);
        gameState();
    }
}
window.addEventListener("keypress", () => {
    while (player1Hand.length > 0 && player2Hand.length > 0) {
        compareAttributes();
        console.log(`\n\nplayer 1: ${player1Hand.length}\nplayer 2: ${player2Hand.length}\n\n`);
    }
    if (player1Hand[0] == undefined) {
        console.log("\nPlayer 2 has won!");
    } else if (player2Hand[0] == undefined) {
        console.log("\nPlayer1 has won!");
    }
})
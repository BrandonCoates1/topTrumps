
class card {
    constructor(name, health, defence, strength, magic, intelligence, agility, duality) {
        this._name = name;
        this._health = health;
        this._defence = defence;
        this._strength = strength;
        this._magic = magic;
        this._intelligence = intelligence;
        this._agility = agility;
        this._duality = duality;
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
}

const animeDeck = {
    card1: new card("Light Yagami", 50, 0, 1, 3, 10, 0, 8),
    card2: new card("Guts", 250, 2, 5, 0, 3, 1, 2),
    card3: new card("Baki Hanma", 50, 4, 5, 0, 4, 5, 1),
    card4: new card("Edward Elric", 50, 2, 1, 8, 9, 0, 4),
    card5: new card("Akame", 100, 0, 4, 5, 6, 9, 3),
    card6: new card("Akira Fudo", 200, 6, 7, 7, 5, 8, 6),
    card7: new card("Natsu Dragneel", 100, 5, 1, 7, 2, 1, 1),
    card8: new card("Koro-sensei", 50, 9, 2, 0, 8, 10, 5),
    card9: new card("Meliodas", 300, 7, 8, 9, 4, 3, 5),
    card10: new card("Erza Scarlet", 100, 3, 4, 3, 7, 5, 2),
    card11: new card("Ken Kaneki", 100, 4, 4, 0, 5, 4, 2),
    card12: new card("Ichigo Kurosaki", 100, 2, 4, 7, 1, 3, 2),
    card13: new card("Tatsumi", 50, 7, 2, 4, 3, 5, 1),
    card14: new card("Naruto Uzumaki", 150, 2, 3, 9, 3, 9, 0),
    card15: new card("Isaac Netero", 150, 3, 3, 7, 7, 5, 2),
    card16: new card("Eren Yeager", 50, 5, 5, 4, 1, 2, 4),
    card17: new card("Aang", 50, 2, 1, 9, 6, 5, 0),
    card18: new card("Kageyama Shigeo", 50, 0, 0, 9, 1, 1, 5),
    card19: new card("Son Goku", 150, 3, 9, 9, 1, 10, 3,),
    card20: new card("Kaguya Otsutsuki", 200, 2, 1, 9, 6, 7, 6),
    card21: new card("Saitama", 50, 10, 10, 0, 0, 8, 5),
    card22: new card("Itachi Uchiha", 150, 2, 1, 10, 10, 6, 4),
    card23: new card("Monkey D. Luffy", 50, 7, 6, 5, 2, 4, 5),
    card24: new card("Rin Okumura", 50, 3, 2, 7, 1, 2, 0),
    card25: new card("Izuku Midoriya", 50, 5, 9, 5, 7, 6, 0),
    card26: new card("Asta", 50, 4, 4, 8, 2, 5, 0),
    card27: new card("Julius Novachrono", 50, 6, 1, 10, 9, 9, 3),
    card28: new card("Simon", 50, 8, 1, 10, 5, 3, 5),
    card29: new card("Gon Freecss", 50, 3, 9, 6, 3, 3, 3),
    card30: new card("Tanjirou Kamado", 50, 3, 4, 7, 8, 3, 0)
}
// console.log(Object.keys(animeDeck)[5]);

let generatedNum = [];

const generateHands = (deck) => {
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

const gameState = () => {
    if (playerHand[0] != undefined) {
        console.log("Player is still playing");
    } else {
        console.log("Player has won");
    }
}

let playerHand = generateHands(animeDeck);
let aiHand = generateHands(animeDeck);

let select = Object.getOwnPropertyDescriptor(animeDeck, `${playerHand[0]}`);
let selectedCard = select.value;
console.log(selectedCard);
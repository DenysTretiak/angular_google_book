//// Explaine what should be displayed in the console
//
//(async function() {
//
//    console.log(1);
//    setTimeout(() => { console.log(2); }, 2000);
//    await Promise.resolve(console.log(3));
//    setTimeout(() => { console.log(4); }, 0);
//    console.log(5);
//
//})();
//
//
//// Explaine what should be displayed in the console
//
//console.log(getName());
//console.log(getAge());
//
//function getName() {
//    return 'John';
//}
//
//var getAge = function() {
//    return 18;
//}

// 2) where 'this' will point in each case
// 2.1
//const foo = () => {
//    console.log(this);
//}
//foo(); // ?
//
//// 2.2
//function bar() {
//    console.log(this);
//}
//bar(); // ?
//
//// 2.3
//const obj = {
//    foo: () => console.log(this),
//    bar: function() { console.log(this) }
//}
//
//obj.foo(); // ?
//obj.bar(); // ?

// 4. write a function that accepts one argument (sum) and returns the first 2 indexes of array items sum of which equals the passed argument


//function getIndexes(sum) {
//    const arr = [21, 4, 9, 6, 10, 15, 19, 3, 1, 13];
//    let indexes = [];
//    arr.forEach((element, index) => {
//        const diff = sum - element;
//        const secondElemetIndex = arr.indexOf(diff);
//        if(secondElemetIndex > 0 && indexes.length < 3) {
//            indexes.push(index);
//            indexes.push(secondElemetIndex);
//        }
//    })
//
//    return indexes;
//}
//
//console.log(getIndexes(19));

// You have a deck of cards represented as an array of strings, please implement the following:
//	* Build the deck of cards
//	* Shuffle the cards
//	* Output first seven cards

const suits = ["Spades", "Diamonds", "Club", "Heart"];
const values = [  "2",  "3",  "4",  "5",  "6",  "7",  "8",  "9",  "10",  "Jack",  "Queen",  "King", "Ace" ];

function createDeck(suits, values) {
    const deck = []
    values.forEach(value => {
        suits.forEach(suit => {
            deck.push({
                suit,
                value
            })
        })
    })

    return deck;
}

function shuffleDeck(deck) {
    console.log(deck.length);
    deck.forEach((card, index) => {
        const newIndex = getRandomIntInclusive(0, deck.length);
        if (newIndex !== index) {
            const oldCard = deck[newIndex];
            deck[newIndex] = card;
            deck[index] = oldCard;
            if(!oldCard || !card) {
                console.log(card, 'card')
                console.log(index, 'index')
            }
        }
    })

    return deck;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

//console.log(createDeck(suits, values))

const deck = createDeck(suits, values)
console.log(shuffleDeck(deck));

for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    // debugger;
  }

const gifts = ['teddy bear', 'drone', 'doll'];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`)
        debugger;
    }
    return gifts;
  }
wrapGifts(gifts)

function writeCards(names, eventName){
    let messages = [];
    for (let i = 0; i < names.length; i++ ) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return messages;
}
const thankYouCards = writeCards(["Beatrice", "Alex", "Jason"], "birthday");
console.log(thankYouCards);

function countDown(integer) {
    for (let i = integer; i >= 0; i--) {
        console.log(i);
    }
}
countDown(10);
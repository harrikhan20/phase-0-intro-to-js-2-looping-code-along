//const gifts = ["teddy bear", "drone", "doll"];

//function wrapGifts(gifts) {
 // for (let i = 0; i < gifts.length; i++) {
//    console.log(`Wrapped ${gifts[i]} and added a bow!`);
//    debugger;
 // }

//  return gifts;
//}

//wrapGifts(gifts); 




const names = ['Lisa', 'Kaitlin', 'Jan'];
const event = 'surprise';
let thankYouCards = [];
function writeCards(names, event){
    for (let x = 0; x < names.length; x++){
        thankYouCards.push(`Thank you, ${names[x]}, for the wonderful ${event} gift!`);
        debugger;
    }
    return thankYouCards;
}

// Code your solutions in this file
//const names = ['Lisa', 'Kaitlin', 'Jan'];
//const events = 'surprise';
//let thankYouCards = [];

//function writeCards(names,events){
 //   for (let x = 0; x < names.length; x++) {
 //       thankYouCards.push(`Thank you, ${names[x]}, for the wonderful ${events} gift!`);
     
 //   }
 //   return thankYouCards;
//}
writeCards(names,events);

function countDown(number){
    let countDown = 10;
    while (countDown >= -0){
        console.log(countDown--);
    }
}




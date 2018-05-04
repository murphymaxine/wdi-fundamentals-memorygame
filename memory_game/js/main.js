var cards = [ {
  rank: 'kinq',
  suit: 'diamonds',
  cardImage: 'images/king-of-diamonds.png',  
  },
  {
  rank: 'kinq',
  suit: 'hearts',
  cardImage: 'images/king-of-hearts.png',             
  },
  {             
  rank: 'Queen',
  suit: 'diamonds',
  cardImage: 'images/queen-of-diamonds.png'  
  },
  {             
  rank: 'Queen',
  suit: 'hearts',
  cardImage: 'images/queen-of-hearts.png'  
  },
  ];
  var cardsInPlay = [];
  var cardElement = [];
  var checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
      } else {
      alert("Sorry, try again.");
      }  
  }
  var flipCard = function (cardId) {
    console.log("User flipped " + cards[cardId].rank);
    console.log(cards[cardId].suit);
    console.log(cards[cardId].cardImage);
  cardsInPlay.push(cards[cardId].rank);  
  checkForMatch();
  }
  var createBoard = function() {
    for (var i = 0; i < contact.length; i++) {
      console.log(contact[i].email);
      }   
  } 
  flipCard(0);
  flipCard(2);
  


const cardArray = [
  {
    name: "little-flower",
    img: "images/little-flower.jpg",
  },
  {
    name: "monkey",
    img: "images/monkey.jpg",
  },
  {
    name: "orange-susnet",
    img: "images/orange-sunset.jpg",
  },
  {
    name: "road",
    img: "images/road.jpg",
  },
  {
    name: "starry-sky",
    img: "images/starry-sky.jpg",
  },
  {
    name: "yellow-flower",
    img: "images/yellow-flower.jpg",
  },
  {
    name: "little-flower",
    img: "images/little-flower.jpg",
  },
  {
    name: "monkey",
    img: "images/monkey.jpg",
  },
  {
    name: "orange-susnet",
    img: "images/orange-sunset.jpg",
  },
  {
    name: "road",
    img: "images/road.jpg",
  },
  {
    name: "starry-sky",
    img: "images/starry-sky.jpg",
  },
  {
    name: "yellow-flower",
    img: "images/yellow-flower.jpg",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

// create board

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.jpg");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  }
}

createBoard();

//check for matches

function checkMatch() {
  const cards = document.querySelectorAll("#grid img");
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];

  if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
    alert("You have clicked the same image!");
  } else if (cardsChosen[0] === cardsChosen[1]) {
    alert("You found a match");
    cards[optionOneId].setAttribute("src", "images/matched.jpg");
    cards[optionTwoId].setAttribute("src", "images/matched.jpg");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", "images/blank.jpg");
    cards[optionTwoId].setAttribute("src", "images/blank.jpg");
    alert("No match, try again!");
  }

  cardsChosen = [];
  cardsChosenIds = [];
  resultDisplay.textContent = cardsWon.length;

  if (cardsWon.length == cardArray.length / 2) {
    resultDisplay.innerHTML = "Yey! You found them all!";
  }
}

function flipCard() {
  const cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  console.log(cardsChosen);
  console.log(cardsChosenIds);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 1000);
  }
}

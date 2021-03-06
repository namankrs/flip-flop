let previouslyClickedCard = "";
let counter = 0;
let images = [
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
  "/images/5.png",
  "/images/6.png",
  "/images/7.png",
  "/images/8.png",
  "/images/9.png",
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
  "/images/5.png",
  "/images/6.png",
  "/images/7.png",
  "/images/8.png",
  "/images/9.png"
];

const shuffleImages = function() {
  let shuffledImages = [];
  do {
    let shuffleIndex = Math.ceil(Math.random() * (images.length - 1));
    images = images.slice(shuffleIndex).concat(images.slice(0, shuffleIndex));
    shuffledImages.push(images.pop());
  } while (images.length);
  return shuffledImages;
};

const timer = function() {
  setInterval(x => {
    counter++;
    document.getElementById("timer").innerHTML = counter;
    return;
  }, 1000);
};

const hasWon = function() {
  let allOpen = true;
  for (let count = 1; count <= images.length; count++) {
    let currCard = document.getElementById(count);
    allOpen = currCard.dataset.isOpen && allOpen;
  }
  return allOpen;
};

window.onload = function() {
  images = shuffleImages();
};

const areEqual = function(clickedCard) {
  previouslyClickedCard.dataset.isOpen = true;
  clickedCard.dataset.isOpen = true;
  previouslyClickedCard = "";
  if (hasWon()) {
    const onWinning =
      "<div style='margin:100px auto; font-size: 100px;color:white;'>" +
      "<p style = 'margin:0'>YOU WON</p><p style = 'margin:0'>TIME TAKEN : " +
      counter +
      " sec</p></div>";
    document.getElementById("container").innerHTML = onWinning;
  }
  return clickedCard;
};

const flipCard = function(event) {
  let clickedCard = event.target;
  clickedCard.src = images[clickedCard.id - 1];

  if (previouslyClickedCard == "") {
    previouslyClickedCard = clickedCard;
    return;
  }
  if (clickedCard.src == previouslyClickedCard.src) {
    clickedCard = areEqual(clickedCard);
    return;
  }
  setTimeout(function() {
    previouslyClickedCard.src = clickedCard.src = "/images/cardBack.jpg";
    previouslyClickedCard = "";
  }, 500);
};

const gameScript =
  "<div class='timer'><span>Time:</span> <span id='timer'>0</span></div>" +
  "<div class='cards'>" +
  "<img onclick='flipCard(event)' src='/images/cardBack.jpg' id='1' />" +
  "<img onclick='flipCard(event)' src='/images/cardBack.jpg' id='2' />" +
  "<img onclick='flipCard(event)' src='/images/cardBack.jpg' id='3' />" +
  "<img onclick='flipCard(event)' src='/images/cardBack.jpg' id='4' />" +
  "<img onclick='flipCard(event)' src='/images/cardBack.jpg' id='5' />" +
  "<img onclick='flipCard(event)' src='/images/cardBack.jpg' id='6' />" +
  "<img onclick='flipCard(event)' src='/images/cardBack.jpg' id='7' />" +
  "<img onclick='flipCard(event)' src='/images/cardBack.jpg' id='8' />" +
  "<img onclick='flipCard(event)' src='/images/cardBack.jpg' id='9' />" +
  "<img onclick='flipCard(event)' src='/images/cardBack.jpg' id='10' />" +
  "<img onclick='flipCard(event)' src='/images/cardBack.jpg' id='11' />" +
  "<img onclick='flipCard(event)' src='/images/cardBack.jpg' id='12' />" +
  "<img onclick='flipCard(event)' src='/images/cardBack.jpg' id='13' />" +
  "<img onclick='flipCard(event)' src='/images/cardBack.jpg' id='14' />" +
  "<img onclick='flipCard(event)' src='/images/cardBack.jpg' id='15' />" +
  "<img onclick='flipCard(event)' src='/images/cardBack.jpg' id='16' />" +
  "<img onclick='flipCard(event)' src='/images/cardBack.jpg' id='17' />" +
  "<img onclick='flipCard(event)' src='/images/cardBack.jpg' id='18' />" +
  "</div>";

const startGame = function() {
  document.getElementById("container").innerHTML = gameScript;
  timer();
  return;
};

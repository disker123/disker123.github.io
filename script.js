window.onload = salectCard;

var cards = new Array(
 "images/ala-159-brilliant-ultimatum.jpg"
,"images/ala-163-clarion-ultimatum.jpg"
,"images/ala-206-violent-ultimatum.jpg"
,"images/ddh-31-titanic-ultimatum.jpg"
,"images/e01-82-cruel-ultimatum.jpg"
,"images/iko-184-eerie-ultimatum.jpg"
,"images/iko-185-emergent-ultimatum.jpg"
,"images/iko-189-genesis-ultimatum.jpg"
,"images/iko-191-inspired-ultimatum.jpg"
,"images/iko-204-ruinous-ultimatum.jpg");

function salectCard() {
     var randomNum = Math.floor(Math.random() * cards.length);
     document.getElementById("card").src = cards[randomNum];
}
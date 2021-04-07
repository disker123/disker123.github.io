document.getElementById("generate").onclick = roll;


function roll() {
  var seed = Math.floor((Math.random() * 8));
  // document.getElementById("card").src = list[seed];
	var result_img = list[seed]

  //Get our img element by using document.getElementById
  var img123 = document.getElementById("card");

  //Set the src property of our element to the new image URL
  img123.src = result_img;



}
var list = [
  "https://c1.scryfall.com/file/scryfall-cards/normal/front/9/4/942cf220-472c-48f6-8f60-993939ea5ab8.jpg?1562055436",
  "https://c1.scryfall.com/file/scryfall-cards/normal/front/e/3/e319956e-982b-4bba-829a-67bf4ef79d74.jpg?1576382565",
  "https://c1.scryfall.com/file/scryfall-cards/normal/front/9/0/9082bfb8-0ab0-4378-976d-a2c9d3c35a5e.jpg?1562921827",
  "https://c1.scryfall.com/file/scryfall-cards/normal/front/7/9/790157c9-b1ed-4da5-9d50-e99e0dd807b7.jpg?1562920405",
  "https://c1.scryfall.com/file/scryfall-cards/normal/front/1/3/13281377-6d16-4ed3-8aa6-c47d6eb783df.jpg?1562899536",
"https://c1.scryfall.com/file/scryfall-cards/normal/front/3/2/32987720-cc0c-416b-b79b-217d3b37542d.jpg?1562629169",
"https://c1.scryfall.com/file/scryfall-cards/normal/front/9/9/993957c7-5d61-4c98-826d-b657aed667e1.jpg?1562878704",
"https://c1.scryfall.com/file/scryfall-cards/normal/front/7/8/78fec7e6-5ed9-46dc-93b4-7a054d763403.jpg?1600714793"

];

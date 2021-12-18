/*
  The scrableTiles data structure was taken from the provided code created by Jesse M. Heines and is used here with modification 
*/
var ScrabbleTiles = [] ;
ScrabbleTiles[0] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9, "file" : "Scrabble_Tile_A.jpg", "letter" : 'a' } ;
ScrabbleTiles[1] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "file" : "Scrabble_Tile_B.jpg", "letter" : 'b'   } ;
ScrabbleTiles[2] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "file" : "Scrabble_Tile_C.jpg", "letter" : 'c'   } ;
ScrabbleTiles[3] = { "value" : 2,  "original-distribution" : 4,  "number-remaining" : 4, "file" : "Scrabble_Tile_D.jpg", "letter" : 'd'   } ;
ScrabbleTiles[4] = { "value" : 1,  "original-distribution" : 12, "number-remaining" : 12, "file" : "Scrabble_Tile_E.jpg", "letter" : 'e'  } ;
ScrabbleTiles[5] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "file" : "Scrabble_Tile_F.jpg", "letter" : 'f'   } ;
ScrabbleTiles[6] = { "value" : 2,  "original-distribution" : 3,  "number-remaining" : 3, "file" : "Scrabble_Tile_G.jpg", "letter" : 'g'   } ;
ScrabbleTiles[7] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "file" : "Scrabble_Tile_H.jpg", "letter" : 'h'   } ;
ScrabbleTiles[8] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9, "file" : "Scrabble_Tile_I.jpg", "letter" : 'i'   } ;
ScrabbleTiles[9] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1, "file" : "Scrabble_Tile_J.jpg", "letter" : 'j'   } ;
ScrabbleTiles[10] = { "value" : 5,  "original-distribution" : 1,  "number-remaining" : 1, "file" : "Scrabble_Tile_K.jpg", "letter" : 'k'   } ;
ScrabbleTiles[11] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "file" : "Scrabble_Tile_L.jpg", "letter" : 'l'   } ;
ScrabbleTiles[12] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "file" : "Scrabble_Tile_M.jpg", "letter" : 'm'   } ;
ScrabbleTiles[13] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "file" : "Scrabble_Tile_N.jpg", "letter" : 'n'   } ;
ScrabbleTiles[14] = { "value" : 1,  "original-distribution" : 8,  "number-remaining" : 8, "file" : "Scrabble_Tile_O.jpg", "letter" : 'o'   } ;
ScrabbleTiles[15] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "file" : "Scrabble_Tile_P.jpg", "letter" : 'p'   } ;
ScrabbleTiles[16] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1, "file" : "Scrabble_Tile_Q.jpg", "letter" : 'q'   } ;
ScrabbleTiles[17] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "file" : "Scrabble_Tile_R.jpg", "letter" : 'e'   } ;
ScrabbleTiles[18] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "file" : "Scrabble_Tile_S.jpg", "letter" : 's'   } ;
ScrabbleTiles[19] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "file" : "Scrabble_Tile_T.jpg", "letter" : 't'   } ;
ScrabbleTiles[20] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "file" : "Scrabble_Tile_U.jpg", "letter" : 'u'   } ;
ScrabbleTiles[21] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "file" : "Scrabble_Tile_V.jpg", "letter" : 'v'   } ;
ScrabbleTiles[22] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "file" : "Scrabble_Tile_W.jpg", "letter" : 'w'   } ;
ScrabbleTiles[23] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1, "file" : "Scrabble_Tile_X.jpg", "letter" : 'x'   } ;
ScrabbleTiles[24] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "file" : "Scrabble_Tile_Y.jpg", "letter" : 'y'   } ;
ScrabbleTiles[25] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1, "file" : "Scrabble_Tile_Z.jpg", "letter" : 'z'   } ;
ScrabbleTiles[26] = { "value" : 0,  "original-distribution" : 2,  "number-remaining" : 2, "file" : "Scrabble_Tile_BLANK.jpg", "letter" : ' '   } ;

console.log(1)
var score = 0
//gets a tile form the :bag: and outs it on the rack
function addTile(){
  var tile= [Math.floor(Math.random() * ScrabbleTiles.length)]
  while(ScrabbleTiles[tile]['number-remaining'] <= 0){//check to make sure the chosen tile has tiles remaining in the bag
     tile= [Math.floor(Math.random() * ScrabbleTiles.length)]//choose a new one if not
  }
  ScrabbleTiles[tile]['number-remaining'] = ScrabbleTiles[tile]['number-remaining'] - 1//decrement the stock
  //add the tile to the rack
  var path ="../tiles/"+ScrabbleTiles[tile]["file"]
  var img = $('<img id="'+ tile +'">');
  img.attr('src', path);
  img.draggable()
  img.appendTo('#rack');
}
//builds your starting hand
function buildRack(){
  for(let i=0; i<7; i++){
    addTile()
  }
  
}

document.getElementById("demo").onclick = function() {submit()};

function submit() {
  var currentImageId = $('#col0').children().last().attr('id');
  var word = ""

  //console.log(ScrabbleTiles[5]["letter"])
  for(let i=0; i<7; i++){
    var col = "#col" + i
    if($(col).is(':empty')) {
      break
    }
    var id = parseInt($(col).children().last().attr('id'))
    word += ScrabbleTiles[id]["letter"]
    score += ScrabbleTiles[id]["value"]
  }
  $('#lastWordText').text("Last Word: " + word);
  $('#scoreText').text("Score: " + score);
  console.log(word)
  console.log(score)
  for(let i=0; i<7; i++){
    var col = "#col" + i
    $(col).empty();
  }
  $('#rack').empty();
  buildRack()
}

$(function() {
  $("#board .row div").droppable({
    //accept: '#tile',
    hoverClass : 'ui-state-highlight',
    drop: function(event, ui) {  
      var dropItem = $(ui.draggable).clone();
      $(this).append($(dropItem));
      
    },

    out: function(event, ui) {
      $(ui.draggable).remove();
    }

  });

  $("#rack img").draggable({
      
      helper : 'clone',
      revert : 'invalid'
  });

  $("#rack").droppable({
      hoverClass : 'ui-state-highlight',
      accept: ":not(.ui-sortable-helper)",
      
  });


  buildRack()

})

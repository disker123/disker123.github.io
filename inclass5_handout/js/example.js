// ADD NEW ITEM TO END OF LIST
var shop = document.getElementsByTagName('ul')[0];

var last = document.createElement("LI");                 
var textnode = document.createTextNode("cream");       
last.appendChild(textnode);                           
shop.appendChild(last);

// ADD NEW ITEM START OF LIST
var start = document.createElement("LI");                 
var textnode = document.createTextNode("Kale");       
start.appendChild(textnode);                           
shop.insertBefore(start, shop.firstChild); 


// ADD A CLASS OF COOL TO ALL LIST ITEMS
var shopItems = document.querySelectorAll('li');
for (i = 0; i < shopItems.length; i++) {

    shopItems[i] .className = 'cool';
    
    }


// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var title = document.querySelector('h2');
title.textContent = title.firstChild.nodeValue+ " " + shopItems.length
//title.style.color="blue"

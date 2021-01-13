var item1;
var item2;
var item3;
document.getElementById("choose").onclick = make_selection;

function make_selection() {
  item1 = prompt("enter new 1")
  item2 = prompt("enter new 2")
  item3 = prompt("enter new 3")
  updaitList();
}

function updaitList() {
  document.getElementById("first").innerHTML = item1;
  document.getElementById("second").innerHTML = item2;
  document.getElementById("third").innerHTML = item3;
}

var light_mode = "black";
document.getElementById("brightnes").onclick = bright_mode;

function bright_mode() {
  if (light_mode == "white") {
    light_mode = "black";
  } else if (light_mode == "black") {
    light_mode = "white";
  }
  updait_colormode();
}

function updait_colormode() {
  if (light_mode == "black") {
    var all = document.getElementsByTagName("*");

    for (var i = 0, max = all.length; i < max; i++) {
      all[i].style.color = "black";
      document.body.style.backgroundColor = "white";
    }
  }
  if (light_mode == "white") {
    var all = document.getElementsByTagName("*");

    for (var i = 0, max = all.length; i < max; i++) {
      all[i].style.color = "white";
      document.body.style.backgroundColor = "black";
    }
  }
}

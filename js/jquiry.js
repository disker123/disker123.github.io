/*
Greg Kaplowitz
gregory_kaplowitz@student.uml.edu
My tab delete function is based on Darshan Shah's in his article "Dynamic jQuery Tabs - Add, Update, Delete And Sorting"
*/

var tabs = 0
$(function() {
    jQuery.validator.addMethod("boundsX", function (element) {
        var start = $("#xstart").val();
        start = parseInt(start)
        var end = $("#xend").val();
        end = parseInt(end)
        return end > start
    });
    jQuery.validator.addMethod("boundsY", function (element) {
        var start = $("#ystart").val();
        start = parseInt(start)
        var end = $("#yend").val();
        end = parseInt(end)
        return end > start
    });
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("#range").validate({
      // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        xstart:{
            required: true,
            number: true,
            min: -50,
            max: 50
        },
        xend:{
            required: true,
            number: true,
            min: -50,
            max: 50,
            boundsX: true
            //greaterThan: $("#xstart")
        },
        ystart: {
            required: true,
            number: true,
            min: -50,
            max: 50
        },
        yend: {
            required: true,
            number: true,
            min: -50,
            max: 50,
            boundsY: true
            //greaterThan: $("#ystart")
        }
      },
      // Specify validation error messages
      messages: {
        xstart:{
            required: "this field is required",
            number: "this field must be a number",
            min: "this field must be -50 or greater",
            max: "this field mmust be 50 or less"
        },
        xend:{
            required: "this field is required",
            number: "this field must be a number",
            min: "this field must be -50 or greater",
            max: "this field mmust be 50 or less",
            boundsX: "this field must be greater than xstart"
        },
        ystart: {
            required: "this field is required",
            number: "this field must be a number",
            min: "this field must be -50 or greater",
            max: "this field mmust be 50 or less"
        },
        yend: {
            required: "this field is required",
            number: "this field must be a number",
            min: "this field must be -50 or greater",
            max: "this field mmust be 50 or less",
            boundsY: "this field must be greater than ystart"
        },
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function(form) {        
        makeTab()        
      }
    });

    $("#sliderxstart").slider({
        min: -50,
        max: 50,
        value: 0,
        change: function(event, ui){
            $("#xstart").val(ui.value);
        }
    });
    $("#sliderxend").slider({
        min: -50,
        max: 50,
        value: 0,
        change: function(event, ui){
            $("#xend").val(ui.value);
        }
    });
    $("#sliderystart").slider({
        min: -50,
        max: 50,
        value: 0,
        change: function(event, ui){
            $("#ystart").val(ui.value);
        }
    });
    $("#slideryend").slider({
        min: -50,
        max: 50,
        value: 0,
        change: function(event, ui){
            $("#yend").val(ui.value);
        }
    });

   

  });

  function makeTab(){
    tabs++
    var xstartSRT = document.getElementById("xstart").value;
    var xendSTR = document.getElementById("xend").value;
    var ystartSTR = document.getElementById("ystart").value;
    var yendSTR = document.getElementById("yend").value;
    var tableString = addTable()
    var count = "#tab"+tabs
    var divID = "tab"+tabs
    $("#tabs").tabs();
    console.log(count)
    $("#tabs").append("<div id='"+divID+"'>"+tableString+"</div>");
    $("#tabs ul").append("<li><a href='"+count+"'> "+xstartSRT+","+xendSTR+","+ystartSTR+","+yendSTR+ "</li>");
    $("#tabs").tabs("refresh");
    $("#tabs").tabs({
        active:-1
    });
  }

  function addTable(){
    
    //console.log("flag")
    var xstartSRT = document.getElementById("xstart").value;
    xstart = parseInt(xstartSRT)
    console.log(xstart)
    var xendSTR = document.getElementById("xend").value;
    xend = parseInt(xendSTR)
    console.log(xend)
    var ystartSTR = document.getElementById("ystart").value;
    ystart = parseInt(ystartSTR)
    console.log(ystart)
    var yendSTR = document.getElementById("yend").value;
    yend = parseInt(yendSTR)
    console.log(yend)
    
    var table = document.createElement("table"); //create new table
    table.id = "tbl"//tbl id
    table.className = "table table-wrapper table-responsive"
//    table.clear
    table.style.display = 'block';
    //var myTable = document.getElementById("tbl")
    //myTable.innerHTML=""
    
    xstart -= 1;
    ystart -= 1;
    var result = 'x';
    countX = 0;
    

    for (var i = xstart; i <= xend; i++) {
        var row = table.insertRow(countX);
        countY = 0;
        for (var j = ystart; j <= yend; j++) {
            var data = row.insertCell(countY);
            //case for top left corner blank space
//            console.log(i,j)
            if(i==xstart && j==ystart){
                
                data.innerHTML = 'x';
                data.style.width = '40px';
                data.style.fontSize = '4';

            }
            //case for writing the Y axis
            else if(i == xstart && j > ystart){

                data.innerHTML = j;
                data.style.width = '40px';
                data.style.backgroundColor = 'black';
                data.style.color = 'white';
                data.class = "headcol";
            }
            //case for writing the x axis
            else if(j == ystart && i>xstart){

                data.innerHTML = i;
                data.style.width = '40px';               
                data.style.backgroundColor = 'black';
                data.style.color = 'white';
            }
            //case for all the data points in the talbe (x*y)
            else if(i>xstart && j>ystart){

                data.innerHTML = i * j;
                data.style.width = '40px';
                data.style.fontSize = '4';
                data.style.color = 'white';
            }
            countY++;
        }
            countX++;
            
    }
    var componentTable = table.outerHTML
    //var tableString = $(table[0])[0].outerHTML;
    //var tableString = $(table[0]).clone().wrap('<div>').parent().html();
    return componentTable
  }

  $("#removeTab").click(function () {  
      if(tabs>0){
        // Find name of Tab by attribute id  
        var tabIndex = $("#tabs .ui-tabs-panel:visible").attr("id");  

        // Removing Li and as well as content Div for the specific Tab  
        $("#tabs").find(".ui-tabs-nav li a[href='#" + tabIndex + "']").parent().remove();  
        $("#tabs").find("div[id=" + tabIndex + "]").remove();  

        // One removing process done we refresh the tab again  
        $("#tabs").tabs("refresh");   
        tabs--
      }
});  
$("#clearTabs").click(function () {  
    while(tabs>0){
    // Find name of Tab by attribute id  
        var tabIndex = $("#tabs .ui-tabs-panel:visible").attr("id");  

        // Removing Li and as well as content Div for the specific Tab  
        $("#tabs").find(".ui-tabs-nav li a[href='#" + tabIndex + "']").parent().remove();  
        $("#tabs").find("div[id=" + tabIndex + "]").remove();  

        // One removing process done we refresh the tab again  
        $("#tabs").tabs("refresh");   
        tabs--
    }
});  
/*
    Greg Kaplowitz
    gregory_kaplowitz@student.uml.edu
    The js takes in the data entered in the form and converts it into a multiplication table table
*/
function submit(){
    //gets all the values and converts them into ints
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


    //checks that all entered fields are numbers
    if(isNaN(xstart)){
        console.log("xstart is not a number ")
        document.getElementById("xstart").insertAdjacentHTML('afterend', '<div id="alert" class="alert alert-danger mt-2" role="alert"> Must be a number</div>');
    }

    else if(isNaN(xend)){
        console.log("xend is not a number ")
        document.getElementById("xend").insertAdjacentHTML('afterend', '<div id="alert" class="alert alert-danger mt-2" role="alert"> Must be a number</div>');
    }

    else if(isNaN(ystart)){
        console.log("ystart is not a number ")
        document.getElementById("ystart").insertAdjacentHTML('afterend', '<div id="alert" class="alert alert-danger mt-2" role="alert"> Must be a number</div>');
    }

    else if(isNaN(yend)){
        console.log("yend is not a number ")
        document.getElementById("yend").insertAdjacentHTML('afterend', '<div id="alert" class="alert alert-danger mt-2" role="alert"> Must be a number</div>');
    }

    //check for improper bounds
    else if(xend<xstart){
        console.log(xend, "is lower than", xstart)
        document.getElementById("xstart").insertAdjacentHTML('afterend', '<div id="alert" class="alert alert-danger mt-2" role="alert"> Please enter a lower value for xstart lower than x end</div>');
    }
    else if(yend<ystart){
        console.log("y lower")
        document.getElementById("ystart").insertAdjacentHTML('afterend', '<div id="alert" class="alert alert-danger mt-2" role="alert"> Please enter a lower value for ystart lower than yend</div>');
    }
    //check to see if the table can be generate within a resonable time without crashing using a 250,000 element table as the limit
    else if(((yend-ystart)*(xend-xstart))>250000){
        console.log("TOO BIG")
        alert("Table to large please enter smaller bounds")
    }
    //builds teh table
    else{
        xstart -= 1;
        ystart -= 1;
        var result = 'x';
        document.write("<center><table border='1px'>");
        for (var i = xstart; i <= xend; i++) {
        document.write("<tr style='height:40px'>");
        for (var j = ystart; j <= yend; j++) {
            //case for top left corner blank space
            if(i==xstart && j==ystart){
                document.write("<td style='width:40px'><center><font size='4'>" + 'x' + "</center></font></td>");
            }
            //case for writing the Y axis
            else if(i == xstart && j > ystart){
                //result += '[' + j + ']';
                document.write("<td style='width:40px; background-color:black; color:white'><center><font size='4'>"  + j + "</center></font></td>");
            }
            //case for writing the x axis
            else if(j == ystart && i>xstart){
                document.write("<td style='width:40px; background-color:black; color:white' ><center><font size='4'>" +  i +  "</center></font></td>");
            }
            //case for all the data points in the talbe (x*y)
            else if(i>xstart && j>ystart){
                document.write("<td style='width:40px' ><center><font size='4'>" + i * j + "</center></font></td>");
            }

        }
        document.write("</tr>");
        }
        document.write("</table></center>");
    }

}


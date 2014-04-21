        
var frasi = new Array();          
frasi[0] = "citazione 1";         
frasi[1] = "citazione 2";          
frasi[2] = "citazione 3";          
//just add the number of single quote you like

//select random index
var id = Math.round(Math.random() * (frasi.length - 1));        

//print on screen random quote
document.write("" + frasi[id] + "");


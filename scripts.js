function ShowPortafolio(){
    var container = document.getElementsByClassName("portafolio")[0];
    var container2 = document.getElementsByClassName("infoautor")[0];
    container.style.visibility = "visible" ;
    container2.style.visibility = "hidden";
}

function ShowAutor(){
    var container = document.getElementsByClassName("infoautor")[0];
    var container2 = document.getElementsByClassName("portafolio")[0];
    container.style.visibility = "visible" ;
    container2.style.visibility = "hidden";
}
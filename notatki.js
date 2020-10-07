/*function sum(l1, l2){
    return parseInt(l1)+parseInt(l2);
}

function showData(imie, nazwisko){
    let fname = imie;
    let sname = nazwisko;
}

document.write("Masz na imie: " "+fname" )
*/

handlerBlk = document.getElementById("blok");
handlerBlk.style.width="400px";
handlerBlk.style.height="400px";
handlerBlk.style.backgroundColor="blue";
handlerBlk.style.float="left";


handlerBlk2 = document.getElementById("blok2");
handlerBlk2.style.width="400px";
handlerBlk2.style.height="400px";
handlerBlk2.style.backgroundColor="red";
handlerBlk2.style.float="left";

function addParagraf(blockname) {
    let paragraf = document.createElement("P");
    let textPar = document.createTextNode("Tekst dla akapitu");
    paragraf.appendChild(textPar);
    paragraf.setAttribute("class", "democlass");
    paragraf.setAttribute("id", "blok1");
    paragraf.setAttribute("name", "blok1");
    document.getElementById(blockname).appendChild(paragraf);
}

function addImg(blockname, imgName, imgAlt){
    let img = document.createElement("img");
    img.setAttribute("src", imgName);
    img.setAttribute("alt", imgAlt);
    img.style.width="100px";
    img.style.height="100px";
    img.style.marginTop="0px";
    img.style.marginBottom="0px";

    document.getElementById(blockname).appendChild(img);
}
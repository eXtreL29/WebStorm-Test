/*const handlerBlk1 = document.getElementById("blok1");
const handlerBlk2 = document.getElementById("blok2");

handlerBlk1.style.width="400px";
handlerBlk1.style.height="400px";
handlerBlk1.style.float="left";
handlerBlk1.style.backgroundColor="red";
handlerBlk1.innerHTML="blok1";
handlerBlk1.style.display="flex";



handlerBlk2.style.width="400px";
handlerBlk2.style.height="400px";
handlerBlk2.style.float="left";
handlerBlk2.style.backgroundColor="green";
handlerBlk2.innerHTML="blok2";
*/

function addParagraf(blockname) {
    let paragraf = document.createElement("P"); // tworzymy akapit
    let textPar = document.createTextNode("Tekst 1"); // dodawanie tekstu
    paragraf.appendChild(textPar); // dodanie do paragrafu tekstu
    paragraf.setAttribute("class", "democlass")
    paragraf.setAttribute("id", "blok1")
    paragraf.setAttribute("name", "blok1")
    document.getElementById(blockname).appendChild(paragraf); // dodajemy paragraf do bloku

}

function addImg(blockname, imgName, imgAlt) {
    let img = document.createElement("img");
    img.setAttribute("src", imgName);
    img.setAttribute("alt", imgAlt);
    img.style.width = "100px";
    img.style.height = "100px";
    document.getElementById(blockname).appendChild(img);

}

function makeOptions(dataListName, textOptionName, value){
    const option = document.createElement("option");
    option.setAttribute("name", value);
    const textOption = document.createTextNode(textOptionName);
    option.appendChild(textOption);
    document.getElementById(dataListName).appendChild(option);
}

const gfx = [
    {
        id: 1,
        nazwa: "MSI GeForce GTX 1060 6GB GDDR5",
        ram: 6,
        coreHz: 1759,
        describe: "Karta graficzna NVIDIA GeForce GTX 1060"
    },
    {
        id: 2,
        nazwa: "XFX Radeon RX 590 Fatboy 8GB GDDR5",
        ram: 8,
        coreHz: 1545,
        describe: "Układ graficzny AMD Radeon RX 590 zapewnia bardzo dobre parametry do gier",
    },
]

const mb= [
    {
        id: 1,
        nazwa: "Gigabyte Z490M",
        socket: 1200,
        slotyRam: 4,
        rodzajRam: "DDR4",
        standard: "Micro ATX",
    },
    {
        id: 2,
        nazwa: "Gigabyte Z2137M",
        socket: 1200,
        slotyRam: 4,
        rodzajRam: "DDR4",
        standard: "Micro ATX",
    },
]

const ram= [
    {
        id: 1,
        nazwa: "ADATA Gammix D10",
        pamiecRam: 16,
        czestotliwosc: 3200,
        rodzajRam: "DDR4",
        cena: 289,
    },
    {
        id: 2,
        nazwa: "Corsair Vengeance RGB PRO",
        pamiecRam: 32,
        czestotliwosc: 3200,
        rodzajRam: "DDR4",
        cena: 735,
    },
]

const gfxBlock = document.getElementById("gfx");
gfxBlock.innerHTML="<b>"+gfx[0].nazwa+"</b>"+"<br>RAM: "+gfx[0].ram+" GB"+"<br>Częstotliwość rdzenia: "+gfx[0].coreHz+"Mhz"+"<br>"+"<br>";

const mbBlock = document.getElementById("mb");
mbBlock.innerHTML="<b>"+mb[0].nazwa+"</b>"+"<br>Socket: "+mb[0].socket+"<br>Pamięć: "+mb[0].slotyRam+" sloty na pamięć RAM "+mb[0].rodzajRam+"<br>"+"Standard: "+mb[0].standard+"<br>"+"<br>";

const ramBlock = document.getElementById("ram");
ramBlock.innerHTML="<b>"+ram[0].nazwa+"</b>"+"<br>Pamięć: "+ram[0].pamiecRam+" GB"+"<br>Częstotliwość: "+ram[0].czestotliwosc+" MHz"+"<br>"+"Rodzaj RAM: "+ram[0].rodzajRam+"<br>"+"<i>"+"Cena: "+ram[0].cena+"zł"+"</i>";

function componentSelected(nameOfComponent){
    let componentHandler = document.getElementById(nameOfComponent);
    let strAtt = componentHandler.options[componentHandler.selectedIndex].getAttribute('name');
    strAtt = parseInt(strAtt);
    let SelectedCont=""

    if (nameOfComponent=="gfx")
        SelectedCont="gfxSelected"
    else if (nameOfComponent=="mb")
        SelectedCont="mbSelected"

    const field = document.getElementById(SelectedCont)

    if (nameOfComponent=="gfx")
        field.innerHTML=gfx[strAtt-1].nazwa;
    else if (nameOfComponent=="mb")
        field.innerHTML=mb[strAtt-1].nazwa;

}

for(let i=0; i<2; i++)
    makeOptions("gfx", gfx[i].nazwa, gfx[i].id);

for(let i=0; i<2; i++)
    makeOptions("mb", mb[i].nazwa, mb[i].id);

function sumElements(...element){
    return


}
/*
let zgoda = confirm("JD?")
while(zgoda != true)
    zgoda = confirm("JD?")
if (zgoda == true)
    alert("serdeczne jd");
*/

// Typy zmiennych
var a = 10; // wartość całkowita
var b = 10.2; // wartość zmiennoprzecinkowa float
var c = 'a'; // wartość znakowa char
var d = "Tekst"; // wartość tekstowa string
var tab = [1, 2, 3]; // tablica array
var obj = {imie: "Ala"}; // obejkt, object
var boole = true; // wartość logiczna boolean
var n = null; // nic, none

document.write("Typ zmiennej a: ", typeof(a));
if (typeof(a) == "number")
    console.log("a to liczba całkowita");

document.write("Typ zmiennej b: ", typeof(b), "<br>");
document.write("Typ zmiennej c: ", typeof(c),"<br>");
document.write("Typ zmiennej d: ", typeof(d),"<br>");
document.write("Typ zmiennej tab: ", typeof(tab),"<br>");
document.write("Typ zmiennej obj: ", typeof(obj),"<br>");
document.write("Typ zmiennej boole: ", typeof(boole),"<br>");
document.write("Typ zmiennej none: ", typeof(n));

if (Array.isArray(tab)) document.write("<br>Tab jest tablicą")
let w = "10";
w = parseInt(w);
document.write(w+2);


function snowFlakeGen(screenWidth, screenHeight){
    const w = screenWidth;
    const h = screenHeight;

    let x = Math.floor(Math.random() * w)
    let y = Math.floor(Math.random() * h)

    yPos = y + "px";
    xPos = x + "px";

    const snowFlake = document.getElementById(objname);
        snowFlake.style.postition = "absolute";
        snowFlake.style.top = yPos;
        snowFlake.style.left = xPos;
}
snowFlakeGen(800,800, "cos1");
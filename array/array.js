const tab=[3,5];
const tab1=[1.11, "Jan", "Paweł", 2]
const tab2 = Array();
const tab3 = Array("Kot", 2, 2.3);

document.write(tab[0], " ", tab[1]);

for(let i=0; i<tab1.length; i++)
    document.write("<p style='color: red; font-size:1em; background-color:yellow'>", tab1[i], "<span>");

// join()
const cars = ["Mercedes", "Audi", "BMW", "Citroen"];
console.log(cars.join("").length)

// sort()
const tabSort = [1, 2137, 2, 21, 2115, 2.1, 32, 3.1];
tabSort.sort();
console.log(tabSort);

// unshift()
const tabImie = ["Tomasz", "Irena", "Judyta", "Józef", "Adrian"];
tabImie.unshift("Jan");
tabImie.unshift("Paweł", "Radosław");
    for(let i=0; i<tabImie.length; i++)
         document.write("<p style='color: black; font-size:1em; background-color:cyan'>", tabImie[i], "<span>");

if (tabImie.indexOf("Tomasz") !== -1) {
    console.log("Tomasz występuje w tablicy pod indexem", tabImie.indexOf("Tomasz"));
}
else{
    console.log("Tomasz nie występuje w tablicy");
}
// shift()ss
    const skasowany = tab.shift();
    console.log(skasowany);


const last =  tabImie.pop();
document.write("<p style='color: gray(); font-size:1em; background-color:red'>", last, "<span>");

console.log(last);
console.log(tab);

const tabPush = ["Marcin", "Ania", "Agnieszka"];
tabPush.push("Grzegorz");
tabPush.push("Piotr", "Karol");
console.log(tabPush)

const tabIndex = ["Marcin", "Ania", "Agnieszka", "Monika"];

if (tabIndex.indexOf("Ania") !== -1) {
    console.log("Ania występuje w tablicy pod indexem", tabIndex.indexOf("Ania"));
}



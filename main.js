// alert("Hello World");

let nachricht = "Hallo Welt";
// alert(nachricht); 
nachricht = "neuer Text"
// alert(nachricht); 
console.log(nachricht);
const linkColor = "#ff0000";
let eine_variable = "test";
console.log("Variable: eine_variable", eine_variable);
let highScore = 99999;
console.log("Highscore ist: ", highScore / 3)
let meineNachricht = "test1";
console.log (meineNachricht);
meineNachricht = "test2"
console.log(meineNachricht);
meineNachricht = `Ein mehr
und ein
ganzer langer
text`

console.log (meineNachricht)

let fullName = 'Jeffrey "The Dude" Lebowsky'
console.log (fullName);

let isOver18 = true;
console.log ("über 18?", isOver18);
let age = 13
console.log ("age über 18", age > 18);

let Zahlenliste = [2, 11, 24, 33];
console.log (Zahlenliste);
let namesliste = ["Jane", "John"];
console.log (namesliste);
console.log (namesliste[1]);
console.log ("Anzahl der Name: ", namesliste.length)

let benutzer = {
    vorname: "jane",
    nachname: "doe",
    alter: 25
};
console.log("Benutzer Alter: ", benutzer.alter);
benutzer.bestzeit = 200;
console.log(benutzer);
benutzer["bestzeit ever"] = 100
console.log(benutzer);


// Benutzer Eingabe

// let alter = prompt("wie alt bist du?");
// console.log("Du bist ", alter," Jahre alt")
// console.log ("Über 18?", alter > 18);
// if (alter > 18) {
// console.log ("du darft hinein...") 
// } else {
//     console.log ("noch nicht 18 ...");
// }

for (let i=1; i<=10; i++) {
    console.log("Wert von i", i);
}

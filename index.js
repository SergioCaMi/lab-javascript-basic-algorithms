
// Iteration 1: Names and Input
console.log("Iteration 1: Names and Input");
let hacker1 = "Denisse";
let hacker2 = "Robert" ;


// Pair Programing
// Iteration 1: Names and Input

console.log("Iteration 1.1: The driver's name is", hacker1);
console.log(`Iteration 1.2: The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`Iteration 2: The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`Iteration 2: seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Iteration 3: Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops
let nombre = "";

for (let i = 0; i < hacker1.length; i++) {
    nombre = nombre + hacker1.charAt(i).toUpperCase() + " ";
}
nombre = nombre.trim();
console.log(nombre);

let nombreDelRevés = "";

for(let i = hacker1.length - 1; i >= 0; i--) {
    nombreDelRevés = nombreDelRevés + hacker1.charAt(i);
}

console.log(nombreDelRevés);

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first, definitely.");
} else if (hacker1 = hacker2) {
    console.log("What?! You both have the same name?");
}


// Bonus 1

let longTest = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nisl tortor, porttitor interdum libero nec, faucibus eleifend massa. Phasellus et pulvinar sem. Vestibulum bibendum ornare elit non sodales. Curabitur bibendum orci a dui laoreet rutrum. Fusce elit magna, ultrices facilisis nulla efficitur, egestas gravida enim. Nullam tempus dui tellus. Vestibulum aliquet libero id nunc varius, vel mattis turpis suscipit. Donec vitae orci leo. Sed vulputate euismod sem non lobortis. Aenean commodo blandit neque, vitae tristique dui tincidunt nec. Maecenas congue porta lorem ac interdum. Vivamus venenatis volutpat gravida. Vivamus dignissim dui id ex imperdiet sagittis.\nPellentesque sit amet massa mauris. Suspendisse fermentum mi et aliquet gravida. Morbi a finibus mauris. Nam hendrerit bibendum lacus, vel malesuada tellus tincidunt nec. Nunc elementum ex in erat tincidunt gravida id vel massa. Nunc lacinia feugiat blandit. Nunc aliquet auctor ante ac dictum. In feugiat pellentesque mauris ac aliquet. Nam at elit at magna tempor semper ac sed urna. Pellentesque vehicula mauris ut viverra mattis.\nMaecenas vel nisi imperdiet, pellentesque leo et, vehicula sem. Duis eleifend tempus quam, sed dictum quam suscipit sit amet. Phasellus iaculis efficitur nunc, in euismod nisl efficitur eu. Phasellus imperdiet pulvinar nulla, sed hendrerit odio aliquam ut. Donec consequat scelerisque posuere. Maecenas accumsan vehicula interdum. Sed egestas varius leo. Proin et nulla in elit tempor ullamcorper. Aenean sit amet ultricies ante. Mauris et pellentesque dolor.';
let palabras = longTest.split(/\s+/);
console.log(palabras.length);

// Bonus 2

// let phraseToCheck = "Amor, Roma";
// phraseToCheck.replace(/\s+/g, '').toLowerCase();

// console.log(phraseToCheck);
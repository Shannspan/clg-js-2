//Global Variables

const listItems = 12;

console.log(listItems);

let favouriteShell = "Clam Shells";

const locationName = "Turtle Cliffs";

let washedUp = 'Kids love finding ' + favouriteShell;

console.log(washedUp)

let seaStorySentence = washedUp + ' at ' + locationName + '!';

console.log(seaStorySentence);

console.log(`${seaStorySentence.length}`);

let seaStorySentenceCap = seaStorySentence.toUpperCase();

console.log(seaStorySentenceCap);

let greeting = "Ahoy!";
console.log(greeting);

//Local Variable (Type = Boolean)

function flotsam(){
let Shell = true;
console.log(Shell);
}
flotsam();

//to declare variables in js use let & const ( - var is no longer used)

let shellList = document.getElementById ('shell-types');

console.log(shellList)

//Ok so I got the list but next step - how can I isolate individual <li> items? 



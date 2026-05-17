const fs = require('fs');
let text = fs.readFileSync('22.html', 'utf-8');
text = text.replace("browser","Aryan");

console.log("The content of the file is:");
console.log(text);


console.log("Creating a new file...");
fs.writeFileSync("Aryan.html",text);
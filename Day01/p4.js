const fs = require('fs');

const read = () => {
    fs.readFile('./data.txt', 'utf8', (err, data) => {
        if (err) console.log("Error:", err);
        else console.log("File content:", data);
    });
};

console.log("I am before reading");

read();

console.log("I am after reading");

const fs = require('fs');

const append = () => {
    const data = "\nThis is appended data from p6";

    fs.appendFile('./data.txt', data, 'utf8', (err) => {
        if (err) console.log("Error:", err);
        else console.log("Data appended successfully!");
    });
};

console.log("I am before appending");

append();

console.log("I am after appending");

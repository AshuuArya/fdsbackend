const fs = require('fs');

console.log("this is before fucntion declaration")
const write = () => {
    const data = "I am new data from the function";
    fs.writeFile('./data.txt', data, 'utf8', (err) => {
        if (err)
            console.log("Error:", err);
        else
            console.log("File written successfully!");
    });
};

console.log("I am before writing");

write();

console.log("I am after writing");

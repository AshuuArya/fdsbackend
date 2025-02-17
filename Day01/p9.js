const fs = require('fs');

const data = "this is dir data";

fs.writeFile('dirfile.txt' , data, 'utf8', (err) => {
    if (err) console.log("Error:", err);
    else console.log("File created and written successfully!");
});
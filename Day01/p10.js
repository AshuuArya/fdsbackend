const fs = require('fs')

const remove=() => {
    fs.unlink('./dirfile.txt' , (err) => {
        if (err) console.log("Error:", err);
        else console.log("File Deleted successfully!");
    });
}

remove();
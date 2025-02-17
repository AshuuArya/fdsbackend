const fs =require('fs');

fs.rmdir("mydir", (err) => {
    if (err) console.log("Error:", err);
        else console.log("Directory created successfully!");
    
});
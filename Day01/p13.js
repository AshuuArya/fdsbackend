const fs=require('fs/promises');

const write=async ()=>{
    const data = "i am new data"
    fs.writeFile('./data.txt' , data, 'utf8', (err) => {
        if (err) console.log("Error:", err);
        else console.log("File created and written successfully!");
    });

}
write();
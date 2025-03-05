const express = require('express');

const app = express();

const users = [
    {"id":1,"name":"John","age":25},
    {"id":2,"name":"Jane","age":30},
    {"id":3,"name":"Mike","age":28}
]
app.get('/api',(req,res)=>{
    res.json(users);
})

app.get('/users',(req,res)=>{
    res.send('welcome to backend server');
});

app.listen(9000,()=>{
    console.log('Server running on port 9000')
});
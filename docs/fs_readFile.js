const fs = require('fs');
fs.readFile('./data.txt',(err,data)=>{
    if (err){
        console.log(err);

    }
    console.log(data.toString());
});
const path = process.argv[2];
const fs = require('fs');
const axios = require('axios');


function decider(path){
    if (path.search('http') == -1){
        cat(path)
    } else {
        webCat(path)
}
}


function cat(path){
    fs.readFile(`${path}`, 'utf8' , (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        console.log(data)
      })}

async function webCat(path){
    try{
        const res = await axios.get(`${path}`)
        console.log(res.data)
    }
    catch(err){
        console.log(err)
    }
}

decider(path)
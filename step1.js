const path = process.argv[2]
const fs = require('fs');

function cat(path){
    fs.readFile(`${path}`, 'utf8' , (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        console.log(data)
      })}

cat(path)
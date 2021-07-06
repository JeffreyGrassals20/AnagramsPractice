const fs = require("fs");

const File = module.exports = {


    IfExist: () =>{

            if(fs.existsSync("./Anagrams.txt")) return true
            else return false

    }


}
const fs = require('fs');
const cheerio = require('cheerio')
const request = require('request');
const axios = require('axios')
require('events').EventEmitter.prototype._maxListeners = 710;
// let url = "https://www.moneycontrol.com/india/stockpricequote/finance-housing/canfinhomes/CFH"
// request(url,function(err,response,body){
//     fs.writeFile('companies.txt',body)
    
    
    
// })

let allcompanies = fs.readFileSync('comp.json');
allcompanies = JSON.parse(allcompanies).slice(0,3)
console.log(allcompanies.length)



let f = {};
let fh = function(){
    let ka = allcompanies.map(async val => {
    
    
        
        let k = {};        
        url = "https://www.moneycontrol.com" + val.url.trim()
    let data =  await axios(url)
    


// scrap()
// .then(function(val){
    
//     if(Object.keys(val).length){
//         let file = fs.readFileSync('co.json')
//         let a = JSON.parse(file)
//         if (a[Object.keys(val)[0]] == undefined)
//         {
//             f[Object.keys(val)[0]]= val[Object.keys(val)[0]]

//             fs.writeFile('co3.json',JSON.stringify(f))
//         }
        
         
        
        
//     }
    
    
    
// })
// .catch()
return data
})

let results  = Promise.all(ka)
results.then((c)=>{
    c.forEach(function(f,d){
        let $= cheerio.load(f);
        console.log($('.bl_15:nth-child(1)').text())
    })
})
}

fh()





    







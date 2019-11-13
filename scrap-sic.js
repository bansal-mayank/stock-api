const fs = require('fs');
const cheerio = require('cheerio')
const request = require('request');
let g = {}
let file = fs.readFileSync('co.json')
let a = JSON.parse(file)
for (i in a ){
    g[i]= {
        url :"https://www.moneycontrol.com" + a[i].url,
        name: a[i].name

    }
}
        

fs.writeFile('gh.json',JSON.stringify(g))




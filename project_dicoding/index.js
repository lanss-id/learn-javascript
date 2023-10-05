// const {coffeStock, isCoffeMacineReady} = require('./state') // import commond nodejs

// const makeCoffe = (type, miligram) => {
//     if(coffeStock[type] >= miligram){
//         console.log('Kopi berhasil dibuat')
//     } else{
//         console.log('Biji Kopi belum terpenuhi')
//     }
// }

import {coffeStock, isCoffeMacineReady} from "./state.js";

const displayStock = stock => {
    for(const type in stock){
        console.log(type)
    }
}

displayStock(coffeStock)

console.log(2+2)
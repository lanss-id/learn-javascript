// const {coffeStock, isCoffeMacineReady} = require('./state') // import commond nodejs

// const makeCoffe = (type, miligram) => {
//     if(coffeStock[type] >= miligram){
//         console.log('Kopi berhasil dibuat')
//     } else{
//         console.log('Biji Kopi belum terpenuhi')
//     }
// }

import {coffeStock, isCoffeMacineReady} from "./state.js";

try { // coba untuk menjalankan code
    const displayStock = stock => {
        for(const type in stock){
            console.log(type)
        }
    }
    
    displayStock(coffeStocks)
    
    console.log(2+2)
} catch (error) { // mengangkap apabila terdapat eror dalam code try
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
} finally { // akan menjalankan code tak peduli ada eror atau tidak
    console.log(coffeStock)
}
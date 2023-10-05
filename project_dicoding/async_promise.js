// dibawah ini adalah contoh asyncronous yang menggunakan promise
// keuntungannya adalah code jadi mudah dibaca dan mudah dimaintain

function getUsers(isOfline) {
    // langsung mengembalikan object promise
    return new Promise((resolve, reject) => {
        // mensimulasikan jaringan delay
        setTimeout(() => {
            const users = ['Jhon', 'Doe', 'Abigail'];
            if(isOfline){
                reject(new Error('user ini tidak dapat diambil ketika offline'));
                return;
            }
            resolve(users);
        }, 1000)
    })
}

getUsers(false)
        .then(users => console.log(users))
        .catch(error => console.log(error.message))
// argument getUsers ketika false akan mengembalikan nilai isOfline = false (tidak offline) yang artinya data bisa diambil
// argument getUsers ketika true akan mengembalikan nilai isOffline = true (sedang offline) yang artinya data tidak bisa diambil

// adapula cara promisify dengan promise-based 
// contoh menggunakan fungsi fs.readFiles() yang digunakan untuk membaca file async

import fs from 'fs';
import { promisify } from 'util';

const readFilesPromise = promisify(fs.readFile)

readFilesPromise('./project_dicoding/pesan.txt', 'utf-8')
    .then(data => console.log(data))
    .catch(err => console.log(err.message))
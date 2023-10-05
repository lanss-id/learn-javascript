//code dibawah ini adalah contoh async menggunakan callback 
//kurang direkomendasikan karena membuat code menjadi sulit dibaca

function cariPengguna(isOfline, callback) {
    // mensimulasikan jaringan delay
    setTimeout(() => {
        const users = ['Jhon', 'Doe', 'Abigail'];

        if(isOfline){
            callback(new Error('Data ini tidak bisa diakses'), null);
            return;
        }
        
        callback(null, users);
    }, 3000);
}

function usersCallback(error, users){
    if(error){
        console.log('proses gagal', error.message)
        return;
    }
    console.log('proses berhasil:', users)
}

// ini adalah pemanggilan yang menghasilkan data
cariPengguna(false, usersCallback)
// ini adalah pemanggilan yang tidak menghasilkan data
cariPengguna(true, usersCallback)

// terkadang dalam real case kita sering dihadapkan dengan async promise dengan library 3rd party
// dan best practice nya yaitu menggunakan fungsi promisify yang memakai object callback

// ini adalah contoh promisify callback-base dari core module util
import { promisify } from 'util'

function getUsers(isOfline, callback) {
    // mensimulasikan jaringan delay
    setTimeout(() => {
        const users = ['Jhon', 'Doe', 'Abigail'];

        if(isOfline){
            callback(new Error('Data ini tidak bisa diakses'), null);
            return;
        }
        
        callback(null, users);
    }, 1000);
}

// membuat versi promise dari fungsi getUsers
const getUsersPromise = promisify(getUsers)

getUsersPromise(false)
    .then(users => console.log(users))
    .catch(err => console.log(err.message))

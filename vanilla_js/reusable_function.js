//Array Map

const array = ['Audi', 'BMW', 'VW', 'Buggati'].map(name => `Brand Car ${name}`)
console.log(array)

//Array Filter
const truthy = [1, '', 'Doli', 0, null, 'Iska', false, 23].filter(item => Boolean(item))
console.log(truthy)
//pada code diatas yang tampil adalah
//[ 1, 'Doli', 'Iska', 23 ]
// kenapa bisa begitu, karena 0, '', null, false adalah data yang tidak bernilai
// termasuk undefine

// contoh Array Filter untuk data kkm
const murid = [
    {
        nama: 'Dhiar Basalamah',
        nilai: 92,
    },
    {
        nama: 'Maulana Kayyis',
        nilai: 89,
    },
    {
        nama: 'Adjie Mahardika',
        nilai: 90,
    },
    {
        nama: 'Fikri Andika',
        nilai: 88,
    },
    {
        nama: 'Ryan Fadillah',
        nilai: 60,
    },
    {
        nama: 'Anisa Fitriani',
        nilai: 56,
    }
]
const nilaiKKM = murid.filter(skorKkm => skorKkm.nilai > 80)
console.log(nilaiKKM)

// contoh Array Reduce
// function ini berguna seperti array map namun hanya menampilkan 1 data saja
// cocok untuk digunakan ketika membutuhkan nilai keseluruhan
const jumlahNilai = murid.reduce((acc, skor) => acc + skor.nilai, 0)
console.log(jumlahNilai)

// contoh Array find
// mirip seperti array some, namun ini akan mencari dan akan mengembalikan nilai
const cariMaulana = murid.find(cari => cari.nama === 'Maulana Kayyis')
console.log(cariMaulana)

// contoh array some
// function ini cocok untuk mencari definisi yang kita butuhkan
const int = [1,3,4,5]
const even = int.some(element => element % 2 === 0)
console.log(even)

// contoh array sort
// secara default, fungsi sort akan mengubah semua nilai dalam deretan
// menjadi bentuk string dan mengurutkannya secara ascending.
const bulan = ['Jan', 'Feb', 'Mar', 'Agst']
bulan.sort()
console.log(bulan)
// sort data tanpa compare number akan mengurut
// berdasarkan angka paling awal
const angka = [1, 1300, 25, 6, 40, 700]
angka.sort()
console.log(angka)
// dengan compare number akan mengurutkan dengan akurat
const compare = (a, b) => {
    return a - b
}
console.log(angka.sort(compare))
// Pada compare function, fungsi akan membandingkan 2 nilai yang akan menghasilkan 3 result yaitu
// negatif (-), 0, dan positif (+).
// Jika, negative maka `a` akan diletakkan sebelum `b`
// Jika, positive maka `b` akan diletakkan sebelum `a`
// Jika, 0 maka tidak ada perubahan posisi.

// Array every
const minimalKKM = 75
const scores = nilaiKKM.map(score => score.nilai) // untuk mengambil data nilai dari object berbungkus array
const examPassed = scores.every(score => score >= minimalKKM)
console.log(examPassed)

//array foreach
const names = murid.map(name => name.nama)
// names.forEach(name => {
//     console.log(`hello ${name}`)
// })
// coba perulangan
// const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

for(let i = 0; i < names.length; i++) {
    if(names[i] === 'Fikri Andika') continue; // Bisa!

    console.log(`Hello, ${names[i]}!`);
}

// names.forEach((name) => {
//     if(name === 'Jeff') continue; // Tidak Bisa!
//     console.log(`Hello, ${name}`);
// });




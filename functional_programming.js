// Pure functional
// Pure functiona berfungsi untuk memanipulasi data
// tanpa mempengaruhi object luar lainnya

const user = {
    firstName: 'Maulana',
    lastName: 'Kyiis',
}

const createNewUserLastName = (newLastName, user) => {
    return {...user, lastName: newLastName}
}

const newUser = createNewUserLastName('Kayyis', user)
console.log(newUser)



// Immutability
// sebuah objek tidak boleh diubah setelah objek tersebut dibuat

const laptop = {
    brand: 'Asus',
    type: 'Asus Vivobook',
    generation: 3
}

const createNewTypeLaptop = (newType, newGen, laptop) => {
    return {...laptop, type: newType, generation: newGen}
}

const newTypeLaptop = createNewTypeLaptop('Asus Rog Zephyrus Duo', 4,laptop)
console.log(laptop)
console.log(newTypeLaptop)

// Rekursif
// Rekursif merupakan teknik pada sebuah function yang memanggil dirinya sendiri.

const hitungMundur = start => {
    console.log(start)
    if (start > 1) hitungMundur(start-2)
}
hitungMundur(5)

// Higher-Order Function
// Membuat map function sendiri

const names = ['Budi', 'Dayat', 'Agung'];

const arrayMap = (arr, action) => {
    const loopTrough = (arr, action, newArray = [], index = 0 ) => {
        const item = arr[index]
        if(!item) return newArray
        return loopTrough(arr, action, [...newArray, action(arr[index])], index + 1)
    }

    return loopTrough(arr, action)
}

const newName = arrayMap(names, (name) => `Muhammad ${name}`)

console.log({names, newName})
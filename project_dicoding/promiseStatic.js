const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000))
const promise2 = new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000))
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000))

Promise.all([promise1, promise2, promise3])
    .then((value) => console.log(value))
    .catch((err) => console.log(err.message))

// dari code diatas ini akan mengembalikan nilai error tanpa menghasilkan data lain

const promise = new Promise((resolve) => setTimeout(() => resolve(1), 1000))
const promis = new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000))
const promi = new Promise((resolve) => setTimeout(() => resolve(3), 3000))

// promise race hanya mengembalikan data yang paling cepat(hanya 1 data saja)
Promise.race([promise, promis, promi])
    .then((value) => console.log(value))


// kita akan mencoba Promise.allSettled
const all = new Promise((resolve) => setTimeout(() => resolve(1), 1000))
const all1 = new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000))
const all2 = new Promise((resolve) => setTimeout(() => resolve(3), 3000))

// promise all settled akan mengembalikan seluruh status dari promise
Promise.allSettled([all, all1, all2])
    .then((value) => console.log(value))

// lalu dibawah ini adalah promise all
// promise.all mengembalikan nilai tercepat yang berstatus fulfilled. Jika seluruh Promise berstatus rejected, method ini akan mengembalikannya dengan pesan “All Promises were rejected”.
// fulfilled sample
const promiseResolve1 = new Promise((resolve, reject) => setTimeout(() => resolve("1"), 1000));
const promiseResolve2 = new Promise((resolve, reject) => setTimeout(() => resolve("2"), 2000));
const promiseResolve3 = new Promise((resolve, reject) => setTimeout(() => resolve("3"), 3000));

Promise.any([promiseResolve1, promiseResolve2, promiseResolve3])
 .then((value) => console.log(value)) // 1
 .catch((error) => console.log(error.message));

// rejected sample
const promiseReject1 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('1')), 1000));
const promiseReject2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('2')), 2000));
const promiseReject3 = new Promise((resolve, reject) => setTimeout(() => reject(new Error("3")), 3000));

Promise.any([promiseReject1, promiseReject2, promiseReject3])
 .then((value) => console.log(value))
 .catch((error) => console.log(error.message)); // All Promises were rejected
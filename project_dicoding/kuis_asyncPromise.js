// const {promisify} = require('util');

function getProvinces(countryId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (countryId === 'id') {
                resolve([
                { id: 'id-jk', name: 'Jakarta' },
                { id: 'id-bt', name: 'Banten' },
                { id: 'id-jr', name: 'Jawa Barat' },
                ]);
                return;
            }
            reject(new Error('Country not found'));
        })
    }, 1000);
}

getProvinces('')
    .then(province => console.log(province))
    .catch(err => console.log(err.message))

// module.exports = { getProvinces: getProvinces };
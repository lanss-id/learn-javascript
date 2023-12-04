const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Home Page'
        }
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman ini tidak dapat diakses menggunakan method tersebut'
        }
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About Page'
        }
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman ini tidak dapat diakses menggunakan method tersebut'
        }
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan'
        }
    },
    {
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {
            const { name = 'stranger'} = request.params
            const { lang } = request.query

            if (lang === 'id') {
                return `Haii, ${name}`
            }

            return `Haloo, ${name}`
        }
    },
]

module.exports = routes
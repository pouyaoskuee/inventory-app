const products = [
    {
        id: 1,
        title: 'react.js',
        category: 'front-end',
        createdAt: 2024
    },
    {
        id: 2,
        title: 'next.js',
        category: 'front-end',
        createdAt: 2026
    },
    {
        id: 3,
        title: 'angular.js',
        category: 'front-end',
        createdAt: 2022
    }
]

const category = [
    {
        id: 1,
        title: 'front-end',
        description: 'it is a dog',
        createdAt: 2022
    },
    {
        id: 2,
        title: 'back-end',
        description: 'it is a dog',
        createdAt: 2022
    }
]




export default class Storage {
    static getAllCategories = () => {
        const getCategories= JSON.parse(localStorage.getItem('categories')) || []
        getCategories.sort((a, b) => a.createdAt - b.createdAt)
        return getCategories

    }

    static saveCategories = (categorytosave) => {
        const sevedCategories = Storage.getAllCategories()
        const isexisteditem= sevedCategories.find(c => c.id === categorytosave.id)
        if (isexisteditem) {
            isexisteditem.title = categorytosave.title
            isexisteditem.description = categorytosave.description

        }else {
            categorytosave.id = new Date().getTime()
            categorytosave.createdAt = new Date().toISOString()
            sevedCategories.push(categorytosave)
            return localStorage.setItem('categories', JSON.stringify(sevedCategories))
        }

    }

    static getAllproducts = () => {
        const getproducts= JSON.parse(localStorage.getItem('products')) || []
        getproducts.sort((a, b) => a.createdAt > b.createdAt ? -1 : 1 )
        return getproducts

    }

    static saveproducts = (producttosave) => {
        console.log(producttosave)
        const sevedproducts = Storage.getAllproducts()
        const isexisteditem= sevedproducts.find(c => c.id === producttosave.id)
        if (isexisteditem) {
            isexisteditem.title = productstosave.title
            isexisteditem.category= producttosave.category
            isexisteditem.quantity = producttosave.quantity
        }else {
            producttosave.id = new Date().getTime()
            producttosave.createdAt = new Date().toISOString()
            sevedproducts.push(producttosave)
            return localStorage.setItem('products', JSON.stringify(sevedproducts))
        }

    }

    static updateProduct(producttosave) {
        localStorage.setItem('products', JSON.stringify(producttosave))
    }

    static test(){
        localStorage.setItem('categories', JSON.stringify(category))
        localStorage.setItem('products', JSON.stringify(products))
    }
}
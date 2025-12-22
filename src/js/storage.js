const products = [
    {
        id: 1,
        title: 'react.js',
        description: 'front end library',
        createdAt: 2024
    },
    {
        id: 2,
        title: 'next.js',
        description: 'front end library',
        createdAt: 2026
    },
    {
        id: 3,
        title: 'angular.js',
        description: 'front end library',
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
        const isexisteditem= sevedCategories.find(c => c.id === id)
        if (isexisteditem) {
            isexisteditem.title = categorytosave.title
            isexisteditem.description = categorytosave.description

        }else {
            categorytosave.id = new Date().getTime()
            categorytosave.createdAt = new Date().toISOString()
            return localStorage.setItem('categories', JSON.stringify(categorytosave))
        }

    }

    static test(){
        return localStorage.setItem('categories', JSON.stringify(category))
    }
}
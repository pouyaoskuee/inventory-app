import Storage  from "/inventory%20app/src/js/storage.js";
const Ctitle = document.getElementById('categoryName')
const Cdescription = document.getElementById('categoryDescription')
const categorySubmit = document.getElementById('CategorySubmit')
const productsCategory = document.getElementById('productsCategory')

class  categoryView  {
    constructor(){
        categorySubmit.addEventListener('click', (e)=> this.addNewCategory(e))
        this.categories = []
    }



    addNewCategory(e){
        e.preventDefault()
        const newCategory = {
            title : Ctitle.value,
            description : Cdescription.value
        }
        if (newCategory.title==='') return null
        console.log('hello')
        Storage.saveCategories(newCategory)
        this.categories = Storage.getAllCategories()
        this.createCategory()
        Ctitle.value = ''
        Cdescription.value = ''
    }

    setApp(){
        this.categories = Storage.getAllCategories()
    }

    createCategory(){
        let result = `<option value="" disabled selected>select a category</option>`
        this.categories.forEach(item => {
            result += `<option value="${item.id}"> ${item.title}</option>`
        })

        productsCategory.innerHTML = result

    }
}

export default  new categoryView()
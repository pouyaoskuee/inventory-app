import Storage  from "/inventory%20app/src/js/storage.js";

const productsName = document.getElementById('productsName')
const Quantity = document.getElementById('Quantity')
const Category = document.getElementById('productsCategory')
const productSubmit = document.getElementById('productSubmit')
const productsList = document.getElementById('productsList')


class ProductView {
    constructor(){
        let products = []
        productSubmit.addEventListener('click', (e) => this.addProduct(e))


    }

    setApp(){
        this.products= Storage.getAllproducts()
    }

    addProduct(e){
        e.preventDefault()
        const newProduct={
            title: productsName.value,
            quantity: Quantity.value,
            category: Category.value,
        }
        if(newProduct.title==='' || newProduct.quantity==='' ) return 'error'
        Storage.saveproducts(newProduct)
        this.products = Storage.getAllproducts()
        this.createProduct()

        productsName.value = ''
        Quantity.value = ''

    }


    createProduct(){
        let result = ''
        this.products.forEach(item => {
            const selected = Storage.getAllCategories().find((c)=> parseInt(c.id)===parseInt(item.category))
            console.log(selected)
            result+= `
                 <div class="flex flex-row justify-between">
                    <span>${item.title}</span>
                    <div class="flex flex-row gap-x-4">
                        <span>${new Date().toLocaleDateString('fa-IR')}</span>
                        <span class="border border-slate-400 pr-3 pl-3 rounded-xl" >${selected.title}</span>
                        <span class="bg-slate-500 w-7 h-7 text-zinc-50 border-solid border-2 rounded-full text-center">${item.quantity}</span>
                        <span data-id="${item.id}" >delete</span>
                    </div>
                </div>`

        })
        productsList.innerHTML = result
    }

}


export default new ProductView();
import Storage from "/inventory%20app/src/js/storage.js";
import categoryView  from "/inventory%20app/src/js/categoryview.js";
import productView  from "/inventory%20app/src/js/productview.js";

document.addEventListener("DOMContentLoaded", function() {
    categoryView.setApp()
    categoryView.createCategory()

    productView.setApp()
    productView.createProduct()

})




// Storage.test()
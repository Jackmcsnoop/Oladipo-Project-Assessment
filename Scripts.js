//function toShopFunc(){
//    window.location.assign("products.html");
//}
//let Button1 = document.getElementById("toShop");
//Button1.addEventListener("Click",toShopFunc())

function Search(){
    const sData = document.getElementById("data").value.toLowerCase();
    const PCs = document.querySelectorAll(" .product");
    PCs.forEach(product =>{
        const text = product.textContent.toLowerCase();
        if(text.includes(sData)){
            product.style.display="block"
        }else{
            product.style.display="none"
        }
    });
}


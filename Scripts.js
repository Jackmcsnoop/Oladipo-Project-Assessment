//function toShopFunc(){
//    window.location.assign("products.html");
//}
//let Button1 = document.getElementById("toShop");
//Button1.addEventListener("Click",toShopFunc())

function Search(){
    const sData = document.getElementById("data").value.toLowerCase();
    const PCs = document.querySelectorAll(" .productName");
    PCs.forEach(productName =>{
        const text = productName.textContent.toLowerCase();
        if(text.includes(sData)){
            console.log("Block")
            productName.parentElement.style.display="block"
        }else{
            console.log("None")
            productName.parentElement.parentElement.style.display="none"
        }
    });
}

document.getElementById("data").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        Search()
    }
    });

var shopNowButton = document.getElementsByClassName("shopNowButton");
    shopNowButton.addEventListener("click", () => {
        window.location.assign("products.html");
    });

var accord = document.getElementsByClassName('accordian');
    for(let i=0;i<accord.length;i++){
        accord[i].addEventListener('click',function(){
            this.classList.toggle('active');
            var Info=this.nextElementSibling;
            if(Info.style.display==='block'){
                Info.style.display='none';
            }else{
                Info.style.display='block';
            }
        })
    }    

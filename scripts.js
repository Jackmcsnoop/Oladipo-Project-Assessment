//The following code toggles visibility of the accordions details
var accord = document.getElementsByClassName('accordian');
    for(let i=0;i<accord.length;i++){ //For loop to loop through all accordions 
        accord[i].addEventListener('click',function(){ //When the accordion is left clicked
            this.classList.toggle('active'); 
            var Info=this.nextElementSibling; 
            if(Info.style.display==='block'){ //If the accordions details are showing hide the details
                Info.style.display='none';
            }else{ //If the accordions details are hiden display the details
                Info.style.display='block';
            }
        })
    }

//The following code searches through products to display certain products based off of a search
function Search(){ //Create the function and call it search
    const sData = document.getElementById("data").value.toLowerCase(); //We set the data to lowercase so that any capitals are not misinterpreted
    const PCs = document.querySelectorAll(" .productName");
    PCs.forEach(productName =>{ //To loop through all products
        const text = productName.textContent.toLowerCase(); 
        if(text.includes(sData)){ //If the search is similar to the name of the product the product is displayed
            productName.parentElement.style.display="block" 
        }else{ //Otherwise the product is not displayed 
            productName.parentElement.parentElement.style.display="none"
        }
    });
}

//The following code waits for the enter key to be pressed whilst within the search bar if the enter key is pressed the function search runs
document.getElementById("data").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        Search()
    }
    });

//The following code uses javascript to create a hyperlink (Styled as a button) that takes you to the product page 
var shopNowButton = document.getElementsByClassName("shopNowButton");
    shopNowButton.addEventListener("click", () => {
        window.location.assign("products.html");
    });

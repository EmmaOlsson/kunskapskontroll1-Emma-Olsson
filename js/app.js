/* 
1. En knapp som återställer allt till originalutseendet
- Knapp längst ner
2. Alla ändringar som du har gjort ska ändras tillbaka
3. Byt ut minst ett foto
    -Byter ut soldout till hoodie-ocean som jag dragit ner opacitet på i photshop
4. Ändra bakgrundsfärg på minst ett element
- Ändra bakgrundsfärg för produkterna
5. Ändra text på minst ett element
- Ändrat text på buy-knappar
6. Ändra färg på minst en knapp
- Ändrat färg beroende på added eller sold out
7. Ta bort minst 1 element (Måste läggas till igen när man trycker på återställningsknappen)
8. Lägg till en lista var du vill med synlig border för varje li element 
-   
(Måste tas bort när man trycker på återställningsknappen) 
*/


let html =document.querySelector('html')

console.log(html)


/////////////////
//* VARIABLES *//
/////////////////

// Creating variable for all buttons
let btns = document.querySelectorAll('button');

// Creating variable for all products
let products = document.querySelectorAll('article figure');


// Creating a variable for a new a-element
let cartText = document.createElement('a')
cartText.setAttribute('class', 'cart-text-remove');




////////////////////
//* RESET BUTTON *//
////////////////////

let resetBtn = document.createElement('button');

// Creates a footer-element 
let footer = document.querySelector('footer');

// Places the resetBtn after the footer-element
footer.insertAdjacentElement('afterend', resetBtn);

// Adds the 'RESET ALL'-text to the reset button
resetBtn.innerText = 'Reset all';

// Lägger till resetAll-funktion till addEventListener
resetBtn.addEventListener('click', resetAll)

// Changes some styles for the resetBtn
resetBtn.style.backgroundColor = '#abc5dbd7';
resetBtn.style.width = '20%';
resetBtn.style.fontSize = '1.4rem';
resetBtn.style.textTransform = 'uppercase';
resetBtn.style.border= 'none';
resetBtn.style.borderRadius= '.4rem';
resetBtn.style.color= '#fff';
resetBtn.style.margin = '1rem auto';
resetBtn.style.borderRadius = '.4rem';
resetBtn.style.padding = '1rem 0';
resetBtn.style.boxShadow = '.2rem .5rem .5rem darkgrey'


//////////////////////
//* RESET FUNCTION *//
//////////////////////

// Funktionen som vi använder oss av i "reset.addEventListener"
function resetAll(){

    // Sets the products background to default color
    let products = document.querySelectorAll('article figure');
    for (let product of products) {
        product.style.backgroundColor = 'rgb(244, 182, 10)';
    };

    // Sets the h2 to default text
    let firstBtn = btns[0]
    firstBtn.innerText = 'buy';

    // Sets the button background to default color
    let productBtns = document.querySelectorAll('article button');
    for (let blackBtns of productBtns) {
    blackBtns.style.backgroundColor = '#000';
    blackBtns.innerText = 'buy';
    blackBtns.style.textTransform = 'none'
    blackBtns.style.fontSize = '0.8333rem';
    blackBtns.style.transform = 'none'
    }

    // Sets the product image to default
    changeImgToDefault();

    // Removes cart text
    removeCart();
}

////////////////////
//* FIRST BUTTON *//
////////////////////

// Sätt eventListener för första knappen
let firstBtn = btns[0];

firstBtn.addEventListener('click', 
    function(event){
        addToCartText();
        countClick();
        products[0].style.backgroundColor = '#72b584';
    }
);

firstBtn.addEventListener('mouseover',
    function(event) {
        changeToAddToCart();
    }
)

firstBtn.addEventListener('mouseleave',
    function(event) {
        defaultBlackButton();
    }
)

/////////////////////
//* SECOND BUTTON *//
/////////////////////

let secondBtn = btns[1];

secondBtn.addEventListener('click', 
    function(event){
        addToCartText();
        countClick();
        products[1].style.backgroundColor = '#72b584';
    }
);

secondBtn.addEventListener('mouseover',
    function(event) {
        changeToAddToCart();
    }
)

secondBtn.addEventListener('mouseleave',
    function(event) {
        defaultBlackButton();
    }
)


/* secondBtn.addEventListener('mouseover', 
    function(event){
        changeToSoldOut();
        products[1].style.backgroundColor = '#a82b24af';
    }
); */

////////////////////
//* THIRD BUTTON *//
////////////////////

let thirdBtn = btns[2];

thirdBtn.addEventListener('mouseover', 
    function(event){
        changeToSoldOut();
        changeImgToFaded();
        products[2].style.backgroundColor = '#a82b24af';
    }
);


/////////////////
//* FUNCTIONS *//
/////////////////


function changeToSoldOut(){
    event.target.innerText = 'sold out';
    event.target.style.textTransform = 'uppercase'
    event.target.style.fontSize = '1rem';
    event.target.style.transform = 'rotate(-8deg)'
    event.target.style.backgroundColor = '#c93f26';
}


function changeToAddToCart(){
    event.target.style.backgroundColor = '#72b584';
    event.target.innerText = 'Add to cart';
    event.target.style.textTransform = 'uppercase'
    event.target.style.fontSize = '1rem';
}



// When clicking on 'Add to cart', text box shows up next to cart icon and count items added
function addToCartText() {
    let itemText = '';
    if (count <= 1) {
        itemText = 'item';
    } else {
        itemText = 'items';
    }

    cartText.href = '#';
    cartText.innerText = `[ ${count} ] ${itemText} added to cart`;
    
    cartText.setAttribute('id', 'cart-text')
    let menuElements = document.querySelectorAll('a');
    menuElements[2].insertAdjacentElement('beforeend', cartText)
}

// count-click function 
let count = 1;
let countClickText = document.createElement('a');
function countClick() {
    event.target.onclick = function () {
        count++;
        countClickText.innerHTML = count;
    }

}


function defaultBlackButton() {
    event.target.style.backgroundColor = '#222';
    event.target.innerText = 'Buy';

}

function changeImgToFaded() {
    let blueHoodie = document.querySelector('.art-3 figure img')
    blueHoodie.src = 'img/hoodie-ocean-faded.png'
}


// Adding a heart after 




// Creating variable for the h2 in article
let productName = document.querySelectorAll('article h2');

for (let i = 0; i < productName.length; i++) {

    let likeButton = document.createElement('img');
 
    productName[i].insertAdjacentElement('beforeend', likeButton)

    likeButton.src = 'img/empty-heart.png';
    likeButton.style.height = '2rem'
    likeButton.style.width = '2rem'
    likeButton.style.marginLeft = '5rem';
    likeButton.style.marginTop = '.4rem';


    function fillHeart() {
        event.target.onclick = function () {
            count++;
            countClickText.innerHTML = count;
        }

        if (count % 2 === 0) {
            likeButton.src = 'img/empty-heart.png'
        } else {
                    likeButton.src = 'img/filled-heart.png';
        }

        console.log(count)
    
    }


    

    likeButton.addEventListener('click', 
    function (event) {
    fillHeart();

});
}
/* btn.addEventListener('click',

    function(event){
        //firstProduct.style.backgroundColor = 'lightpink';

        // Toggle
        firstProduct.classList.toggle('bg-yellow');
        firstProduct.classList.toggle('text-large');
    }

);
 */





















/* default functions */

function changeImgToDefault() {
    let blueHoodie = document.querySelector('.art-3 figure img')
    blueHoodie.src = 'img/hoodie-ocean.png';
}

let productBtns = document.querySelectorAll('article button');
for (let blackBtns of productBtns) {
blackBtns.style.backgroundColor = '#000';
blackBtns.innerText = 'buy';
blackBtns.style.textTransform = 'none'
blackBtns.style.fontSize = '0.8333rem';
blackBtns.style.transform = 'none'
}

function removeCart() {
let cartText = document.createElement('a')
cartText.setAttribute('class', 'cart-text-remove');

let removeCart = document.querySelector('.cart-text-remove')

}


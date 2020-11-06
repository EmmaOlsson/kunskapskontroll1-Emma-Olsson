/* 
1. En knapp som återställer allt till originalutseendet
- Japp
2. Alla ändringar som du har gjort ska ändras tillbaka

3. Byt ut minst ett foto

4. Ändra bakgrundsfärg på minst ett element
- Ändrat tre
5. Ändra text på minst ett element
- Ändrat tre
6. Ändra färg på minst en knapp
- Ändrat tre
7. Ta bort minst 1 element (Måste läggas till igen när man trycker på återställningsknappen)
8. Lägg till en lista var du vill med synlig border för varje li element 
-   Jag ska skapa en lista där ändringarna dyker upp
(Måste tas bort när man trycker på återställningsknappen) 
*/

/////////////////
//* VARIABLES *//
/////////////////

// Creating variable for all buttons
let btns = document.querySelectorAll('button');

// Creating variable for all products
let products = document.querySelectorAll('article figure');

// Creating variable for all a-tags
let menuElements = document.querySelectorAll('a');

// Creating variable for cart text
let cartText = menuElements[3];

// Creating variable for cart
let cart = document.querySelector('#header-navigation img')



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

    // Removes cart text
    let menu = document.querySelectorAll('a')
    let menuChildren = menu.children;
    menuChildren.removeElement(menuChildren[3])

    ///////// FEL
    
}


////////////////////
//* FIRST BUTTON *//
////////////////////

// Sätt eventListener för första knappen
let firstBtn = btns[0];

firstBtn.addEventListener('click', 
    function(event){
        changeTextToAdded();
        addToCartText();
        products[0].style.backgroundColor = '#72b584';
    }
);

/////////////////////
//* SECOND BUTTON *//
/////////////////////

let secondBtn = btns[1];

secondBtn.addEventListener('mouseover', 
    function(event){
        changeTextToSoldOut();
        changeBtnToRed();
        products[1].style.backgroundColor = '#a82b24af';
    }
);

////////////////////
//* THIRD BUTTON *//
////////////////////

let thirdBtn = btns[2];

thirdBtn.addEventListener('mouseover', 
    function(event){
        changeTextToSoldOut();
        changeBtnToRed();
        products[2].style.backgroundColor = '#a82b24af';
    }
);


/////////////////
//* FUNCTIONS *//
/////////////////


function changeTextToSoldOut(){
    event.target.innerText = 'sold out';
    event.target.style.textTransform = 'uppercase'
    event.target.style.fontSize = '1rem';
    event.target.style.transform = 'rotate(-8deg)'
}

function changeBtnToRed(){
    event.target.style.backgroundColor = '#c93f26';
}

function changeTextToAdded(){
    event.target.innerText = 'added to cart!';
    event.target.style.textTransform = 'uppercase'
    event.target.style.fontSize = '1rem';
    event.target.style.backgroundColor = '#72b584';
}

function addToCartText() {
    let cartText = document.createElement('a')
    cartText.href = '#';
    cartText.innerText = 'One item added to cart';
    cartText.style.color = '#fff';
    cartText.style.fontWeight = '600';
    cartText.style.textTransform = 'uppercase';
    cartText.style.backgroundColor = '#72b584';
    cartText.style.padding = '.8rem';
    cartText.style.marginLeft = '2rem';
    cartText.style.borderRadius = '.4rem'
    cartText.setAttribute('id', 'cart-text')
    menuElements[2].insertAdjacentElement('beforeend', cartText)
}



//////////////////// Den här var bra!

/* let greyColor = '(rgb(72, 72, 74))';48484a
let redColor = '(rgb(168, 43, 36))';a82b24
let blueColor = '(rgb(43, 82, 127))'; #2b527f */

// Selects the background of the products
/* let productsBackground = document.querySelectorAll('article figure');

// Array with hex-colors of grey, red and blue
let colors = ['#48484aa8', '#a82b24af', ' #2b527fad']

// Function that loops the colors-array
function changeBackgroundColor() {
    for (let i = 0; i < productsBackground.length; i++) {
        productsBackground[i].style.backgroundColor = colors[i];
     }
} */
//////////////////



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


////////////////////////////////////////////
// Creating and styling the reset-button //
///////////////////////////////////////////

let resetBtn = document.createElement('button');

// Creates a footer-element 
let footer = document.querySelector('footer');

// Places the resetBtn after the footer-element
footer.insertAdjacentElement('afterend', resetBtn);

// Adds the 'RESET ALL'-text to the reset button
resetBtn.innerText = 'Reset all';

// Adds the resetAll-function to addEventListener
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

// Function for the "reset.addEventListener"
function resetAll() {

    // Sets the products background to default color
    defaultBackgroundFigure();

    // Sets the button background to default color
    defaultProductBtns()

    // Sets the product image to default
    changeImgToDefault();

    // Resets heart-icon
    resetHeart();

    // Removes cart text
    removeCart();
}



////////////////////
//* FIRST BUTTON *//
////////////////////

// Selecting the index for firstBtn
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
        defaultProductBtns();
    }
)

/////////////////////
//* SECOND BUTTON *//
/////////////////////

// Selecting the index for secondBtn
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
        defaultProductBtns();
    }
)


////////////////////
//* THIRD BUTTON *//
////////////////////

// Selecting the index for thirdBtn
let thirdBtn = btns[2];

thirdBtn.addEventListener('mouseover', 
    function(event){
        changeToSoldOut();
        changeImgToFaded();
        products[2].style.backgroundColor = '#a82b24af';
    }
);


/////////////////////
//* PRODUCT-LIST *//
////////////////////

// Creating a variable and element for "Product" in navigation
let navigation = document.querySelectorAll('nav a');
let navProducts = navigation[1];

navProducts.addEventListener('mouseover', 
    function(event){
        showProducts();
    }
);

navProducts.addEventListener('mouseleave', 
    function(event){
        hideProducts();
    }
);


/////////////////
//* FUNCTIONS *//
/////////////////

// Changes the third product button to red
function changeToSoldOut(){
    event.target.innerText = 'sold out';
    event.target.style.textTransform = 'uppercase'
    event.target.style.fontSize = '1rem';
    event.target.style.transform = 'rotate(-8deg)'
    event.target.style.backgroundColor = '#c93f26';
}

// Changes the first and second product button to green
function changeToAddToCart(){
    event.target.style.backgroundColor = '#72b584';
    event.target.innerText = 'Add to cart';
    event.target.style.textTransform = 'uppercase'
    event.target.style.fontSize = '1rem';
}

// When clicking 'Add to cart', text box shows up next to cart icon and count items added
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

// Functions that counts clicks
let count = 1;
let countClickText = document.createElement('a');
function countClick() {
    event.target.onclick = function () {
        count++;
        countClickText.innerHTML = count;
    }
}

// Changes the third product image to a faded version
function changeImgToFaded() {
    let blueHoodie = document.querySelector('.art-3 figure img')
    blueHoodie.src = 'img/hoodie-ocean-faded.png'
}


// Adding a heart after h2-element in products
function addEmptyHeart() {
    let cartIcon = document.querySelector('nav img');
    let heartIcon = document.createElement('img');
    heartIcon.src = 'img/empty-heart.png';
    heartIcon.style.height = '1.75rem';
    cartIcon.insertAdjacentElement('beforebegin', heartIcon);
}
addEmptyHeart();

// Creating variable for the h2 in article
let productName = document.querySelectorAll('article h2');

// Loop that adds a heart in every product-article
for (let i = 0; i < productName.length; i++) {

    let likeButton = document.createElement('img');
 
    productName[i].insertAdjacentElement('beforeend', likeButton)

    // Styling likeButton
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

    // Changes to red heart
    likeButton.addEventListener('click', fillHeart);

    // Adding a class to likeButton
    likeButton.setAttribute('class', 'like-button')
}




/////////////////////////////////////////////////////
// Creating a category-list of different products //
/////////////////////////////////////////////////////

let category = ['Accessories', 'Hoodies', 'Pants', 'Shoes', 'T-Shirts'];


function showProducts() {
    let ul = document.createElement('ul');
    ul.setAttribute('id', 'cart-ul');

    // Styles the ul
    ul.style.listStyle = 'none';
    ul.style.textAlign = 'center';
    ul.style.padding = '1rem';
    ul.style.boxShadow = '.2rem .2rem .5rem darkgrey'
    ul.style.background = 'rgba(255, 229, 158, 0.4)';
    ul.style.width = '58.5rem';
    ul.style.margin = '0 auto';
    ul.style.lineHeight = '3rem';

    // Loops through the catergory length
    for (let i = 0; i < category.length; i++) {
        let li = document.createElement('li');
 
        // Styles the li
        li.style.border = 'solid .1rem rgba(255, 250, 238, 0.39)';
        li.style.boxShadow = '.2rem .2rem .5rem lightgrey'
        li.style.margin = '1rem';
        li.style.background = 'rgba(255, 229, 158, 0.8)';
        li.style.color = 'rgba(255, 250, 238, 0.9)';
        li.style.textShadow = '.2rem .2rem .5rem darkgrey'
        li.style.fontSize = '2rem';
        li.style.fontWeight = '600';
        li.style.textTransform = 'uppercase';

        ul.appendChild(li);
    }
    
    // Creates li-elements out of the ul-children
    let li = ul.children;

    // Giving the li-elements a value from category-array through a loop
    for (let i = 0; i < category.length; i++) {
        li[i].innerText = category[i];
    }

    // Puts the ul-element before the main-element
    let main = document.querySelector('main');
    main.insertAdjacentElement('beforebegin', ul);
}


/////////////////////////
//* DEFAULT FUNCTIONS *//
/////////////////////////

// Changes back to default hoodie-img
function changeImgToDefault() {
    let blueHoodie = document.querySelector('.art-3 figure img')
    blueHoodie.src = 'img/hoodie-ocean.png';
}

// Removes the green cart-element
function removeCart() {
    let cartText = document.createElement('a')
    cartText.setAttribute('class', 'cart-text-remove');
    let removeCart = document.querySelector('.cart-text-remove')
    removeCart.remove();
}

// Sets the figure-background to default
function defaultBackgroundFigure() {
    let products = document.querySelectorAll('article figure');
    for (let product of products) {
        product.style.backgroundColor = 'rgb(244, 182, 10)';
    };
}

// Buttons default color of black
function defaultProductBtns() {
    let productBtns = document.querySelectorAll('article button');
    for (let blackBtns of productBtns) {
        blackBtns.style.backgroundColor = '#000';
        blackBtns.innerText = 'Buy';
        blackBtns.style.textTransform = 'UPPERCASE'
        blackBtns.style.fontSize = '0.8333rem';
        blackBtns.style.transform = 'none'
    }
}

// Removes the product category-list
function hideProducts () {
    let ul = document.querySelector('ul')
    ul.remove();
    }
    
// Changes the red heart to the emptyHeart-img
function resetHeart() {
    let resetHeartButton = document.querySelector('.like-button');
    resetHeartButton.src = 'img/empty-heart.png';
}
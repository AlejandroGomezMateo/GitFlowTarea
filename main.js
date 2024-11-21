// Configurando la barra para añadir cantidad de productos.

let minusBtn = document.querySelector('.input_minus');
let plusBtn = document.querySelector('.input_plus');
let userInput = document.querySelector('.input_number');
let userInputNumber = 0;

plusBtn.addEventListener('click', ()=>{
    userInputNumber++;
    userInput.value = userInputNumber;
});

minusBtn.addEventListener('click', ()=>{
    userInputNumber--;
    if(userInputNumber < 0){
        userInputNumber = 0;
    }
    userInput.value = userInputNumber;
});

//Configurando el boton agregar y ponerlo en el carrito.

const addToCartBtn = document.querySelector('.details_button');
let cartNotification = document.querySelector('.header_cart--notification');
let lastValue = parseInt(cartNotification.innerText);

addToCartBtn.addEventListener('click', ()=>{

    lastValue = lastValue + userInputNumber;
    cartNotification.innerText = lastValue;
    cartNotification.style.display = 'block';
    drawProductInModal();
    
});


//Mostar el modal de imagenes cuando hago click en la imagen principal.

const imagesModal = document.querySelector('.modal-gallery_background');
const closeModalBtn = document.querySelector('.modal-gallery_close');

imageContainer.addEventListener('click', ()=>{
    imagesModal.style.display = 'grid';
});

closeModalBtn.addEventListener('click', ()=>{
    imagesModal.style.display = 'none';
});

// Cambiar las imagenes principales desde los thumnails

let thumbnails = document.querySelectorAll('.gallery_thumnail');
thumbnails = [...thumbnails]

thumbnails.forEach(thumbnail =>{
    thumbnail.addEventListener('click', event=>{
        console.log(event.target.id);
        imageContainer.style.backgroundImage = `url('../images/image-product-${event.target.id}.jpg')`;
    })
});

// Cambiar la imagenes principales desde los thumbnails en el Modal.

let modalthumbnails = document.querySelectorAll('.modal-gallery_thumnail');
const modalImageContainer = document.querySelector('.modal-gallery_image-container');
modalthumbnails = [...modalthumbnails]

modalthumbnails.forEach(modalthumbnails =>{
    modalthumbnails.addEventListener('click', event=>{
        console.log(event.target.id.slice(-1));
        modalImageContainer.style.backgroundImage = `url('../images/image-product-${event.target.id.slice(-1)}.jpg')`;
    });
});

// Cambiar la imagenes principal de modal desde flechas.

const previusModalBtn = document.querySelector('.modal-gallery_previus');
const nextModalBtn = document.querySelector('.modal-gallery_next');

nextModalBtn.addEventListener('click', ()=>{
    changeNextImage(modalImageContainer);
});

previusModalBtn.addEventListener('click', ()=>{
    changePreviusImage(modalImageContainer);
});

// Mostrar el navbalMovile cuando presiono el menu de hamburguesa.

let showMenu = document.querySelector('.modal_navbar_items')

showMenu.addEventListener('click', ()=>{
   showMenu.style.display = 'block'; 
});


//Funciones

 function drawProductInModal(){
    productContainer.innerHTML = `
    <div class="cart-modal_details-container">
        <img class="cart-modal_image" src="./images/image-product-1-thumbnail.jpg" alt="">
        <div>
            <p class="cart-modal_product">Autum Limited Edition...</p>
            <p class="cart-modal_price">$125 x3 <span>$375.00</span></p>
        </div>
        <img class="cart-modal_delete" src="./images/icon-delete.svg" alt="delete">
    </div>
        <button class="cart-modal_checkout">Checkout</button>`; 
    deleteProduct();
    let priceModal = document.querySelector('.cart-modal_price');
    priceModal.innerHTML = `$125 x${lastValue} <span>$${lastValue*125}</span>`;
}
 

function changeNextImage(imgContainer){
    if(imgIndex == 4){
        imgIndex = 1;
    }else{
        imgIndex++;
    }

    imgContainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`;
}

function changePreviusImage(imgContainer){
    if(imgIndex == 1){
        imgIndex = 4;
    }else{
        imgIndex--;
    }

    imgContainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`;

}
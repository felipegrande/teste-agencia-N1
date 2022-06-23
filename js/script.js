let  itemsBuy = document.querySelector("#purchase").textContent;
const header = document.querySelector('#header');
const buy = document.querySelector("#buy");
const modalBuySuccess = document.querySelector("#success");
const close = document.querySelector("#close");
const openMenu = document.querySelector("#hamburguer");
const menu = document.querySelector("#menu");
const closeMenu = document.querySelector("#closeMenu");
const contact  = document.querySelector('#contact');
const buySucess = document.querySelector('#buySucess');
const listContact  =  document.querySelector('#listContact');
let marioButton =  document.querySelectorAll('#marioButton')




close.addEventListener("click",buttonClose);


//openMenu.addEventListener('mouseover', openMenuhamburguerHover)

closeMenu.addEventListener("click", closeMenuHeader)

contact.addEventListener("click", Opencontact)



$(document).ready(function(){
    $('.showcase').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        mobileFirst: true,
        prevArrow:'<div class="showcase__arrow showcase__arrow--prev"><img src="./assets/icons/angle-left-solid-black.svg" alt=""></div>',
        nextArrow: '<div class="showcase__arrow showcase__arrow--next"><img src="./assets/icons/angle-right-solid-black.svg" alt=""></div>',
        responsive: [{
          breakpoint: 600,
              settings: "unslick" // destroys slick
      
          }]
    });

      $('.main-banner__items').slick({
        speed: 300,
        slidesToShow: 1,
        prevArrow:'<div class="main-banner__arrow main-banner__arrow--prev"><img src="./assets/icons/angle-left-solid.svg" alt=""></div>',
        nextArrow: '<div class="main-banner__arrow main-banner__arrow--next"><img src="./assets/icons/angle-right-solid.svg" alt=""></div>',
      })

      function changePaginationMainBanner() {
        var pos = $('.main-banner__item:not(.slick-cloned)').index($('.main-banner__item.slick-active'));
        var total =   $('.main-banner__item:not(.slick-cloned)').length
        $('.main-banner__pagination').text(`${pos + 1}/${total}`);
        $('.main-banner__controller-title').text($('.main-banner__item.slick-active .main-banner__content-text').text())
      }

      changePaginationMainBanner();

      $('.main-banner__arrow').click(function(){
        changePaginationMainBanner();
       
        
    })
  });


function openMenuhamburguer(){
    removeClass(menu, "none");
    removeClass(closeMenu, "none");
    addClass(openMenu, "none");
    addClass(header, "header-fixed")

};





function closeMenuHeader(){
    addClass(closeMenu, "none")
    addClass(menu, "none");
    removeClass(openMenu, "none")
    removeClass(header, "header-fixed")
}



function addItemBag(elem){
    console.log('click', elem)
    var addItem = itemsBuy++;
    console.log("clicado",itemsBuy, addItem);
    removeClass(modalBuySuccess, "none" );
    removeClass(buySucess, "none")
    addClass(listContact, "none")
    document.querySelector("#purchase").textContent = itemsBuy;
    elem.textContent = "COMPRADO!";
    elem.classList.add("card-content-button__bought")
    elem.disabled = true

}

function buttonClose(){
    addClass(modalBuySuccess, "none" )
    
};


function removeClass(variavel, classe ){
    variavel.classList.remove(classe)

}

function addClass(variavel, classe ){
    variavel.classList.add(classe)

}

function Opencontact(){
    removeClass(modalBuySuccess, "none" );
    addClass(buySucess, "none")
    removeClass(listContact, "none")

}








const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const modal = $('.modal');
const formLogin = $('#form-1');
const formRegister = $('#form-2');
const loginBtn = $('.login-btn');
const registerBtn = $('.register-btn');

const closeLoginBtn = formLogin.querySelector('.form-close');
const closeRegisterBtn = formRegister.querySelector('.form-close');
const formLoginContainer = formLogin.querySelector('.form-container');
const formRegisterContainer = formRegister.querySelector('.form-container');
const registerTab = formLogin.querySelectorAll('.form-header__item')[1];
const loginTab = formRegister.querySelectorAll('.form-header__item')[0];
const password = document.querySelector('#password');
const showPassword = formLogin.querySelector('.form-group__eye');
const showPasswordIcon = formLogin.querySelector('.form-group__eye-icon')
// Xử lý nhấn vào modal
modal.addEventListener('click', function() {
    modal.style.display = 'none';
    formLogin.style.display= 'none';
    formRegister.style.display = 'none';
})

// Xử lý nhấn vào nút Login
loginBtn.addEventListener('click', function() {
    modal.style.display = 'flex';
    formLogin.style.display= 'block';
})
// Xử lý nhấn vào nút Register
registerBtn.addEventListener('click', function() {
    modal.style.display = 'flex';
    formRegister.style.display= 'block';
})

// Xử lý nhấn vào nút Close
closeLoginBtn.addEventListener('click', function() {
    formLogin.style.display = 'none';
    modal.style.display = 'none';
})

// Xử lý nhấn vào nút Close
closeRegisterBtn.addEventListener('click', function() {
    formRegister.style.display = 'none';
    modal.style.display = 'none';
})


// Ngăn sự nổi bọt
formLogin.addEventListener('click', function(event) {
    event.stopPropagation();
})

formRegister.addEventListener('click', function(event) {
    event.stopPropagation();
})

registerTab.addEventListener('click', function() {
    formLogin.style.display = 'none';
    formRegister.style.display = 'block';
})

loginTab.addEventListener('click', function() {
    formRegister.style.display = 'none';
    formLogin.style.display = 'block';
})

showPassword.addEventListener('click', function() {
    if(password.type === 'password') {
        password.type = 'text';
        showPasswordIcon.src = './assets/img/show-password.png'; 
        showPasswordIcon.title = 'Hidden'; 
    }
    else {
        password.type = 'password';
        showPasswordIcon.src = './assets/img/hidden-password.png';
        showPasswordIcon.title = 'Show';  
    }
})






// LOADMORE technology


const loadMoreBtnTech = $('.container-technology__button');
const techItemsHidden = $$('.container-tech-card-item--hidden');

loadMoreBtnTech.onclick = function(event) {
    
    loadMoreBtnTech.innerText = 'Loading...';
    setTimeout(function() {
        loadMoreBtnTech.classList.add('hidden');
        for(const item of techItemsHidden) {
            item.classList.add('open');
        }
    }, 1500)
}

// Scroll fixed menu
const fixedMenu = $('#fixed-menu');
const scrollToTopBtn = $('.scroll-top-btn');
document.onscroll = function() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if(scrollTop > 780) {
        fixedMenu.classList.add('fixed-menu');
        scrollToTopBtn.classList.add('active');
    }
    else {
        fixedMenu.classList.remove('fixed-menu');
        scrollToTopBtn.classList.remove('active');
    }
}


// LOADMORE art
const loadMoreBtnArt = $('.container-art__button');
const artItemsHidden = $$('.container-art-item--hidden');

loadMoreBtnArt.onclick = function(event) {
    
    loadMoreBtnArt.innerText = 'Loading...';
    setTimeout(function() {
        loadMoreBtnArt.classList.add('hidden');
        for(const item of artItemsHidden) {
            item.classList.add('open');
        }
    }, 1500)
}

//LOADMORE trending

const loadMoreBtnTrending = $('.container-trending__button');
const trendingItemsHidden = $$('.container-trending-card-item--hidden');

loadMoreBtnTrending.onclick = function(event) {
    
    loadMoreBtnTrending.innerText = 'Loading...';
    setTimeout(function() {
        loadMoreBtnTrending.classList.add('hidden');
        for(const item of trendingItemsHidden) {
            item.classList.add('open');
        }
    }, 1500)
}

// Show/Hidden Input Search

const headerButtonSearch = $('.header__button-search');
const headerSearchForm = $('.header__button-form');

headerButtonSearch.onclick = function(event) {
    event.preventDefault();
    headerSearchForm.classList.toggle('active');
}



// Show/Hiden mobile / tablet menu

const mobileTabletMenuBtn = $('.mobile-tablet-menu');
const mobileTabletMenuList = $('.header-mobile-tablet-menu__list');

mobileTabletMenuBtn.onclick = function() {
    mobileTabletMenuList.classList.toggle('active');
}


const mobileTabletListItems = $$('.header-mobile-tablet-menu__list-item');
const mobileTabletSubLists = $$('.header-mobile-tablet-sub-menu__list');
const lifeStyleMenuMobileTablet = $('.lifestyle-menu-mobile-tablet');
const mobiletTabletListItemArrows = $$('.header-mobile-tablet-menu__list-item-icon');

mobileTabletListItems.forEach(function(mobileTabletListItem,index) {
    const mobileTabletSubList = mobileTabletSubLists[index];
    const mobiletTabletListItemArrow = mobiletTabletListItemArrows[index];
    mobileTabletListItem.onclick = function(e) {
        e.preventDefault();
        mobileTabletSubList.classList.toggle('active');
        mobiletTabletListItemArrow.classList.toggle('active');
    }
    
})

const mobileTabletSubItems = $$('.header-mobile-tablet-sub-menu__item');
const mobileTabletSecondSubLists = $$('.header-mobile-tablet-second-sub-menu__list');
const mobileTabletSubArrows = $$('.header-mobile-tablet-sub-menu__list-item-icon');
console.log(mobileTabletSubArrows);
mobileTabletSubItems.forEach(function(mobileTabletSubItem,index) {
    const mobileTabletSecondSubList = mobileTabletSecondSubLists[index];
    const mobileTabletSubArrow = mobileTabletSubArrows[index];
    mobileTabletSubItem.onclick = function(e) {
        e.preventDefault();
        mobileTabletSecondSubList.classList.toggle('active');
        mobileTabletSubArrow.classList.toggle('active');
    }
})









   
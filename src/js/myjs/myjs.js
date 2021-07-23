const swiper = new Swiper(".slide_index",{
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  loop: true,
});

swiper.on('slideChange', function () {
  console.log('slide changed');
  console.log('.swiper-slide-active .text_block .text_block3');
  document.querySelector('.swiper-slide-next .text_block .text_block3').classList.add('animate__animated', 'animate__fadeInLeft');
  document.querySelector('.swiper-slide-prev .text_block .text_block3').classList.add('animate__animated', 'animate__fadeInLeft');
  document.querySelector('.swiper-slide-active .text_block .text_block3').classList.remove('animate__animated', 'animate__fadeInLeft');
});

const swiper2 = new Swiper(".slider_posts",{
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".posts-button-next",
    prevEl: ".posts-button-prev",
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  loop: true,
});

// tabs
let tab = function () {
  let tabNav = document.querySelectorAll('.tabs-nav__item'),
      tabContent = document.querySelectorAll('.tab'),
      tabName;

  tabNav.forEach(item => {
      item.addEventListener('click', selectTabNav)
  });

  function selectTabNav() {
      tabNav.forEach(item => {
          item.classList.remove('is-active');
      });
      this.classList.add('is-active');
      tabName = this.getAttribute('data-tab-name');
      selectTabContent(tabName);
  }

  function selectTabContent(tabName) {
      tabContent.forEach(item => {
          item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
      })
  }

};

tab();

// scroll menu
const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
  if (pageYOffset > 0) {
    header.style.paddingTop = '5px';
    header.style.paddingBottom = '5px';
    header.style.backgroundImage = 'linear-gradient(90deg, #211b19 0%, #4e3427 100%)';
  } else {
    header.style.paddingTop = '36px';
    header.style.paddingBottom = '0';
    header.style.backgroundImage = 'none';
  }
});

// мобильное меню
const burger = document.querySelector('.burger');
const headerMenu = document.querySelector('nav');

burger.onclick = function() {
  burger.classList.toggle("burger2");
  headerMenu.classList.toggle("header-menu_open");
}

// video
let overlayVideo = document.querySelector('.overlay');
let playPresentation = document.querySelector('.icon-play_wrap');

playPresentation.addEventListener('click', function() {
  overlayVideo.style.display = 'flex';
  overlayVideo.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/Wkk4JgWhWpU?autoplay=1" title="YouTube video player" frameborder="0" allow="autoplay" allowfullscreen></iframe>`;
});

overlayVideo.addEventListener('click', function() {
  this.style.display = 'none';
  this.innerHTML = '';
});


// chrome 100vh fix
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
(function init100vh(){

  function setHeight() {
    console.log(vh);
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  setHeight();
  window.addEventListener('resize', setHeight);
})();
'use strict';

//DARK MODE
const html = document.querySelector('html');

const darkBtn = document.querySelector('#dark-mode');
const lightBtn = document.querySelector('#light-mode');

lightBtn.addEventListener('click', () => {
  lightBtn.classList.add('hidden');
  darkBtn.classList.remove('hidden');

  html.classList.add('dark');
});

darkBtn.addEventListener('click', () => {
  lightBtn.classList.remove('hidden');
  darkBtn.classList.add('hidden');

  html.classList.remove('dark');
});

//HANDLING THE GRIDS STATES- OPEN OR CLOSE

const blogHeader1 = document.querySelector('#blog-header1');
const blogHeader2 = document.querySelector('#blog-header2');

const grid1 = document.querySelector('#grid-1');
const grid2 = document.querySelector('#grid-2');

const blogIcon1 = document.querySelector('.icon1');
const blogIcon2 = document.querySelector('.icon2');

blogHeader1.addEventListener('click', () => {
  if (window.innerWidth < 640) {
    blogIcon1.classList.toggle('rotate-90');

    grid1.classList.toggle('hidden');
  } else {
    grid1.classList.remove('hidden');
  }
});

blogHeader2.addEventListener('click', () => {
  if (window.innerWidth < 640) {
    blogIcon2.classList.toggle('rotate-90');

    grid2.classList.toggle('hidden');
  } else {
    grid2.classList.remove('hidden');
  }
});

window.addEventListener('orientationchange', () => {
  grid1.classList.remove('hidden');
  grid2.classList.remove('hidden');

  if (!blogIcon1.classList.contains('rotate-90')) {
    blogIcon1.classList.add('rotate-90');
  }

  if (!blogIcon2.classList.contains('rotate-90')) {
    blogIcon2.classList.add('rotate-90');
  }
});

////////////////////////////////////////////////////////////

//MENU
const hamburgerMenu = document.querySelector('#hamburger-menu');

const mobileMenu = document.querySelector('#mobile-menu');
const mobileMenuLinks = document.querySelectorAll('#mobile-menu a');

const burgerBarOne = document.querySelector('#bar-one');
const burgerBarTwo = document.querySelector('#bar-two');

const taskMenuLinks = document.querySelectorAll('.menu-links a');
// console.log(taskMenuLinks);
//CHOOSING WHICH LINK IS ACTIVE
taskMenuLinks.forEach((link, index) => {
  link.addEventListener('click', () => {
    for (let i = 0; i < taskMenuLinks.length; i++) {
      taskMenuLinks[i].classList.remove('border-b-2');
      taskMenuLinks[i].classList.remove('text-green');
    }

    taskMenuLinks[index].classList.add('border-b-2', 'text-green');
  });
});

//FUNCTION TO TRANSFORM THE MENU ICON
const transformMenuIcon = () => {
  burgerBarOne.classList.toggle('rotate-45');
  burgerBarOne.classList.toggle('origin-center');
  burgerBarOne.classList.toggle('translate-y-[5px]');
  burgerBarTwo.classList.toggle('-rotate-45');
  burgerBarTwo.classList.toggle('origin-center');
  burgerBarTwo.classList.toggle('-translate-y-[5px]');
};

hamburgerMenu.addEventListener('click', () => {
  //show menu
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('flex');

  //rotate bars
  transformMenuIcon();
});

mobileMenu.addEventListener('click', () => {
  if (!mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('flex');
  }

  transformMenuIcon();
});

mobileMenuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (!mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('flex');
    }
  });
});

/* //close the menu on scroll
window.addEventListener('scroll', () => {
  // console.log(mobileMenu.offsetHeight);

  if (window.scrollY > mobileMenu.offsetHeight) {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('flex');

    burgerBarOne.classList.remove('rotate-45');
    burgerBarOne.classList.remove('origin-center');
    burgerBarOne.classList.remove('translate-y-[5.85px]');
    burgerBarTwo.classList.remove('-rotate-45');
    burgerBarTwo.classList.remove('origin-center');
    burgerBarTwo.classList.remove('-translate-y-[5.85px]');
  }
}); */

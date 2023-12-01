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

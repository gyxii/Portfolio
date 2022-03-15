'use strict'

// transparent => color navBar top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

//navbar menu scrolling 

const navbarMenu = document.querySelector('.navbar__menu');

navbarMenu.addEventListener('click', (event) => {

const target = event.target;
const link = target.dataset.link;
if (link == null) {
  return;
}
navbarMenu.classList.remove('open');

console.log(event.target.dataset.link);
const scrollTo = document.querySelector(link);
scrollTo.scrollIntoView({behavior:'smooth'});
});

//contact me button
const homeConractBtn = document.querySelector('.home__contact');
homeConractBtn.addEventListener('click' , () => {
  const scrollTo = document.querySelector('#contact');
  scrollTo.scrollIntoView({behavior:'smooth'});
});


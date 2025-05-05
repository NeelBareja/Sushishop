// import images as relative image path won't work with vite/vercel.
import check from '../assets/check.svg'
import star from '../assets/star.svg'
import sushi12 from '../assets/sushi-12.png'
import sushi11 from '../assets/sushi-11.png'
import sushi10 from '../assets/sushi-10.png'

// import AOS from "aos";
// import "aos/dist/aos.css";

// // init AOS animation
// AOS.init({
//     duration: 1000,
//     offset: 100,
// });

const trendingSushis = [
    'Make Sushi',
    'Nigiri Sushi',
    'Oshizushi',
    'Temaki Sushi',
    'Uramaki Sushi',
    'Inari Sushi'
];

const trendingDrinks = [
    "Oruncha",
    "Ofukucha",
    "Sakura Tea",
    "Kombu-cha",
    "Aojiru",
    "Mugicha",
]

const cards = [
    {
        imgSrc: sushi12,
        alt: "sushi-12",
        title: "Chezu Sushi",
        rating: "4.8",
        price: "$21.00"
    },
    {
        imgSrc: sushi11,
        alt: "sushi-11",
        title: "Originale Sushi",
        rating: "4.8",
        price: "$21.00",
        active: true
    },
    {
        imgSrc: sushi10,
        alt: "sushi-10",
        title: "Ramen Legendo",
        rating: "4.8",
        price: "$21.00"
    }
];

// Theme toggle functionality
const themeToggle = document.querySelector('.theme-toggle__button');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Check for saved theme preference or use system preference
const currentTheme = localStorage.getItem('theme') || 
  (prefersDarkScheme.matches ? 'dark' : 'light');

// Apply the theme
document.documentElement.setAttribute('data-theme', currentTheme);

// Theme toggle click handler
themeToggle.addEventListener('click', () => {
  const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' 
    ? 'light' 
    : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  // Add animation class
  themeToggle.classList.add('theme-toggle__button--animate');
  setTimeout(() => {
    themeToggle.classList.remove('theme-toggle__button--animate');
  }, 300);
});

// Listen for system theme changes
prefersDarkScheme.addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    const newTheme = e.matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
  }
});

// Mobile menu functionality
const mobileMenu = document.querySelector('.header__menu-mobile');
const menuItems = document.querySelector('.header__menu');
const menuIcon = mobileMenu.querySelector('img');

// Create overlay element
const overlay = document.createElement('div');
overlay.className = 'menu-overlay';
document.body.appendChild(overlay);

let isMenuOpen = false;

mobileMenu.addEventListener('click', () => {
  isMenuOpen = !isMenuOpen;
  
  if (isMenuOpen) {
    menuItems.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    menuIcon.style.display = 'none';
    mobileMenu.innerHTML = '<span class="close-icon">×</span>';
  } else {
    menuItems.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    menuIcon.style.display = 'block';
    mobileMenu.innerHTML = '<img src="assets/menu.svg" alt="menu" />';
  }
});

// Close menu when clicking overlay
overlay.addEventListener('click', () => {
  isMenuOpen = false;
  menuItems.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
  menuIcon.style.display = 'block';
  mobileMenu.innerHTML = '<img src="assets/menu.svg" alt="menu" />';
});

// Close menu when clicking a menu item
menuItems.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    isMenuOpen = false;
    menuItems.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    menuIcon.style.display = 'block';
    mobileMenu.innerHTML = '<img src="assets/menu.svg" alt="menu" />';
  });
});
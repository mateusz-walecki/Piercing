import '../scss/main.scss';
import Glide from '@glidejs/glide'
import { _ } from 'core-js';

$(document).ready(function(){
  var sliders = document.querySelectorAll('.glide');

    for (var i = 0; i < sliders.length; i++) {
      var glide = new Glide(sliders[i], {
        gap: 15,
      });
      
      glide.mount();
    }
})

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */
const hamburger = document.querySelector('.hamburger--js');
hamburger.addEventListener('click', () => {
  const nav = document.querySelector('.navigation--js');
  nav.classList.toggle('navigation--open');
})



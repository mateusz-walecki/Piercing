import '../scss/main.scss';
import Glide from '@glidejs/glide'
import { _ } from 'core-js';

// photo slides
$(document).ready(function(){
  var sliders = document.querySelectorAll('.glide');

    for (var i = 0; i < sliders.length; i++) {
      var glide = new Glide(sliders[i], {
        gap: 15,
      });
      
      glide.mount();
    }
})

// Hamburger menu

const hamburger = document.querySelector('.hamburger--js');
hamburger.addEventListener('click', () => {
  const nav = document.querySelector('.navigation--js');
  nav.classList.toggle('navigation--open');
})



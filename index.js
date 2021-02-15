
let nav = document.querySelector('.navbar');
let bar = document.querySelector('.bars');
let ul = document.querySelector('.menu');
console.log(bar);

bar.addEventListener('click', ()=>{
nav.style.backgroundColor = 'none';
 nav.classList.toggle('open__menu');
ul.classList.toggle('open__menu');

if (nav.backgroundColor = 'none') {
  nav.toggle = nav.style.backgroundColor = '#000';
    nav.style.backgroundColor = 'none';
}else{
    nav.style.backgroundColor = '';
}


console.log(ul, nav);
});

// creat popup
let ourGallery = document.querySelectorAll('.gallery__images');
ourGallery.forEach(img =>{
 img.addEventListener('onmouseover', ()=>{
  
 });
});
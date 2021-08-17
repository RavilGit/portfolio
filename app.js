let flashcard = document.getElementById('flashcard');
let piano = document.getElementById('piano');
let modal = document.querySelector('.wrap');
let closeBTN = document.querySelector('.window__btn');

let title = document.querySelector('.window__title');
let link = document.querySelector('.window__git > a');
let description = document.querySelector('.window__desc');

const burger = document.querySelector('.hamburger');
let nav = document.querySelector('.header > nav');

burger.addEventListener('click', function (){
  burger.classList.toggle('active');
  nav.classList.toggle('open');
});

let worksArray = [
  {
    title: 'flashcards',
    link: 'flashcards.git',
    description: 'Flashcards is the best project to begin your front-end career. It makes your more familiar with html, css and vanilla JS'
  },
  {
    title: 'piano',
    link: 'todolist.git',
    description: 'ToDo list was my lovely project on JetBrains Academy and I am very happy to practice it'
  }
]

function fillWindow(num) {
  title.innerHTML = worksArray[num].title;
  link.setAttribute('href',`https://github.com/RavilGit/${worksArray[num].link}`);
  description.innerHTML = worksArray[num].description;
  link.innerHTML = worksArray[num].title;

  document.body.classList.add('no-scroll');
  modal.classList.add('visible');
}

flashcard.addEventListener('click', function (){
  fillWindow(0);
});

piano.addEventListener('click', function (){
  fillWindow(1);
});

closeBTN.addEventListener('click', function (){
  title.innerHTML = '';
  link.setAttribute('href', '');
  description.innerHTML = '';

  document.body.classList.remove('no-scroll');
  modal.classList.remove('visible');
});



const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute('href').substr(1);

    document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
  });
}
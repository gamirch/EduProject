document.addEventListener('DOMContentLoaded', () => {
  // Задание 1.1
  const header = document.querySelector('.header');

  if (header) {
    // адаптация
    let scrollpos = window.scrollY

    const scrollChange = header.clientHeight;

    const add_class_on_scroll = () => header.classList.add('header-bg')
    const remove_class_on_scroll = () => header.classList.remove('header-bg')

    window.addEventListener('scroll', function () {
      scrollpos = window.scrollY;

      if (scrollpos >= scrollChange) { add_class_on_scroll() }
      else { remove_class_on_scroll() }
    })

    // вариант
    /* const scrollChange = header.clientHeight;
    window.addEventListener('scroll', () => {
      const scrollYWindow = Math.round(window.scrollY);
      if (scrollYWindow > headerScrollLimit) {
        headerTopBlock.classList.add('header__bg');
      } else {
        headerTopBlock.classList.remove('header__bg');
      }
    }); */
  }

  // Задание 1.2 адаптация


  const btnLike = document.querySelector('.button_like');
  const outputLike = document.querySelector('.recipe-day__container-like-text');

  if (btnLike && outputLike) {
    const handleClickLike = () => {
      let countLike = Number(outputLike.textContent);
      if (btnLike.classList.contains('isLike')) {
        outputLike.textContent = countLike - 1;
      } else {
        outputLike.textContent = countLike + 1;
      }

      btnLike.classList.toggle('isLike');
    }

    btnLike.addEventListener('click', handleClickLike);
  }

})

const authHeaderButtonClick = () => {
  if (login.classList.contains('hide')) {
    
  }
}

const modal = document.querySelector('.modal');
const addRecipeDialog = document.querySelector('.recipe-add-dialog');
const registration = document.querySelector('.registration');
const login = document.querySelector('.login');
login.addEventListener('click', authHeaderButtonClick);

const authHeaderButton = document.querySelector('.header__authorization-button"');
const authButton = document.querySelector('.recipe__button-authorization');
const addRecipeButton = document.querySelector('.recipe__button-add');

const exitButton = document.querySelector('.recipe-add-dialog__button_exit');
const loginFormButton = document.querySelector('.recipe-add-dialog__button-login');
const authFormButton = document.querySelector('.authorization__form-button-login');

const exitRegButton = document.querySelector('.registration__button_exit');
const regButton = document.querySelector('.registration__button-regstration');
const cancelFormButton = document.querySelector('.registration__button-cancel');

const exitLoginButton = document.querySelector('.login__button_exit');
const loginButton = document.querySelector('.login__button-login');
const cancelButton = document.querySelector('.login__button-cancel');

const handleClickLike = () => {
  let countLike = Number(outputLike.textContent);
  if (btnLike.classList.contains('isLike')) {
    outputLike.textContent = countLike - 1;
  } else {
    outputLike.textContent = countLike + 1;
  }

  btnLike.classList.toggle('isLike');
}

btnLike.addEventListener('click', handleClickLike);

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  // let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight = 
  document.documentElement.scrollTop - 
  document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);

  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }

  scrollProgress.addEventListener('click', function () {
    window.scrollTo(
      {
        top: 0,
        behavior: 'smooth'
      });
  });
}

window.onscroll = calcScrollValue
window.onload = calcScrollValue
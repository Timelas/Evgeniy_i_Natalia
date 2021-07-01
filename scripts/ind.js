// const form = document.querySelector('.form__container');
// const formInput = document.querySelector('.form__input');
// const button= form.querySelector('.form__button');
// inactiveButtonClass: 'form__button_disabled'



const button = document.querySelector('.form__button');
const form = document.forms.form;
const input = form.elements.name;
const alcohol = form.elements.alcohol;
const hot_dish = form.elements.hot_dish;
const garnish = form.elements.garnish;
const presence = form.elements.presence;

function alcoholValidity() {
  const alcoholArray = Array.from(alcohol);
  alcoholArray.forEach(item => {
    if (item.checked) {
      button.classList.remove('form__button_disabled');
      button.disabled = false;
    }
    else {
      button.classList.add('form__button_disabled');
      button.disabled = true;
    }
  })
}


alcoholValidity()


// button.addEventListener('click', function (evt) {
//   evt.preventDefault();
//   console.log(input.value);
//   console.log(wine.checked);
//   console.log(champagne.checked);
// });

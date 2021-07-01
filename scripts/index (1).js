const formValid = {
  alcoholValidity : false,
  hotDishesValidity: false,
  garnirValidity: false,
  presenceValidity: false
}

const form = document.forms.form
const formInput = form.elements.name
const alcohol = form.elements.alcohol
const hotDishes = form.elements.hot_dish
const garnir = form.elements.garnish
const presence = form.elements.presence
const button = document.querySelector('.form__button')

function isFormValid() {
  const formValidArray = Object.values(formValid)
  const result = formValidArray.every(e => e)
  if (result) {
    button.classList.remove('form__button_disabled')
    button.removeAttribute('disabled')
  } else {
    button.classList.add('form__button_disabled')
    button.setAttribute('disabled', 'true')
  }
}

alcohol.forEach(item => {
  item.addEventListener('change', () => {
    alcoholValidity()
  })
})

hotDishes.forEach(item => {
  item.addEventListener('change', () => {
    isRadioChecked(hotDishes, 'hotDishesValidity')
  })
})

garnir.forEach(item => {
  item.addEventListener('change', () => {
    isRadioChecked(garnir, 'garnirValidity')
  })
})

presence.forEach(item => {
  item.addEventListener('change', () => {
    isRadioChecked(presence, 'presenceValidity')
  })
})

 function alcoholValidity() {
  formValid.alcoholValidity = Array.from(alcohol).some(item => item.checked)
  isFormValid()
}

function isRadioChecked(radios, name) {
  formValid[name] = Array.from(radios).some(item => item.checked)
  isFormValid()
  console.log(formValid)
}

isFormValid()





'use strict';

(function() {
  const form = document.querySelector(`.form`);

  const onInput = function(evt) {
    if (evt.target.getAttribute(`type`) === `text` || evt.target.getAttribute(`type`) === `email` || evt.target.getAttribute(`type`) === `password` || evt.target.tagName === `TEXTAREA`) {
      form.querySelector(`label[for=${evt.target.getAttribute(`id`)}]`).style= `font-size: 0; z-index: -1;`;
    }
  }

  const onBlur = function(evt) {
    if (evt.target.value === ``) {
      form.querySelector(`label[for=${evt.target.getAttribute(`id`)}]`).style = `font-size: 20px`;
    }
  }

  form.addEventListener(`input`, function(evt) {
    onInput(evt);
    evt.target.addEventListener(`blur`, onBlur);
  });

  //Валидация формы
  const input = {
    username: form.querySelector(`input[name="username"]`),
    pass1: form.querySelector(`input[name="userpass-1"]`),
    pass2: form.querySelector(`input[name="userpass-2"]`),
    sex: form.querySelector(`input[name="sex"]`),
  }

  input.username.addEventListener(`input`, function() {
    if (input.username.validity.tooShort) {
      input.username.setCustomValidity(`Вы ввели слишком короткое имя пользователя. Оно должно быть не короче 2 символов`);
    } else if (input.username.validity.valueMissing) {
      input.username.setCustomValidity(`Введите имя пользователя`);
    } else {
      input.username.setCustomValidity('');
    }
  });

  input.pass2.addEventListener(`input`, function() {
    if (input.pass1.value !== input.pass2.value) {
      input.pass2.setCustomValidity(`Пароли должны совпадать`);
    } else {
      input.pass2.setCustomValidity('');
    }
  });

  input.sex.addEventListener(`change`, function() {
    if (input.sex.validity.valueMissing) {
      input.sex.setCustomValidity(`Выберите пол`);
    } else {
      input.sex.setCustomValidity('');
    }
  });

})();

`use strict`;

(function() {
  const form = document.querySelector(`.form`);
  const login = form.querySelector(`input[type="text"]`);
  const loginLabel = form.querySelector(`label[for="username-field"]`);
  const password = form.querySelector(`input[type="password"]`);
  const passwordLabel = form.querySelector(`label[for="userpass-field"]`);

  //Исчезновение подписи при вводе текста в поле
  const changeSize = function(input, label) {
    if (input.value !== ``) {
      label.style.fontSize = `0`;
    } else {
      label.style.fontSize = `20px`;
    }
  }

  login.addEventListener(`blur`, function() {
    changeSize(login, loginLabel);
  });

  password.addEventListener(`blur`, function() {
    changeSize(password, passwordLabel);
  });

  login.addEventListener(`focus`, function() {
      loginLabel.style.fontSize = `0`;
  });

  password.addEventListener(`focus`, function() {
      passwordLabel.style.fontSize = `0`;
  });

  //Валидация формы
  login.addEventListener(`invalid`, function(evt) {
    if (login.validity.tooShort) {
      login.setCustomValidity(`Вы ввели слишком короткое значение. Оно содержать минимум 2 символа.`);
    } else if (login.validity.valueMissing) {
      login.setCustomValidity(`Введите имя пользователя.`);
    }
  });
})();

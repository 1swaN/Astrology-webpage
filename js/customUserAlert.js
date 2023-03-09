const showUserAlertBtn = document.querySelector('.form__btn');
const Alert = document.querySelector('.alert');
const closeAlert = document.querySelector('.close');
const overlay = document.querySelector('.modal-overlay')
const wholeModal = document.querySelector('.modal')

function showAlert() {
  Alert.classList.add('showAlert');
  setTimeout(function() {
    Alert.classList.remove('showAlert');
  }, 3000);
}

function validate() {
  let userName = document.forms["modal-form"]["name"].value;
  let userMail = document.forms["modal-form"]["email"].value;
  let userDate = document.forms["modal-form"]["datetime"].value;
  let userSurName = document.forms["modal-form"]["surname"].value;
  let at = userMail.indexOf("@");
  let dot = userMail.indexOf(".");
  // Если поля не заполнены или электронная почта некорректна, выведите сообщение об ошибке и предотвратите отправку формы
  if ((!userName.length || !userMail.length || !userDate.length || !userSurName.length )&&( at < 1 || dot < 1)){
        return false;
    }else{
    showAlert();
  }
}


showUserAlertBtn.addEventListener('click', validate);

overlay.addEventListener('click', () => {
  wholeModal.classList.remove('open')
  wholeModal.classList.add('hide')
})
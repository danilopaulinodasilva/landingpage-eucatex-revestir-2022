window.loginInput = loginInput;
window.loginSubmit = loginSubmit;

const loginInput = document.getElementById('loginInput');
const loginSubmit = document.getElementById('acessarCadastroPlaneta');

loginSubmit.addEventListener('click', () => {
  // eslint-disable-next-line no-undef

  if(errosLogin.length === 0) {
    submitLoginForm(loginInput.value);
  }

});

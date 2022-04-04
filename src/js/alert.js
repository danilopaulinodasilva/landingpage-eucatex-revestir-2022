window.inputAviseNome = inputAviseNome;
window.inputAviseEmail = inputAviseEmail;
window.inputHiddenAvise = inputHiddenAvise;
window.recebaLembrete = recebaLembrete;

const inputAviseNome = document.getElementById('inputAviseNome');
const inputAviseEmail = document.getElementById('inputAviseEmail');
const inputHiddenAvise = document.getElementById('inputHiddenAvise');
const recebaLembrete = document.getElementById('recebaLembrete');

recebaLembrete.addEventListener('click', () => {
  // eslint-disable-next-line no-undef
  if(errosAvise.length === 0) {
    submitAlertForm(inputAviseNome.value, inputAviseEmail.value, inputHiddenAvise.value);

  }
  
});

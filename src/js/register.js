window.nameInput = nameInput;
window.emailInput = emailInput;
window.professionSelect = professionSelect;
window.stateInput = stateInput;
window.cityInput = cityInput;

window.registerSubmit = registerSubmit;

const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const professionSelect = document.getElementById('professionSelect');
const stateInput = document.getElementById('stateInput');
const cityInput = document.getElementById('cityInput');

const registerSubmit = document.getElementById('enviarCadastroPlaneta');

registerSubmit.addEventListener('click', () => {
  // eslint-disable-next-line no-undef
  validaNome($("#nameInput"));
  validaEmail($("#emailInput"));

  if(verificaEmail($("#emailInput"))) {
    removeErro(errosLogin,"login_invalido");
    $("#emailInput").removeClass("is-invalid");
    $("#emailInput").addClass("is-valid");
    
  } else {
    adicionaErro(errosLogin,"login_invalido");
    $("#emailInput").removeClass("is-valid");
    $("#emailInput").addClass("is-invalid");
    return false;
    
  }

  validaProfissao($("#professionSelect"));
  validaEstado($("#stateInput"));
  validaCidade($("#cityInput"));

  if(errosCadastro.length === 0) {
    submitFirstForm(
      nameInput.value,
      emailInput.value,
      professionSelect.value,
      stateInput.value,
      cityInput.value
    );

  }

});

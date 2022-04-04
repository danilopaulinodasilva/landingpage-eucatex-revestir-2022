window.submitLoginForm = submitLoginForm;
window.submitFirstForm = submitFirstForm;
window.submitAlertForm = submitAlertForm;
window.campoVazio = campoVazio;
window.regexCampo = regexCampo;
window.verificaEmail = verificaEmail;
window.adicionaErro = adicionaErro;
window.removeErro = removeErro;

window.validaNome = validaNome;
window.validaEmail = validaEmail;
window.validaProfissao = validaProfissao;
window.validaEstado = validaEstado;
window.validaCidade = validaCidade;

function submitLoginForm(login) {
  const data = `login=${login}`;

  const xhr = new XMLHttpRequest();
  // xhr.withCredentials = true;

  xhr.addEventListener('readystatechange', function() {
    if (this.readyState === this.DONE) {
      const dados = JSON.parse(this.responseText);

      if(dados.resultado == 'EMAIL_EM_BRANCO') {
        validaEmail($("#loginInput"));
        return false;
        
      }

      if (dados.resultado == 'PODE_LOGAR') {
        alert('E-mail encontrado, aguarde que você será redirecionado');
        window.location.href = dados.url;

      } else {
        alert('E-mail não encontrado, por favor faça o cadastro');
        $("#loginInput").val("");
        $("#loginInput").removeClass("is-valid");
        $("#loginInput").removeClass("is-invalid");

      }

    }

  });

  xhr.open(
    'POST',
    'https://fabrica.com.br/clientes/eucatex/planeta/scripts/entrar.php'
  );
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send(data);
}

function submitFirstForm(name, email, profession, state, city) {
  const browser = localStorage.getItem('browser');
  const data = `name=${name}&email=${email}&profession=${profession}&state=${state}&city=${city}&mobile=${browser}`;

  const xhr = new XMLHttpRequest();
  // xhr.withCredentials = true;

  xhr.addEventListener('readystatechange', function() {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);

      const dados = JSON.parse(this.responseText);

      if (dados.resultado == 'JA_CADASTRADO') {
        alert('E-mail encontrado! Aguarde, você será redirecionado');
        window.location.href = dados.url;
      }
      if (dados.resultado == 'SUCESSO') {
        window.location.href = dados.url;
      } else {
        alert('Algo deu errado, por favor refaça o cadastro');
      }
    }
  });

  xhr.open(
    'POST',
    'https://fabrica.com.br/clientes/eucatex/planeta/scripts/cadastro.php'
  );
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send(data);
  
}

function submitAlertForm(name,email,date) {
  const browser = localStorage.getItem('browser');
  const data = `name=${name}&email=${email}&mobile=${browser}&date=${date}`;

  const xhr = new XMLHttpRequest();
  // xhr.withCredentials = true;

  xhr.addEventListener('readystatechange', function() {
    if (this.readyState === this.DONE) {

      const dados = JSON.parse(this.responseText);

      if (dados.resultado == 'JA_CADASTRADO') {
        alert('Você já se cadastrou para essa agenda!');

        $("#modalAvise .btn-close").click();
        $("#inputAviseNome").val("");
        $("#inputAviseEmail").val("");
        $("#inputHiddenAvise").val("");
        
      }

      if (dados.resultado == 'SALVO_NA_AGENDA') {
        alert('Sucesso! Em breve você receberá um e-mail com mais informações.');

        $("#modalAvise .btn-close").click();
        $("#inputAviseNome").val("");
        $("#inputAviseEmail").val("");
        $("#inputHiddenAvise").val("");

      } else {
        alert('Algo deu errado, por favor refaça o cadastro');

        $("#modalAvise .btn-close").click();
        $("#inputAviseNome").val("");
        $("#inputAviseEmail").val("");
        $("#inputHiddenAvise").val("");

      }

    }

  });

  xhr.open(
    'POST',
    `https://fabrica.com.br/clientes/eucatex/planeta/scripts/agenda.php`
  );
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send(data);

}

function campoVazio(campo) {
  if (campo.val() === "" && campo.val().length === 0 || campo.val() == null)  {
      return true;
      
  } else {
      return false;
      
  } 
}

function adicionaErro(array, stringError) {
  array.push(stringError);
  
}

function removeErro(array, stringError) {
  index = array.indexOf(stringError);
  
  while (index != -1) {
      array.splice(index, 1);
      index = array.indexOf(stringError);

  };
  
}

function verificaEmail(campo) {
  if (campoVazio(campo)) {
    return false;

  } else if (regexCampo(campo, /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi)) {
    return false;

  } else {
    return true;

  }

}

function regexCampo(valor, regex){
  if (!valor.val().match(regex)) {
      return true;
  } else {
      return false;
  }
}

function validaNome(campo) {
  if (campoVazio(campo)) {
    adicionaErro(errosCadastro,"nome_invalido");
    campo.removeClass("is-valid");
    campo.addClass("is-invalid");

  } else {
    removeErro(errosCadastro,"nome_invalido");
    campo.removeClass("is-invalid");
    campo.addClass("is-valid");

  }
  
}

function validaEmail(campo) {
  if (campoVazio(campo)) {
    adicionaErro(errosCadastro,"email_invalido");
    campo.removeClass("is-valid");
    campo.addClass("is-invalid");

  } else {
    removeErro(errosCadastro,"email_invalido");
    campo.removeClass("is-invalid");
    campo.addClass("is-valid");

  }
  
}

function validaProfissao(campo) {
  if (campoVazio(campo)) {
    adicionaErro(errosCadastro,"profissao_invalido");
    campo.removeClass("is-valid");
    campo.addClass("is-invalid");

  } else {
    removeErro(errosCadastro,"profissao_invalido");
    campo.removeClass("is-invalid");
    campo.addClass("is-valid");

  }
  
}

function validaEstado(campo) {
  if (campoVazio(campo)) {
    adicionaErro(errosCadastro,"estado_invalido");
    campo.removeClass("is-valid");
    campo.addClass("is-invalid");

  } else {
    removeErro(errosCadastro,"estado_invalido");
    campo.removeClass("is-invalid");
    campo.addClass("is-valid");

  }
  
}

function validaCidade(campo) {
  if (campoVazio(campo)) {
    adicionaErro(errosCadastro,"cidade_invalido");
    campo.removeClass("is-valid");
    campo.addClass("is-invalid");

  } else {
    removeErro(errosCadastro,"cidade_invalido");
    campo.removeClass("is-invalid");
    campo.addClass("is-valid");

  }
  
}

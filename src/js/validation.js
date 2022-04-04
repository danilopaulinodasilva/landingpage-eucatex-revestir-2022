window.errosCadastro = [];
window.errosLogin = [];
window.errosAvise = [];

// login

$("#loginInput").blur(function() {
  if(verificaEmail($("#loginInput"))) {
    removeErro(errosLogin,"login_invalido");
    $("#loginInput").removeClass("is-invalid");
    $("#loginInput").addClass("is-valid");
    
  } else {
    adicionaErro(errosLogin,"login_invalido");
    $("#loginInput").removeClass("is-valid");
    $("#loginInput").addClass("is-invalid");
    
  }
  
});

// cadastro

$("#nameInput").blur(function() {
  validaNome($("#nameInput"));
  
});

$("#emailInput").blur(function() {
  if(verificaEmail($("#emailInput"))) {
    removeErro(errosCadastro,"email_invalido");
    $("#emailInput").removeClass("is-invalid");
    $("#emailInput").addClass("is-valid");
    
  } else {
    adicionaErro(errosCadastro,"email_invalido");
    $("#emailInput").removeClass("is-valid");
    $("#emailInput").addClass("is-invalid");
    
  }
  
});

$("#professionSelect").change(function() {
  if(campoVazio($("#professionSelect"))) {
    adicionaErro(errosCadastro,"profissao_invalido");
    $("#professionSelect").addClass("is-invalid");

  } else {
    removeErro(errosCadastro,"profissao_invalido");
    $("#professionSelect").removeClass("is-invalid");
    $("#professionSelect").addClass("is-valid");

  }
  
});

$("#stateInput").blur(function() {
  if(campoVazio($("#stateInput"))) {
    adicionaErro(errosCadastro,"estado_invalido");
    $("#stateInput").addClass("is-invalid");

  } else {
    removeErro(errosCadastro,"estado_invalido");
    $("#stateInput").removeClass("is-invalid");
    $("#stateInput").addClass("is-valid");

  }
  
});

$("#cityInput").blur(function() {
  if(campoVazio($("#cityInput"))) {
    adicionaErro(errosCadastro,"cidade_invalido");
    $("#cityInput").addClass("is-invalid");

  } else {
    removeErro(errosCadastro,"cidade_invalido");
    $("#cityInput").removeClass("is-invalid");
    $("#cityInput").addClass("is-valid");

  }
  
});

// avise-me!

$("#inputAviseNome").blur(function() {
  if(campoVazio($("#inputAviseNome"))) {
    adicionaErro(errosAvise,"nome_invalido");
    $("#inputAviseNome").removeClass("is-valid");
    $("#inputAviseNome").addClass("is-invalid");
    
  } else {
    removeErro(errosAvise,"nome_invalido");
    $("#inputAviseNome").removeClass("is-invalid");
    $("#inputAviseNome").addClass("is-valid");
    
  }
  
});

$("#inputAviseEmail").blur(function() {
  if(verificaEmail($("#inputAviseEmail"))) {
    removeErro(errosAvise,"email_invalido");
    $("#inputAviseEmail").removeClass("is-invalid");
    $("#inputAviseEmail").addClass("is-valid");
    
  } else {
    adicionaErro(errosAvise,"email_invalido");
    $("#inputAviseEmail").removeClass("is-valid");
    $("#inputAviseEmail").addClass("is-invalid");
    
  }
  
});

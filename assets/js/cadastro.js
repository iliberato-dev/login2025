const form_cadastro = document.querySelector('.cadastro_form');

// FORM DO CADASTRO
form_cadastro.addEventListener('submit', (event) => {
    event.preventDefault();

    const email_cadastro = document.getElementById('login-email').value;
    // salvar em localStorage O valor do email cadastrado
    localStorage.setItem('email_cadastro', email_cadastro.toLowerCase());


    const telefone_cadastro = document.getElementById('login-tel').value;
    // salvar em localStorage O valor do telefone cadastrado
    localStorage.setItem('telefone_cadastro', telefone_cadastro.toLowerCase());

    const password_cadastro = document.getElementById("login-pass").value;
    const password_confirma = document.getElementById('login-pass-confirm').value;

    // fazer a validação da senha
    if (password_cadastro === password_confirma) {
        alert('cadastro realizado com sucesso');
        // salvar em localStorage O valor da senha cadastrada 
        localStorage.setItem('password_cadastro', password_confirma);
        window.location.href = '../index.html'; // Redireciona para a página de login após o cadastro bem-sucedido  
    } else {
        alert('senhas não conferem');
    }

});
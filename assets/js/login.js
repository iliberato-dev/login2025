//    //FORM LOGIN
const form_login = document.querySelector('.login__form');
let tentativas = 0; // Variável para contar as tentativas de login

form_login.addEventListener('submit', (event) => {
    event.preventDefault();

    const email_login = document.getElementById('login-email').value;
    const password_login = document.getElementById('login-pass').value;


    //Recuperar os dados do localstorage
    const email_cadastro = localStorage.getItem('email_cadastro');
    const password_cadastro = localStorage.getItem('password_cadastro');
    const telefone_cadastro = localStorage.getItem('telefone_cadastro');
    
    // validação de usuario e senhas com o login
    if ((email_cadastro === email_login.toLowerCase()) && (password_cadastro === password_login)) {
        alert('login realizado com sucesso')
        window.location.href = '../nova.html'; // Redireciona para a página inicial após o login bem-sucedido
    } else {
        
        if (email_cadastro !== email_login.toLowerCase()) {
            alert('E-mail invalido!!!')
        }


        if(password_cadastro !== password_login) {
            alert('Senha inválida!!!');

            alert(`tentativa ${tentativas}/3`);

            if (tentativas > 2) {
                alert('Você excedeu o número máximo de tentativas.');
                form_login.reset(); // Limpa o formulário
                tentativas = 0; // Reseta as tentativas 
                window.location.href = 'pages/recupera.html'; // Redireciona para a página de login
                
            }
        }
    }

});

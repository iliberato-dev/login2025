// FORM RECUPERAR SENHA
const formRecupera = document.getElementById('recover-form');
const emailField = document.getElementById('email-field');
const emailInput = document.getElementById('recover-email');
const sendCodeButton = document.getElementById('send-code-button');
const codeEntrySection = document.getElementById('code-entry-section');
const verificationCodeInput = document.getElementById('verification-code');
const newPasswordInput = document.getElementById('new-password');
const confirmNewPasswordInput = document.getElementById('confirm-new-password'); // Novo: Campo de confirmar senha
const verifyCodeButton = document.getElementById('verify-code-button');

let generatedCode = ''; // Variável para armazenar o código gerado

// Função para gerar um código aleatório (6 dígitos numéricos)
function generateRandomCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

// Ouvinte de evento para o botão "Enviar Código" (primeiro passo)
sendCodeButton.addEventListener('click', (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário

    const emailRecover = emailInput.value;

    if (!emailRecover) {
        alert('Por favor, digite seu e-mail para continuar.');
        return;
    }

    const emailCadastrado = localStorage.getItem('email_cadastro');

    if (emailRecover.toLowerCase() === emailCadastrado) {
        generatedCode = generateRandomCode(); // Gera o código
        localStorage.setItem('codigoGerado', generatedCode); // Armazena temporariamente
        localStorage.setItem('emailRecupera', emailRecover.toLowerCase()); // Armazena o email para validação

        // Esconde o campo de email e mostra a seção de entrada do código e nova senha
        emailField.style.display = 'none';
        sendCodeButton.style.display = 'none';
        codeEntrySection.style.display = 'block';

        alert(`Código "enviado" para o e-mail ${emailRecover}. O código é: ${generatedCode}`);
        // Em um cenário real, você não mostraria o código no alert!
        // Apenas para fins de demonstração no front-end.

    } else {
        alert('Se um e-mail com este endereço for encontrado, um código de recuperação será "enviado" para ele.');
        formRecupera.reset();
        emailField.style.display = 'grid';
        sendCodeButton.style.display = 'block';
        codeEntrySection.style.display = 'none';
    }
});

// Ouvinte de evento para o botão "Redefinir Senha" (segundo passo)
verifyCodeButton.addEventListener('click', (event) => {
    event.preventDefault();

    const enteredCode = verificationCodeInput.value;
    const newPassword = newPasswordInput.value;
    const confirmNewPassword = confirmNewPasswordInput.value; // Novo: Valor do campo de confirmar senha
    const emailRecuperaLS = localStorage.getItem('emailRecupera');

    const codigoGeradoLS = localStorage.getItem('codigoGerado');

    if (!enteredCode || !newPassword || !confirmNewPassword) {
        alert('Por favor, preencha todos os campos: Código de Verificação, Nova Senha e Confirmar Nova Senha.');
        return;
    }

    // Validação: Nova senha e confirmar senha devem ser iguais
    if (newPassword !== confirmNewPassword) {
        alert('As senhas não coincidem. Por favor, verifique e tente novamente.');
        newPasswordInput.value = ''; // Limpa os campos de senha
        confirmNewPasswordInput.value = '';
        return; // Impede a continuação do processo
    }

    // Verifica se o código e o e-mail coincidem com o que foi gerado e associado
    if (enteredCode === codigoGeradoLS && emailInput.value.toLowerCase() === emailRecuperaLS) {
        // Simula a atualização da senha no localStorage
        localStorage.setItem('password_cadastro', newPassword);

        alert('Senha redefinida com sucesso! Você já pode fazer login com sua nova senha.');
        
        // Limpa os dados temporários
        localStorage.removeItem('codigoGerado');
        localStorage.removeItem('emailRecupera');

        // Redireciona para a página de login
        window.location.href = '../index.html';
    } else {
        alert('Código de verificação ou e-mail inválido. Por favor, tente novamente.');
    }
});
/*=============== SHOW HIDDEN - PASSWORD ===============*/
const showHiddenPassword = () => {
    const input = document.getElementById("login-pass");
    const iconEye = document.getElementById("login-eye");
    const inputConfirm = document.getElementById("login-pass-confirm");
    const iconEyeConfirm = document.getElementById("login-eye-confirm");

    iconEye.addEventListener('click', () => {
        // Change password to text
        if(input.type === 'password') {
            // Switch to text
            input.type = 'text';

            // Icon change
            iconEye.classList.add('ri-eye-line');
            iconEye.classList.remove('ri-eye-off-line');
        } else {
            // Change to password
            input.type = 'password';
            iconEye.classList.remove('ri-eye-line');
            iconEye.classList.add('ri-eye-off-line')
        }
    });

    iconEyeConfirm.addEventListener('click', () => {
        // Change password to text
        if(inputConfirm.type === 'password') {
            // Switch to text
            inputConfirm.type = 'text';

            // Icon change
            iconEyeConfirm.classList.add('ri-eye-line');
            iconEyeConfirm.classList.remove('ri-eye-off-line');
        } else {
            // Change to password
            inputConfirm.type = 'password';
            iconEyeConfirm.classList.remove('ri-eye-line');
            iconEyeConfirm.classList.add('ri-eye-off-line')
        }
    });

};

showHiddenPassword();


function divRegister(){
    document.getElementById('form-login').classList.add('not-visible');
    document.getElementById('form-login').classList.remove('visible');

    document.getElementById('form-register').classList.add('visible');
    document.getElementById('form-register').classList.remove('not-visible');
}


function divLogin(){
    document.getElementById('form-register').classList.add('not-visible');
    document.getElementById('form-register').classList.remove('visible');

    document.getElementById('form-login').classList.add('visible');
    document.getElementById('form-login').classList.remove('not-visible');
}
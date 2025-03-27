function teste(){
    event.preventDefault();
    let e_mail = document.getElementById('e_mail');
    let senha = document.getElementById('password');
    let identificacao = e_mail.value;
    let password = senha.value;
    let res = document.getElementById('resultado');
    if(identificacao === "" || password === ""){
        res.innerHTML = "❗Este e-mail ou senha não tem o formato correto. Tentar novamente?";
        e_mail.style.border = "2px solid red";
        senha.style.border = "2px solid red";
        e_mail.focus();
    }
}
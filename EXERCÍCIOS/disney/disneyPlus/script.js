document.getElementById('email_form').addEventListener('submit', teste);
function teste(event){
    let erro = false;
    erro = true;
    if(erro) event.preventDefault();
    let e_mail = document.getElementById('e_mail');
    let senha = document.getElementById('password');
    let identificacao = e_mail.value.trim();
    let password = senha.value;
    let res = document.getElementById('resultado');
    res.style.fontSize = "20px";
    // Limpar bordas vermelhas antes de verificar
    e_mail.style.border = "1px solid #ccc";
    senha.style.border = "1px solid #ccc";
    if(identificacao === "" || password === ""){
        res.textContent = "❗Este e-mail ou senha não tem o formato correto. Tentar novamente?";
        e_mail.style.border = "2px solid red";
        senha.style.border = "2px solid red";
        e_mail.focus(); // Foco no campo email
    }
    else if(password.length > 64 || password.length < 10){
        res.textContent = "❗O número deve caracteres deve estar entre 10 e 64";
        senha.style.border = "2px solid red";
        // console.log("Foco na senha!");
        senha.focus(); // Foco na senha, pois ela falhou na verificação
    }
    // Validação do formato do e-mail
    else{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(identificacao)){
            res.textContent = "❗O formato de E-mail inserido não está válido.";
            e_mail.style.border = "2px solid red";
            e_mail.focus(); // Foco no e-mail novamente
        }
    }
}
const idAno = document.getElementById('idano');
const res = document.getElementById('resultado');
const btn = document.getElementById('btnEnviar');

btn.addEventListener('click', () => {
    const anoVerificado = Number(idAno.value);
    const anoAtual = new Date().getFullYear();
    if (!anoVerificado || anoVerificado > anoAtual) {
        alert('[ERRO] Verifique os dados e tente novamente!');
    }else{
        const calculo = anoAtual - anoVerificado;
        res.innerHTML = `Quem nasceu em ${anoVerificado} tem ${calculo} anos de idade.`;
    }
});
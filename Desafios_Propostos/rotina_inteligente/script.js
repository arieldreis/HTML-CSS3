function add(){
    event.preventDefault();
    let campomensagem = document.getElementById('idcampo');
    let mensagem = campomensagem.value.trim();
    let secao = document.querySelector('.secao');
    if(mensagem === ""){
        window.alert("PREENCHA O CAMPO VAZIO COM ALGUMA\nMENSAGEM PARA SER ADICIONADA NA LISTA.");
        return;
    }
        // Criar a div que contém a tarefa e o botão
        let item = document.createElement('div');
        item.classList.add('item'); //
        //Criar o texto tarefa
        let textoTarefa = document.createElement('span');
        textoTarefa.textContent  = `${mensagem}`;
        //Criar umm checkbox
        let verificador = document.createElement('input');
        verificador.type = 'checkbox';
        verificador.style.marginRight = "20px";
        verificador.onchange = function(){
            if(verificador){
                textoTarefa.style.textDecoration = "line-through";
                textoTarefa.style.color = "black";
                textoTarefa.style.backgroundColor = "lightgreen";
                textoTarefa.style.padding = "30px";
                textoTarefa.style.borderRadius = "4px"
            } else {
                textoTarefa.style.textDecoration = "none";
                textoTarefa.style.color = "black";
                textoTarefa.style.backgroundColor = "white";
                textoTarefa.style.padding = "none";
                textoTarefa.style.borderRadius = "none"
            }
        };
        // Criar o botão dinamicamente
        let btn = document.createElement('button');
        btn.textContent = "🗑️ DELETAR";
        btn.type = "submit";
        btn.style.backgroundColor = "red";
        btn.style.padding = "10px";
        btn.style.borderRadius = "5px";
        btn.style.marginLeft = "10px";
        btn.style.cursor = "pointer";
        btn.style.color = "white";
        btn.style.border = "none";
        btn.onmouseover = function(){
            btn.style.backgroundColor = "lightblue";
            btn.style.transition = "0.9s";
        };
        btn.onmouseout = function(){
            btn.style.backgroundColor = "red";
        };
        btn.onclick = function(){
        // Essa linha irá remover a barra de tarefas.
            item.style.opacity = "0";
           setTimeout(() => item.remove(), 1500); // E após 1.5s ele irá remover o elemento.
        };
        // Adiciona os elementos na div
        item.appendChild(verificador);
        item.appendChild(textoTarefa);
        item.appendChild(btn);
        // Adiciona a tarefa na seção
        secao.appendChild(item);
        // Limpa o campo e foca nele denovo.
        campomensagem.value = "";
        campomensagem.focus();
}
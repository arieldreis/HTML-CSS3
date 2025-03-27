<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login to Disney+</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="shortcut icon" href="css/disney-1.png" type="image/x-icon">
</head>
<body>
    <main>
        <header>
            <h1>Disney+</h1>
        </header>
        <form action="" method="post">
            <h2>MyDisney</h2>
            <h1>Digite o seu e-mail para continuar</h1>
            <p>Entre no Disney+ com a sua conta MyDisney. Se você não tiver conta, precisará criar uma.</p>
            <input type="email" name="e_mail" id="e_mail" placeholder="E-mail"><br>
            <input type="password" name="password" id="password" placeholder="Password"><br>
            <span id="resultado"></span>
            <button onclick="teste(event)">Continuar</button>
            <hr>
            <p>O Disney+ faz parte das empresas do grupo Walt Disney</p>
            <small>
            Com o MyDisney, você pode entrar em serviços e experiências das empresas do grupo Walt Disney, como Disney+, ESPN, Walt Disney World <a href="createaccount.php"> e muito mais.</a>
            </small>
        </form>
    </main>
    <footer>
        <ul>
            <li><a href="https://privacy.thewaltdisneycompany.com/pt-br/nossa-politica-de-privacidade/" target="_blank">Política de Privacidade</a></li>
            <li><a href="https://disneytermsofuse.com/brazilian-portuguese/" target="_blank">Termos de Uso da Disney</a></li>
            <li><a href="https://www.disneyplus.com/pt-br/legal/aviso-de-direitos-de-privacidade-do-brasil" target="_blank">Avisos de Direitos de Privacidade do Brasil</a></li>
            <li><a href="https://www.disneyplus.com/pt-br/legal/pol%C3%ADtica-de-cookies" target="_blank">Políticas de Cookies</a></li>
            <li><a href="https://privacy.thewaltdisneycompany.com/pt-br/nossa-politica-de-privacidade/protecao-de-dados-no-brasil/" target="_blank">Proteção de Dados no Brasil</a></li>
            <li><a href="https://www.disneyplus.com/pt-br/legal/contrato-de-assinatura" target="_blank">Contrato de Assinatura</a></li>
            <li><a href="https://help.disneyplus.com/pt-BR/?utm_source=disneyplus&utm_medium=web&utm_campaign=unified-footer&utm_content=home-page">Ajuda</a></li><br>
            <li><a href="https://help.disneyplus.com/pt-BR/article/disneyplus-devices-supported" target="_blank">Dispositivos compatíveis</a></li>
            <li><a href="https://help.disneyplus.com/pt-BR/article/disneyplus-introduction">Sobre o Disney+</a></li><br>
            <li><a href="https://help.disneyplus.com/pt-BR/article/disneyplus-introduction">Anúncios Personalizados</a></li><br>
        </ul>
        <p>
        Disney+ é um serviço pago, baseado em assinatura e sujeito a termos e condições. O serviço Disney+ é comercializado por The Walt Disney Company (Brasil) Ltda., World Trade Center, Av. Das Nações Unidas, 12.551, 12.555, 12.559, Piso 10,<br>
        São Paulo/SP - CEP 04578-903, Brasil e CNPJ/M 73.042.962/0004-20
        </p>
        <p>&copy;Disney. Todos os direitos reservados.</p>
    </footer>
    <script src="script.js"></script>
</body>
</html>
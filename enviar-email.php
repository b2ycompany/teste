<?php if ($_SERVER["REQUEST_METHOD"] == "POST") { // Recebe os dados do formulário $nome = $_POST['nome']; $email = $_POST['email']; $mensagem = $_POST['mensagem']; // Valida o email if (!filter_var($email, FILTER_VALIDATE_EMAIL)) { echo "Email inválido!"; exit; } // Endereço de destino (seu e-mail) $to = "jjgilbertobap@gmail.com"; // Substitua pelo seu e-mail $subject = "Mensagem do Formulário de Contato"; // Corpo da mensagem $body = "Nome: $nome\nE-mail: $email\nMensagem: $mensagem"; // Cabeçalhos do e-mail $headers = "From: $email"; // Envia o e-mail if (mail($to, $subject, $body, $headers)) { echo "Mensagem enviada com sucesso!"; } else { echo "Erro ao enviar a mensagem."; } } else { echo "Método de requisição inválido."; } ?>

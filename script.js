// Função para atualizar os contadores de processos 
function updateCounters() { animateCounter(document.getElementById('novos'), 0, 5, 1000); animateCounter(document.getElementById('andamento'), 0, 3, 1000); animateCounter(document.getElementById('concluidos'), 0, 8, 1000); } 
// Função para animação do contador 
function animateCounter(element, start, end, duration) { let startTime = null; function step(timestamp) { if (!startTime) startTime = timestamp; const progress = Math.min((timestamp - startTime) / duration, 1); element.textContent = Math.floor(progress * (end - start) + start); if (progress < 1) { window.requestAnimationFrame(step); } } window.requestAnimationFrame(step); } 
// Função para o carrossel de depoimentos 
function startCarrossel() { const depoimentos = document.querySelectorAll('.depoimento'); let index = 0; 
// Inicializa todos os depoimentos como invisíveis 
depoimentos.forEach((depoimento) => { depoimento.style.display = 'none'; }); 
// Exibe o primeiro depoimento 
depoimentos[index].style.display = 'block'; setInterval(() => { 
// Esconde todos os depoimentos 
depoimentos.forEach((depoimento) => { depoimento.style.display = 'none'; }); 
// Exibe o próximo depoimento 
depoimentos[index].style.display = 'block'; 
// Atualiza o índice para o próximo depoimento 
index = (index + 1) % depoimentos.length; }, 3000); } 
// Função para enviar o formulário de contato 
document.getElementById('form-contato').addEventListener('submit', function (event) { event.preventDefault(); 
// Coleta os dados do formulário 
const nome = document.getElementById('nome').value; const email = document.getElementById('email').value; const mensagem = document.getElementById('mensagem').value; const arquivo = document.getElementById('arquivo').files[0]; 
// Exibe uma mensagem simples de sucesso 
alert('Formulário enviado com sucesso!'); 
// Resetar o formulário 
this.reset(); 
// Envio via EmailJS 
emailjs.send('service_wioz91m', 'Gmail', { nome, email, mensagem, arquivo: arquivo ? arquivo.name : 'Nenhum arquivo anexado' }) .then(function(response) { console.log('E-mail enviado com sucesso', response); }, function(error) { console.log('Erro ao enviar e-mail', error); }); 
// Simular envio via WhatsApp 
const whatsappMessage = `Olá, gostaria de saber mais sobre os serviços. Nome: ${nome} E-mail: ${email} Mensagem: ${mensagem}`; window.open(`https://wa.me/5511965520979?text=${encodeURIComponent(whatsappMessage)}`); }); 
// Inicializando as funções 
document.addEventListener('DOMContentLoaded', () => { updateCounters(); 
// Atualiza os contadores de processos 
startCarrossel(); 
// Inicia o carrossel de depoimentos 
document.querySelector('.menu-toggle').addEventListener('click', function () { this.classList.toggle('active'); document.querySelector('.menu.responsivo').classList.toggle('active'); }); }); 
// Corrigido a captura dos contadores 
const novos = document.getElementById('novos'); const andamento = document.getElementById('andamento'); const concluidos = document.getElementById('concluidos'); 
// Atualiza os valores dos contadores (caso necessário) 
novos.textContent = 5; andamento.textContent = 3; concluidos.textContent = 8;

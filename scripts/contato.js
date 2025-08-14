document.getElementById('formContato').addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if (!nome) {
    alert('Por favor, preencha seu nome.');
    return;
  }

  const texto = `Olá, meu nome é ${nome}. ${mensagem}`;
  const numeroWhatsApp = '5512982223254'; 

  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
  window.open(url, '_blank');
});

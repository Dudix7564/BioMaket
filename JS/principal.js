// Função para redirecionar para a página principal
function voltarParaPaginaPrincipal() {
  window.location.href = "/BioMaket/index.html"; // Altere para o caminho correto da sua página principal
}

// Event listener para o botão de voltar
document.addEventListener('DOMContentLoaded', () => {
  const voltarBtn = document.getElementById('voltarBtn');
  if (voltarBtn) {
    voltarBtn.addEventListener('click', voltarParaPaginaPrincipal);
  }
});

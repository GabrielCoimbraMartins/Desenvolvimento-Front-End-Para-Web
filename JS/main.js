// JS/main.js
// --- Controle SPA ---
const conteudo = document.getElementById('conteudo');

function carregarPagina(hash) {
  const rota = hash.replace('#', '') || 'home';
  conteudo.innerHTML = templates[rota] || `<p>Página não encontrada.</p>`;

  // Atualiza destaque no menu
  document.querySelectorAll('.nav-list a').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${rota}`);
  });

  // Se for a página de cadastro, ativa o formulário
  if (rota === 'cadastro') inicializarForm();
}

// Eventos SPA
window.addEventListener('hashchange', () => carregarPagina(location.hash));
window.addEventListener('load', () => carregarPagina(location.hash));

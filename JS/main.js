const conteudo = document.getElementById('conteudo');

function carregarPagina(hash) {
  const rota = hash.replace('#', '') || 'home';
  conteudo.innerHTML = templates[rota] || `<p>Página não encontrada.</p>`;

  document.querySelectorAll('.nav-list a').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${rota}`);
  });

  if (rota === 'cadastro') inicializarForm();
}

window.addEventListener('hashchange', () => carregarPagina(location.hash));
window.addEventListener('load', () => carregarPagina(location.hash));

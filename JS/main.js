/* JS/main.js
   Inicializa SPA: troca de templates via hash (#home, #projetos, #cadastro)
*/
(function () {
  const container = document.getElementById('conteudo-principal');
  const templates = window.TEMPLATES || {};
  const navLinks = document.querySelectorAll('.nav-list a, .mobile-nav a');

  function setActiveLink(pagina) {
    navLinks.forEach(link => {
      const href = link.getAttribute('href') || '';
      link.classList.toggle('active', href === `#${pagina}` || (href === `${pagina}.html` && window.location.pathname.endsWith('index.html') === false));
    });
  }

  function carregar(pagina) {
    const html = templates[pagina] || templates.home || '<p>Conteúdo indisponível.</p>';
    container.innerHTML = html;
    setActiveLink(pagina);

    // inicializa comportamento do formulário (se houver)
    if (window.Forms && typeof window.Forms.init === 'function') {
      window.Forms.init(); // idempotente (addEventListener com delegate)
    }
  }

  function rotaAtual() {
    return (location.hash || '#home').replace('#', '');
  }

  window.addEventListener('hashchange', () => carregar(rotaAtual()));
  document.addEventListener('DOMContentLoaded', () => {
    // se o index.html estava com links para arquivos separados, manter compatibilidade:
    // transformar links do cabeçalho que apontam para .html em hash (opcional).
    document.querySelectorAll('a[href$=".html"]').forEach(a => {
      const href = a.getAttribute('href');
      if (href.includes('index.html') || href.includes('Index.html')) a.setAttribute('href', '#home');
      if (href.includes('projetos.html')) a.setAttribute('href', '#projetos');
      if (href.includes('cadastro.html')) a.setAttribute('href', '#cadastro');
    });

    carregar(rotaAtual());
  });

})();

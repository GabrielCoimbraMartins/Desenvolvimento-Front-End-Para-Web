// JS/templates.js
// --- Templates SPA ---
const templates = {
  home: `
    <section class="card">
      <h2>Quem Somos</h2>
      <p>Somos uma ONG dedicada ao resgate, cuidado e adoção de animais abandonados.</p>
      <img src="Imagens/cachorro.jpg" alt="Cachorro resgatado">
    </section>

    <section class="card">
      <h2>Missão, Visão e Valores</h2>
      <p><strong>Missão:</strong> Proteger e acolher animais em situação de rua.</p>
      <p><strong>Visão:</strong> Ser referência em adoção responsável.</p>
      <p><strong>Valores:</strong> Amor, respeito e responsabilidade.</p>
      <img src="Imagens/feliz.jpg" alt="Cachorro feliz">
    </section>

    <section class="card">
      <h2>Contato</h2>
      <address>
        Rua do Dog Feliz, 52 - São José dos Pinhais/PR<br>
        (41) 99111-1111<br>
        contato@acolhepet.org.br
      </address>
      <img src="Imagens/contato.jpg" alt="Cachorro contato">
    </section>
  `,

projetos: `
  <section class="card">
    <h2>Adote um Amigo</h2>
    <p>Campanha permanente de adoção responsável!</p>
    <!-- imagem: voluntarios.jpg (existe na sua pasta Imagens) -->
    <img src="Imagens/voluntarios.jpg" alt="Voluntários com animais disponíveis para adoção">
    <span class="tag tag-success">Adoção</span>
  </section>

  <section class="card">
    <h2>Como Ser Voluntário</h2>
    <p>Ajude nos cuidados, eventos e divulgações!</p>
    <!-- imagem: voluntariado.jpg (verifique extensão exata no seu diretório) -->
    <img src="Imagens/voluntariado.jpg" alt="Voluntários cuidando em evento">
    <span class="tag tag-info">Voluntariado</span>
  </section>

  <section class="card">
    <h2>Como Doar</h2>
    <p>Rações, medicamentos e doações financeiras são bem-vindas.</p>
    <!-- imagem: doacao.jpeg (use exatamente .jpeg ou .jpg conforme o arquivo) -->
    <img src="Imagens/doacao.jpeg" alt="Doação de ração">
    <span class="tag tag-warning">Doações</span>
  </section>
`,  

  cadastro: `
    <section class="card">
      <h2>Cadastro de Voluntário</h2>
      <form id="formCadastro">
        <label>Nome:</label>
        <input type="text" id="nome" placeholder="Digite seu nome" required>

        <label>Email:</label>
        <input type="email" id="email" placeholder="Digite seu e-mail" required>

        <label>Mensagem:</label>
        <textarea id="mensagem" rows="4" placeholder="Por que deseja ser voluntário?" required></textarea>

        <button type="submit">Enviar</button>
        <p id="erro" class="error"></p>
      </form>
    </section>
  `
};

/* JS/templates.js
   Define as páginas como strings. Não usa módulos ES (compatível com <script> normal).
*/
window.TEMPLATES = {
  home: `
    <section class="card" id="home">
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
  `,

  projetos: `
    <section class="card" id="projetos">
      <h2>Projetos Ativos</h2>
      <p>Conheça nossos projetos que estão transformando a vida de animais:</p>
      <ul>
        <li>🐾 Adoção Responsável</li>
        <li>💉 Campanha de Castração Solidária</li>
        <li>🏠 Lar Temporário</li>
      </ul>
      <img src="Imagens/doacao.jpg" alt="Doação de ração">
    </section>
  `,

  cadastro: `
    <section class="card" id="cadastro">
      <h2>Cadastro de Voluntário / Doador</h2>

      <div id="form-messages" aria-live="polite"></div>

      <form id="formCadastro" novalidate>
        <fieldset>
          <legend>Informações Pessoais</legend>

          <label for="nome">Nome Completo
            <input type="text" id="nome" name="nome" required>
            <small class="error" data-for="nome"></small>
          </label>

          <label for="email">E-mail
            <input type="email" id="email" name="email" required>
            <small class="error" data-for="email"></small>
          </label>

          <label for="cpf">CPF
            <input type="text" id="cpf" name="cpf" placeholder="000.000.000-00" pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}">
            <small class="error" data-for="cpf"></small>
          </label>

          <label for="telefone">Telefone
            <input type="tel" id="telefone" name="telefone" placeholder="(41) 99999-9999" required>
            <small class="error" data-for="telefone"></small>
          </label>

          <label for="dataNascimento">Data de Nascimento
            <input type="date" id="dataNascimento" name="dataNascimento" required>
            <small class="error" data-for="dataNascimento"></small>
          </label>
        </fieldset>

        <fieldset>
          <legend>Endereço</legend>

          <label for="endereco">Endereço
            <input type="text" id="endereco" name="endereco" required>
            <small class="error" data-for="endereco"></small>
          </label>

          <label for="cep">CEP
            <input type="text" id="cep" name="cep" placeholder="00000-000" pattern="\\d{5}-\\d{3}" required>
            <small class="error" data-for="cep"></small>
          </label>

          <label for="cidade">Cidade
            <input type="text" id="cidade" name="cidade" required>
            <small class="error" data-for="cidade"></small>
          </label>

          <label for="estado">Estado (UF)
            <input type="text" id="estado" name="estado" maxlength="2" placeholder="PR" required>
            <small class="error" data-for="estado"></small>
          </label>
        </fieldset>

        <fieldset>
          <legend>Tipo de Cadastro</legend>
          <label><input type="radio" name="tipo" value="voluntario" required> Voluntário</label>
          <label><input type="radio" name="tipo" value="doador"> Doador</label>
          <small class="error" data-for="tipo"></small>
        </fieldset>

        <div class="form-actions">
          <button type="submit" class="btn btn-primary">Enviar Cadastro</button>
          <button type="reset" class="btn btn-ghost">Limpar</button>
        </div>
      </form>
    </section>
  `
};

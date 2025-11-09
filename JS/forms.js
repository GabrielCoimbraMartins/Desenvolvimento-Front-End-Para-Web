function inicializarForm() {
  const form = document.getElementById('formCadastro');
  const erro = document.getElementById('erro');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const msg = document.getElementById('mensagem').value.trim();

    if (!nome || !email || !msg) {
      erro.textContent = "Por favor, preencha todos os campos corretamente.";
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      erro.textContent = "E-mail inválido.";
      return;
    }

    erro.textContent = "";
    localStorage.setItem('cadastro', JSON.stringify({ nome, email, msg }));
    alert("Cadastro realizado com sucesso!");
    form.reset();
  });
}

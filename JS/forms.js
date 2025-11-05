/* JS/forms.js
   Validação e armazenamento local (localStorage).
   Usa seletores simples, sem dependências externas.
*/
(function () {
  const STORAGE_KEY = 'acolhepet_registrations';

  function showFieldError(fieldEl, message) {
    const small = document.querySelector(`small.error[data-for="${fieldEl.id}"]`);
    if (small) {
      small.textContent = message;
      small.style.color = '#ffb3a3';
      small.style.display = message ? 'block' : 'none';
    }
    fieldEl.setAttribute('aria-invalid', !!message);
  }

  function clearErrors(form) {
    form.querySelectorAll('small.error').forEach(s => s.textContent = '');
    form.querySelectorAll('[aria-invalid]').forEach(el => el.removeAttribute('aria-invalid'));
  }

  function getStored() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function saveRegistration(obj) {
    const arr = getStored();
    arr.push(obj);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
  }

  function validateCPF(cpf) {
    // simple format check only: 000.000.000-00
    return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf);
  }

  function onlyDigits(str) {
    return str.replace(/\D/g, '');
  }

  function validateForm(form) {
    clearErrors(form);
    const errors = [];

    const nome = form.querySelector('#nome');
    const email = form.querySelector('#email');
    const cpf = form.querySelector('#cpf');
    const telefone = form.querySelector('#telefone');
    const dataNascimento = form.querySelector('#dataNascimento');
    const endereco = form.querySelector('#endereco');
    const cep = form.querySelector('#cep');
    const cidade = form.querySelector('#cidade');
    const estado = form.querySelector('#estado');
    const tipo = form.querySelector('input[name="tipo"]:checked');

    // nome
    if (!nome.value || nome.value.trim().length < 3) {
      const msg = 'Nome deve ter ao menos 3 caracteres.';
      showFieldError(nome, msg);
      errors.push(msg);
    }

    // email (simple)
    if (!email.value || !/^\S+@\S+\.\S+$/.test(email.value)) {
      const msg = 'Email inválido.';
      showFieldError(email, msg);
      errors.push(msg);
    }

    // cpf (optional but if filled must match)
    if (cpf.value && !validateCPF(cpf.value)) {
      const msg = 'CPF inválido (use 000.000.000-00).';
      showFieldError(cpf, msg);
      errors.push(msg);
    }

    // telefone (digits 10 ou 11)
    const phoneDigits = onlyDigits(telefone.value || '');
    if (!telefone.value || !(phoneDigits.length === 10 || phoneDigits.length === 11)) {
      const msg = 'Telefone deve ter 10 ou 11 dígitos.';
      showFieldError(telefone, msg);
      errors.push(msg);
    }

    // data nascimento (idade mínima 16)
    if (!dataNascimento.value) {
      const msg = 'Informe a data de nascimento.';
      showFieldError(dataNascimento, msg);
      errors.push(msg);
    } else {
      const birth = new Date(dataNascimento.value);
      const age = (new Date() - birth) / (365.25 * 24 * 3600 * 1000);
      if (age < 16) {
        const msg = 'É necessário ter ao menos 16 anos.';
        showFieldError(dataNascimento, msg);
        errors.push(msg);
      }
    }

    // endereco
    if (!endereco.value || endereco.value.trim().length < 5) {
      const msg = 'Informe um endereço válido.';
      showFieldError(endereco, msg);
      errors.push(msg);
    }

    // cep
    if (!cep.value || !/^\d{5}-\d{3}$/.test(cep.value)) {
      const msg = 'CEP inválido (00000-000).';
      showFieldError(cep, msg);
      errors.push(msg);
    }

    // cidade
    if (!cidade.value || cidade.value.trim().length < 2) {
      const msg = 'Informe a cidade.';
      showFieldError(cidade, msg);
      errors.push(msg);
    }

    // estado
    if (!estado.value || !/^[A-Za-z]{2}$/.test(estado.value.trim())) {
      const msg = 'Informe a sigla do estado (ex: PR).';
      showFieldError(estado, msg);
      errors.push(msg);
    }

    // tipo
    if (!tipo) {
      const small = document.querySelector('small.error[data-for="tipo"]');
      if (small) {
        small.textContent = 'Escolha Voluntário ou Doador.';
        small.style.color = '#ffb3a3';
      }
      errors.push('Tipo de cadastro não selecionado.');
    } else {
      const small = document.querySelector('small.error[data-for="tipo"]');
      if (small) small.textContent = '';
    }

    return { valid: errors.length === 0, errors };
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const result = validateForm(form);

    const messagesEl = document.getElementById('form-messages');
    messagesEl.innerHTML = '';

    if (!result.valid) {
      // mostra resumo de erros
      const box = document.createElement('div');
      box.className = 'alert alert--error';
      box.innerHTML = `<strong>Foram encontrados erros:</strong><ul>${result.errors.map(r => `<li>${r}</li>`).join('')}</ul>`;
      messagesEl.appendChild(box);
      messagesEl.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    // montar objeto e salvar
    const data = {
      nome: form.nome.value.trim(),
      email: form.email.value.trim(),
      cpf: form.cpf.value.trim(),
      telefone: form.telefone.value.trim(),
      dataNascimento: form.dataNascimento.value,
      endereco: form.endereco.value.trim(),
      cep: form.cep.value.trim(),
      cidade: form.cidade.value.trim(),
      estado: form.estado.value.trim().toUpperCase(),
      tipo: form.tipo.value,
      createdAt: new Date().toISOString()
    };

    saveRegistration(data);

    const box = document.createElement('div');
    box.className = 'alert alert--success';
    box.textContent = 'Cadastro realizado com sucesso! Obrigado pelo apoio.';
    messagesEl.appendChild(box);
    form.reset();
    messagesEl.scrollIntoView({ behavior: 'smooth' });
  }

  function init() {
    // delegate: se o form existir, anexa o listener
    document.addEventListener('submit', (e) => {
      if (e.target && e.target.id === 'formCadastro') handleSubmit(e);
    });
  }

  // expõe
  window.Forms = {
    init,
    getStored
  };
})();

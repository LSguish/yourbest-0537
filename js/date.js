  // Função para exibir a data atual no formato desejado
function setDate() {
  try {
    // Obtém a data atual
    const now = new Date();

    // Opções de formatação da data
    const options = { day: 'numeric', month: 'long' };

    // Formata a data no idioma português do Brasil
    const formattedDate = now.toLocaleDateString('en-US', options);

    // Insere a data formatada no elemento com ID "current-date"
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
      dateElement.textContent = formattedDate;
    } else {
      console.error('Elemento com ID "current-date" não encontrado.');
    }
  } catch (error) {
    console.error('Erro ao exibir a data atual:', error);
  }
}
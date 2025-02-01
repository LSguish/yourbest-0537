// Função assíncrona para buscar a localização do usuário
async function fetchLocation() {
  try {
    // Faz a chamada para a API GeoJS
    const response = await fetch('https://get.geojs.io/v1/ip/geo.json');

    // Verifica se a resposta é válida
    if (!response.ok) {
      throw new Error(`Erro na API GeoJS: ${response.statusText}`);
    }

    const data = await response.json();

    // Atualiza o elemento com a localização do usuário
    const locationElement = document.getElementById('location');
    if (locationElement) {
      if (data.city && data.region) {
        locationElement.textContent = `${data.region}`;
      } else {
        locationElement.textContent = 'YOUR AREA';
        console.warn('A localização não pôde ser determinada.');
      }
    } else {
      console.error('Elemento com ID "location" não encontrado.');
    }
  } catch (error) {
    console.error('Erro ao obter a localização:', error);

    // Fallback para o caso de falha na API ou conexão
    const locationElement = document.getElementById('location');
    if (locationElement) {
      locationElement.textContent = 'YOUR AREA';
    }
  }
}

// Executa ambas as funções ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  setDate();
  fetchLocation();
});
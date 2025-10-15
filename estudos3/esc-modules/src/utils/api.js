const key = {
    apiKey: 'sua-chave-aqui',
    endpoint: 'dhajdhasjh',
}


//export default key exportacao diretamente na declaração
export default key;
export const fetchData = () => {
    console.log('Buscando dados da API com a chave:', key.apiKey);
    // lógica para buscar dados da API
}
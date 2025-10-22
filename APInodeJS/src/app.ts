import { getFilteredPodcasts, getPodcasts } from './controllers/podcast-controller';
import { Routes } from './routes/routes';
import { methodsHTTP } from './utils/httpmetodos';
import { statusCodeHTTP } from './utils/statuscodehttp';
import * as http from 'http';


export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {
  response.statusCode = statusCodeHTTP.OK;

  //querying the url to filter episodes
  //entre os [] colocamos o que queremos extrair da divisão da url
  //se a url for undefined, usamos valores padrão que são strings vazias no final
  //o ?? é usado para definir valores padrão caso o valor à esquerda seja null ou undefined
  //o split('?') divide a url em duas partes: antes e depois do '?'
  //o .url? acessa a propriedade url do objeto request
  const [baseUrl, queryString] = request.url?.split('?=') ?? ['', ''];
  console.log('Base URL:', baseUrl);
  console.log('Query String:', queryString);

  //criando o cabeçalho da resposta content-type application/json servemdo para informar que o corpo da resposta é um json
  if (request.method === methodsHTTP.GET && baseUrl === Routes.list) {
    //se o método for GET responder com um json
    await getPodcasts(request, response);
  }
  if (request.method === methodsHTTP.GET && baseUrl === Routes.filter) {
    //se o método for GET responder com um json
    await getFilteredPodcasts(request, response);
  }
}



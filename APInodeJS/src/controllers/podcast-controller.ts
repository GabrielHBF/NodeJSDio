//importando tipos do http module
import { IncomingMessage, request, ServerResponse } from "http";
import { listEpisodesService } from "../services/listEspisodes-Servoces";
import { filterEpisodesService } from "../services/filterepisodes-Service";


export const getPodcasts = async (request: IncomingMessage, response: ServerResponse) => {
    //criando o cabeçalho da resposta content-type application/json servemdo para informar que o corpo da resposta é um json
    response.writeHead(200, { 'Content-Type': 'application/json' });

    //enviando a resposta com um objeto json
    response.end(JSON.stringify({
        name: "Podcast API",
        episodes: await listEpisodesService()
    }));
};

//incomingMessage representa a requisição recebida do cliente
//serverResponse representa a resposta que será enviada de volta ao cliente
export const getFilteredPodcasts = async (request: IncomingMessage, response: ServerResponse) => {

    const content = await filterEpisodesService(request.url);

    //resposta com o conteudo filtrado 200 significa que a requisição foi bem sucedida
    //content-type application/json informa que o corpo da resposta é um json
    response.writeHead(200, { 'Content-Type': 'application/json' });
    //json.stringify converte o objeto content em uma string json para ser enviada na resposta
    response.end(JSON.stringify(content));

}
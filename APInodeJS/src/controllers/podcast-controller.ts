//importando tipos do http module
import { IncomingMessage, request, ServerResponse } from "http";
import { listEpisodesService } from "../services/listEspisodes-Servoces";


export const getPodcasts = async (request: IncomingMessage, response: ServerResponse) => {
    //criando o cabeçalho da resposta content-type application/json servemdo para informar que o corpo da resposta é um json
    response.writeHead(200, { 'Content-Type': 'application/json' });

    //enviando a resposta com um objeto json
    response.end(JSON.stringify({
        name: "Podcast API",
        episodes: await listEpisodesService()
    }));
};

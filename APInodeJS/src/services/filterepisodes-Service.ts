import { IncomingMessage } from "http";
import { PodcastRepository } from "../repository/podcastrepositor"
import { FilterPodcastModel } from "../models/filter-podcast-model";

//função que filtra episódios com base no nome do podcast
export const filterEpisodesService = async (podcastName: string | undefined) => {
    //definindo o formato da resposta
    let responseFormat: FilterPodcastModel = {
        //código de status inicializado como 0
       statusCode: 0,
       //corpo da resposta inicializado como array vazio
       body: [],
    };
    //extraindo a query string da url
    //se a url for undefined, usamos uma string vazia como valor padrão
    //o ?? é usado para definir valores padrão caso o valor à esquerda seja null ou undefined
    const queryString = podcastName?.split('?=')[1] ?? '';

    //chama o repositório para obter os dados dos podcasts
    const data = await PodcastRepository(queryString);

    if(data){
        responseFormat.statusCode = 200;
       
    }else{
        responseFormat.statusCode = 404;
    }
    responseFormat.body = data;
    return responseFormat;
}
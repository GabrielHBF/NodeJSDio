import { IncomingMessage } from "http";
import { PodcastRepository } from "../repository/podcastrepositor"

//função que filtra episódios com base no nome do podcast
export const filterEpisodesService = async (podcastName: string | undefined) => {
        
    //extraindo a query string da url
    //se a url for undefined, usamos uma string vazia como valor padrão
    //o ?? é usado para definir valores padrão caso o valor à esquerda seja null ou undefined
    const queryString = podcastName?.split('?=')[1] ?? '';

    //chama o repositório para obter os dados dos podcasts
    const data = await PodcastRepository(queryString);
    return data;
}
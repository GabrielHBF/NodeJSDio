import { Podcast } from "./podcastModels";

//definindo uma interface FilterPodcastModel para tipar os objetos de resposta ao filtrar podcasts
export interface FilterPodcastModel {
    //definindo a estrutura do json de resposta ao filtrar podcasts
   statusCode: number;
   //o body sera um array de objetos do tipo Podcast
   body: Podcast[];
}
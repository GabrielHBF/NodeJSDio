//serve para manipulação de arquivos como leitura e escrita 
import fs from 'fs';
//serve para manipulação de caminhos de arquivos e diretórios
import path from 'path';
import { Podcast } from '../models/podcastModels';


const pathData = path.join(__dirname, '../repository/podcasts.json');
//__DIRNAME é uma variável global que representa o diretório atual do arquivo em execução
//promise<Podcast[]> indica para que o retorno esteja nos padrões da interface Podcast
export const PodcastRepository = async (): Promise<Podcast[]> => {
    //lê o conteúdo do arquivo podcasts.json de forma síncrona
    //'utf-8' especifica a codificação do arquivo para garantir que o conteúdo seja lido corretamente como texto
    //readFileSync lê o arquivo e retorna seu conteúdo como uma string
    const data = fs.readFileSync(pathData, 'utf-8');
    //converte o conteúdo JSON lido em um objeto JavaScript e o retorna
    return JSON.parse(data);  
}
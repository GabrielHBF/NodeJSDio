import { PodcastRepository } from "../repository/podcastrepositor"

export const listEpisodesService = async () => {
  // Lógica para listar episódios
  // Chama o repositório para obter os dados dos podcasts
  const data = await PodcastRepository();
  return data;
}
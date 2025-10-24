import { response } from "express";
import { playerModel } from "../models/playerModel";
import * as playersRepository from "../repositories/players-repository";
import * as HttpModel from "../utils/http-helper";
import { statisticsplayerModel } from "../models/statistcsModel";


export const getPlayersService = async() => {
    const data = await playersRepository.findAllPlayer();

    let response = null;

    if(data){
        response = await HttpModel.ok(data);
    }else{
        response = await HttpModel.badRequest();
    }

return response;
}


export const getPlayersByIdService = async (id: number) => {
    const data = playersRepository.findPlayerById(id);
    let response = null;
    if(data){
        response = HttpModel.ok(data);
    }else{
        response = HttpModel.badRequest();
    }

    return response;
}


export const postPlayerByBosy =  async (player: playerModel) => {

    // verifica se o object player esta vazio
    //obs vazio e diferente de nulo
    if(Object.keys(player).length !== 0){
        await playersRepository.findPlayerPost(player);
    }else{
        return HttpModel.badRequest();
    }
}


export const delPlayerDyId = async (id: number) => {
    let response = null;
    await playersRepository.findDelPlayerById(id);
    response = HttpModel.ok({message: "deleted"});

    return response;
}


export const updatePlayersById = async (id: number, statistcs: statisticsplayerModel) => {
    const data = await playersRepository.findModifyPlayer(id,statistcs);
    const response = HttpModel.ok(data)
    return response;
}
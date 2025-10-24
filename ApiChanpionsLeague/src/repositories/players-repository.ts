import { isDeepStrictEqual } from "util";
import { playerModel } from "../models/playerModel";
import { statisticsplayerModel } from "../models/statistcsModel";

const database: playerModel[] = [
    
];


export const findAllPlayer = async(): Promise<playerModel[]> => {
    return database;
}

export const findPlayerById = async(id: number): Promise<playerModel | undefined> => {
    return database.find((player) => player.id === id);
}

export const findPlayerPost = async(player: playerModel) => {
    database.push(player);
}

export const findDelPlayerById = async(id: number) => {
    const index = database.findIndex((p) => p.id === id);
    if(index !== -1){
        database.splice(index, 1);
    }
}


export const findModifyPlayer = async (id: number, statistcs: statisticsplayerModel) => {
     const index = database.findIndex((p) => p.id === id);
     if(index !== -1){
        database[index].statistics = statistcs;
    }

    return database[index];
}
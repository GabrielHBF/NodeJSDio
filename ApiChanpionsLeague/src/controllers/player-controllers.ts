import express from 'express'
import * as playerServices from '../services/players-services';
import { badRequest } from '../utils/http-helper';
import { statisticsplayerModel } from '../models/statistcsModel';

export const getPlayers = async (req: express.Request, res: express.Response)=> {
        const HttpResponse = await playerServices.getPlayersService();   
          
        res.status(HttpResponse.statusCode).json(HttpResponse.body);
        }
export const getPlayersById = async (req: express.Request, res: express.Response)=> {
        const id = parseInt(req.params.id);
        const httpresponse = await playerServices.getPlayersByIdService(id);
        res.status(httpresponse.statusCode).json(httpresponse.body)
        }


export const postPlayer = async (req: express.Request, res: express.Response) => {
        let bodyValue = req.body;
        const httpresponse = await playerServices.postPlayerByBosy(bodyValue);
        if(httpresponse){
        res.status(httpresponse.statusCode).json(httpresponse.body)
        }else{ 
        return badRequest();
        }
}

export const delPlayersById = async (req: express.Request, res: express.Response) => {

        const id = parseInt(req.params.id);
        const httpresponse = await playerServices.delPlayerDyId(id);
}


export const UpdatePlayersById = async (req: express.Request, res: express.Response) => {
        const id = parseInt(req.params.id);
        const body: statisticsplayerModel = req.body;
        const httpresponse = await playerServices.updatePlayersById(id,body);
        res.status(httpresponse.statusCode).json(httpresponse.body)
}
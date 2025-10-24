import { HttpResponse } from "../models/HttpModel";

export const ok = async (data:any): Promise<HttpResponse> =>{
    return {
        statusCode:200,
        body: data
    }
}

export const badRequest = async(): Promise<HttpResponse> => {
    return {
        statusCode:204,
        body: null,
    }
};
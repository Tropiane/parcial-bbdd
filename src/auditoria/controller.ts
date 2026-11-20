import {Request, Response} from 'express';

import AuditoriaService from "./service";

export default class AuditoriaController{

    private service = new AuditoriaService();

    async getAll(req: Request, res:Response){
        try{
            const response = await this.service.getAll();

            res.status(200).json(response)
        }catch{

        }
    }

}
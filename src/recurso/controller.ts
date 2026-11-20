import {Request, Response} from 'express';
import RecursoService from "./service";

export default class RecursoController{

    private service = new RecursoService();

    async getAll(req: Request, res: Response){
        try {
            const response = await this.service.getAll();
            res.status(200).json(response)
        } catch (error) {
            throw new Error(`Controller: Error al obtener los datos ${error}`)
        }
    }

}
import {Request, Response, Router} from 'express';
import RecursoController from './controller';

const router = Router();
const controller = new RecursoController();

router.get('/all', async(req: Request, res:Response)=>{ await controller.getAll(req, res)});
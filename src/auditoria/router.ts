import {Request, Response, Router} from 'express';
import AuditoriaController from './controller';

const router = Router();
const controller = new AuditoriaController();

router.get('/all', async (req: Request, res:Response)=>{
 await controller.getAll(req, res)
});

const auditoriaRouter = router;
export default auditoriaRouter;
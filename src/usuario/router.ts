import {Router, Request, Response} from 'express';
import UserController from './controller';
import { user } from './interface';
import {validarAdmin} from '../middlewares/validarTokens';

const router = Router();
const controller = new UserController();

router.get('/all',validarAdmin, (req: Request, res: Response) => controller.getAll(req, res));
router.post('/create', (req: Request<{},{}, user>, res: Response) => controller.create(req, res));
router.delete('/delete/:id', (req: Request<{id: number}>, res: Response) => controller.delete(req, res));
router.post('/login', (req: Request, res: Response) => controller.login(req, res));

const userRouter = router;
export default userRouter;
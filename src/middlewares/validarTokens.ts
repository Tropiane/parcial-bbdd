import {Request, Response, NextFunction} from 'express';
import { user } from '../usuario/interface';
import { verifyToken } from '../utils/jwt';
export const validarAdmin = async(req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.token;
    if(!token) return res.status(401).json({message: 'No estas autorizado'});
    const payload = verifyToken(token);
    
    if(typeof payload === 'string' || payload.rol !== 'Administrador') return res.status(401).json({message: 'No estas autorizado porque no eres administrador'});
    next();
}
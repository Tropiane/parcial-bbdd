import {Request, Response} from "express";
import UserService from "./service";
import {user} from "./interface";

export default class UserController {
    private userService = new UserService();

    async getAll(req: Request, res: Response) {
        try {
            const user = await this.userService.getAll();
            return res.json(user);
        } catch (error) {
            res.status(500).send(`Controller: Error al obtener usuarios: ${error}`);
        }
    }

    async create(req: Request<{},{}, user>, res: Response) {
        try {
            const user = await this.userService.create(req.body);
            return res.status(201).json({message: 'Usuario creado', user});
        } catch (error) {
            res.status(500).send(`Controller: Error al crear usuario: ${error}`);
        }
    }

    async delete(req: Request<{id: number}>, res: Response) {
        try {
            const user = await this.userService.delete(req.params.id);
            return res.status(200).json({message: 'Usuario eliminado', user});
        } catch (error) {
            res.status(500).send(`Controller: Error al eliminar usuario: ${error}`);
        }
    }

    async login(req: Request, res: Response) {
        try {
            //Con esta funcion lo que hacemos es validar que el usuario exista y que la contrasena sea correcta, de esta forma nos devuelve el JWT para poner en la cookie
            const token = await this.userService.login(req.body.correo, req.body.contrasena);
            if(!token){
                throw new Error(`Error al inciar sesion`);
            }

            //aca guardo la cookie que luego uso en cada endoint para verificar los datos del usuario, como es puramente practico, vas a ver que al validar el token aparece la contrasena y datos sensible, detalles
            res.cookie('token', token,{
                httpOnly: true,
                secure: true,
                sameSite: 'lax'
            });
            return res.status(200).json({message: 'Sesion iniciada', token});
        } catch (error) {
            res.status(500).send(`Controller: Error al iniciar sesion: ${error}`);
        }
    }
}
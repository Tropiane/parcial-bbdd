import UserDao from "./dao";
import { hashPassword, comparePassword } from "../utils/hash";
import { signToken } from "../utils/jwt";
import {user} from "./interface";

export default class UserService{
    private dao = new UserDao();

    async getAll(){
        return await this.dao.getAll();
    }

    async findEmail(correo:string){
        try {
            return await this.dao.findEmail(correo);
        } catch (error) {
            throw new Error(`service: Error al encontrar correo: ${error}`);
        }
    }

    async create(data:user){
        try {
            if(!data.nombre || !data.edad || !data.correo || !data.contrasena || !data.telefono){
                throw new Error('Faltan datos');
            }
            data.contrasena = hashPassword(data.contrasena);
            return await this.dao.create(data);
        } catch (error) {
            console.log(`service: Error al crear usuario: ${error}`);
            throw new Error(`service: Error al crear usuario: ${error}`);
        }
    }

    async delete(id:number){
        try {
            return await this.dao.delete(id);
        } catch (error) {
            throw new Error(`service: Error al eliminar usuario: ${error}`);
        }
    }

    async login(correo:string, contrasena:string){
        try {
            const user = await this.findEmail(correo);

            if(!user){
                throw new Error('El usuario no existe');
            }

            if(!comparePassword(contrasena, user[0].contrasena)){
                throw new Error('Contrasena incorrecta');
            }

            const token = signToken(user[0]);
            return token;
        } catch (error) {
            throw new Error(`service: Error al iniciar sesion: ${error}`);
        }
    }
}
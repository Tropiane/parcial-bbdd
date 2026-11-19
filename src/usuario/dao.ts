import pool from '../databases/postgres';
import {user} from './interface';

export default class UserDao{

    async getAll(){
        try {
            const response = await pool.query('SELECT * FROM usuario');
            return response.rows;
        } catch (error) {
            console.log(`dao: Error al obtener usuarios: ${error}`);
            throw new Error(`dao: Error al obtener usuarios: ${error}`);
        }
    }

    async findEmail(correo:string):Promise<user[]> {
        try {
            const response = await pool.query('SELECT * FROM usuario WHERE correo = $1', [correo]);
            return response.rows;
        } catch (error) {
            console.log(`dao: Error al obtener usuario por su correo: ${error}`);
            throw new Error(`dao: Error al obtener usuario por su correo: ${error}`);
        }
    }

    async create(data:user){
        try {
            const {nombre, edad, correo, contrasena, telefono} = data;
            const response = await pool.query('INSERT INTO usuario (nombre, edad, correo, contrasena, telefono) VALUES ($1, $2, $3, $4, $5)', [nombre, edad, correo, contrasena, telefono]);
            return response.rows;
        } catch (error) {
            console.log(`dao: Error al crear usuario: ${error}`);
            throw new Error(`dao: Error al crear usuario: ${error}`);
        }
    };

    async delete(id:number){
        try {
            const response = await pool.query('DELETE FROM usuario WHERE id = $1', [id]);
            return response.rows;
        } catch (error) {
            console.log(`dao: Error al eliminar usuario: ${error}`);
            throw new Error(`dao: Error al eliminar usuario: ${error}`);
        }
    }
}
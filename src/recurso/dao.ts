import pool from "../databases/postgres";

export default class RecursoDao{

    async getAll(){
       try{
         const response = await pool.query('select * from auditoria');
        if(!response){
            throw new Error(`Error al obtener los datos`)
        }
        return response;
       }catch(error){
        throw new Error(`Dao: Error al obtener los datos ${error}`)
       }
    }

}
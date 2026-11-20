import pool from "../databases/postgres";

export default class AuditoriaDao{

    async getAll(){
        try {
            const response = await pool.query('select * from auditoria;')
            return response.rows;
        } catch (error) {
            throw new Error(`Dao: Error al obtener auditorias: ${error}`)
        }
    }

}
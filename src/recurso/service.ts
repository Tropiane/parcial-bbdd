import RecursoDao from "./dao";


export default class RecursoService{

    private dao = new RecursoDao();

    async getAll(){
        try{
            return (await this.dao.getAll()).rows
        }catch(error){
            throw new Error(`Service: Error al obtener los datos ${error}`)
        }
    }

}
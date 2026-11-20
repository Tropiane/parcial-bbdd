import AuditoriaDao from "./dao";

export default class AuditoriaService{

    private dao = new AuditoriaDao();

    async getAll(){
        try {
            const response = await this.dao.getAll();
            if(!response){
                console.log(`service: Error al obtener la informacion`)
            }

            return response;
        } catch (error) {
            throw new Error(`Service: Error al obtener los datos ${error}`)
        }
    }

}
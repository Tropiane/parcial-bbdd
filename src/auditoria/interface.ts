

export default interface auditoria{
    id_usuario: number;
    fecha: Date;
    accion: string;
    detalles: string;
    entidad: string;
    id_entidad: number;
}
//Aqui se encuentra toda la configuracion de rutas, middlewares, puertos, conexiones a db y errores.
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import ENV from "./src/config/env";

import userRouter from "./src/usuario/router";
import auditoriaRouter from "./src/auditoria/router";

export class Server{
    private app: express.Application;

    constructor(){
        dotenv.config();
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(cookieParser());
    }

    routes(){
        this.app.use('/api/users', userRouter);
        this.app.use('/api/auditoria', auditoriaRouter);
    }

    listen(){
        this.app.listen(ENV.PORT, () => {
            console.log('Server running on port', ENV.PORT);
        });
    }
}
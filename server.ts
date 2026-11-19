//Aqui se encuentra toda la configuracion de rutas, middlewares, puertos, conexiones a db y errores.
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRouter from "./src/usuario/router";

export class Server{
    private app: express.Application;
    private port: string;

    constructor(){
        dotenv.config();
        this.app = express();
        this.port = process.env.PORT || '8000';
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
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Server running on port', this.port);
        });
    }
}
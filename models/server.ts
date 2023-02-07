import express, {Application} from "express";
import contratosRoutes from '../routes/contratos'
import cors from "cors";
import db from "../db/connectionVk"
import dbcontratos from "../db/connection";
import dbFactura from "../db/connectionFactura";
 class Server {




    private  app: Application;
    private port: string;
    private apiPaths = {
        contratos: '/api/contratos' 
    }

    constructor() {

        this.app = express();
        this.port =  process.env.PORT || '8008';
        this.dbContratoConnection();
        this.dbConnection();
        this.dbFacturcionConnection();
        this.middlewares();
        this.routes();
    }
    async dbFacturcionConnection(){
        try {
            await dbFactura.authenticate();
            console.log("base de datos online facturacion")
        } catch (error) {
            throw new Error('errores');
        }
    }
async dbContratoConnection(){
    try {
        await dbcontratos.authenticate();
        console.log("base de datos online contratos_")
    } catch (error) {
        throw new Error('errores');
    }
}

async dbConnection(){
    try {
        await db.authenticate();
        console.log("Base de datos on line vk")
    } catch (error) {
        throw new Error('errores');
    }
}
    middlewares (){

        //CORS
        this.app.use(cors());
        //LECTURA DEL BODY 
        this.app.use(express.json());
        //CARPETA PUBLICA 

    }
    routes(){
        this.app.use(this.apiPaths.contratos, contratosRoutes)
    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log("servidor corriendo en:_"+this.port)
        })
    }
}

export default  Server;
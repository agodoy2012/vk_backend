"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contratos_1 = __importDefault(require("../routes/contratos"));
const cors_1 = __importDefault(require("cors"));
const connectionVk_1 = __importDefault(require("../db/connectionVk"));
const connection_1 = __importDefault(require("../db/connection"));
const connectionFactura_1 = __importDefault(require("../db/connectionFactura"));
class Server {
    constructor() {
        this.apiPaths = {
            contratos: '/api/contratos'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8008';
        this.dbContratoConnection();
        this.dbConnection();
        this.dbFacturcionConnection();
        this.middlewares();
        this.routes();
    }
    dbFacturcionConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connectionFactura_1.default.authenticate();
                console.log("base de datos online facturacion");
            }
            catch (error) {
                throw new Error('errores');
            }
        });
    }
    dbContratoConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log("base de datos online contratos_");
            }
            catch (error) {
                throw new Error('errores');
            }
        });
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connectionVk_1.default.authenticate();
                console.log("Base de datos on line vk");
            }
            catch (error) {
                throw new Error('errores');
            }
        });
    }
    middlewares() {
        //CORS
        this.app.use((0, cors_1.default)());
        //LECTURA DEL BODY 
        this.app.use(express_1.default.json());
        //CARPETA PUBLICA 
    }
    routes() {
        this.app.use(this.apiPaths.contratos, contratos_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("servidor corriendo en:_" + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map
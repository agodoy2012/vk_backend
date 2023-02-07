"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectionVk_1 = __importDefault(require("../db/connectionVk"));
const Vk = connectionVk_1.default.define('contratos', {
    CCA_NUMERO_CASO: {
        type: sequelize_1.DataTypes.NUMBER
    },
    CCA_FECHA_LIMITE: {
        type: sequelize_1.DataTypes.DATE
    },
    CCA_FECHA_INICIO: {
        type: sequelize_1.DataTypes.DATE
    },
    NOMBRE_CLIENTE: {
        type: sequelize_1.DataTypes.STRING
    },
    CCA_COMENTARIO: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
    tableName: 'CAS_CASOS_CABECERA'
});
exports.default = Vk;
//# sourceMappingURL=vk.js.map
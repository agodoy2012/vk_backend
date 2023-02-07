"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectionFactura_1 = __importDefault(require("../db/connectionFactura"));
const Factura = connectionFactura_1.default.define('faturas', {
    codigo: {
        type: sequelize_1.DataTypes.STRING
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING
    },
    fecha: {
        type: sequelize_1.DataTypes.STRING
    },
    valor: {
        type: sequelize_1.DataTypes.INET
    },
    tipo: {
        type: sequelize_1.DataTypes.STRING
    },
    estado: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
    tableName: 'facturaciones'
});
Factura.removeAttribute('id');
exports.default = Factura;
//# sourceMappingURL=facturacion.js.map
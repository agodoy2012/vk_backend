"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const contratos = connection_1.default.define('contratos', {
    ID: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    Proveedor: {
        type: sequelize_1.DataTypes.STRING
    },
    FechaVencimiento: {
        type: sequelize_1.DataTypes.DATE
    },
    Date: {
        type: sequelize_1.DataTypes.DATE
    }
}, {
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
    tableName: 'Cases'
});
exports.default = contratos;
//# sourceMappingURL=contratos.js.map
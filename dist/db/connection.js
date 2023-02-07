"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbContratos = new sequelize_1.Sequelize('CONTRATOS', 'tiempos', 'tiempos', {
    host: '200.74.250.106',
    dialect: 'mssql',
});
exports.default = dbContratos;
//# sourceMappingURL=connection.js.map
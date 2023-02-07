"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbFactura = new sequelize_1.Sequelize('vk_facturacion', 'agodoy', 'Al$j4ndr060g0y', {
    host: '10.123.0.128',
    dialect: 'mssql',
});
exports.default = dbFactura;
//# sourceMappingURL=connectionFactura.js.map
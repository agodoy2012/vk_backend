"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbVk = new sequelize_1.Sequelize('SEGUIMIENTO_CASOS', 'sqlservice', 'Passw0rd01', {
    host: '200.74.250.96',
    dialect: 'mssql',
});
exports.default = dbVk;
//# sourceMappingURL=connectionVk.js.map
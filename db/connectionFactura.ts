import { Sequelize } from "sequelize";


const dbFactura = new Sequelize('vk_facturacion','agodoy','Al$j4ndr060g0y',{
    host: '10.123.0.128',
    dialect: 'mssql',

})

export default dbFactura
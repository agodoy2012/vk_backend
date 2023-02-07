import { Sequelize } from "sequelize";


const dbContratos = new Sequelize('CONTRATOS','tiempos','tiempos',{
    host: '200.74.250.106',
    dialect: 'mssql',

})

export default dbContratos
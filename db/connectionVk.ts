import { Sequelize } from "sequelize";


const dbVk = new Sequelize('SEGUIMIENTO_CASOS','sqlservice','Passw0rd01',{
    host: '200.74.250.96',
    dialect: 'mssql',
  
})

export default dbVk
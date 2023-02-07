import {DataTypes} from 'sequelize';
import dbContratos from '../db/connection';

const contratos =  dbContratos.define('contratos',{
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    Proveedor: {
        type: DataTypes.STRING
    },
    FechaVencimiento:{
        type: DataTypes.DATE
    },
    Date:{
        type: DataTypes.DATE
    }
},{
    // If don't want createdAt
createdAt: false,

// If don't want updatedAt
updatedAt: false,
tableName: 'Cases'
})
export default contratos;

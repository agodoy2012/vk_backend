import {DataTypes} from 'sequelize';
import dbFactura from '../db/connectionFactura';

const Factura = dbFactura.define('faturas',{
    codigo: {
        type: DataTypes.STRING
    },
  
    descripcion:{
        type: DataTypes.STRING 
    },    
    fecha:{
        type: DataTypes.STRING
    },     
    valor: {
        type: DataTypes.INET
    },
    tipo:{
        type: DataTypes.STRING
    },    
    estado:{
        type: DataTypes.STRING
    }
   
},{
    // If don't want createdAt
createdAt: false,

// If don't want updatedAt
updatedAt: false,
tableName: 'facturaciones'
});
Factura.removeAttribute('id');
export default Factura;

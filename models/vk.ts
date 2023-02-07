import {DataTypes} from 'sequelize';
import dbVk from '../db/connectionVk';

const Vk = dbVk.define('contratos',{
    CCA_NUMERO_CASO: {
        type: DataTypes.NUMBER
    },
  
    CCA_FECHA_LIMITE:{
        type: DataTypes.DATE
    },
    CCA_FECHA_INICIO:{
        type: DataTypes.DATE
    },
    NOMBRE_CLIENTE: {
        type: DataTypes.STRING
    },
    CCA_COMENTARIO:{
        type: DataTypes.STRING
    }
},{
    // If don't want createdAt
createdAt: false,

// If don't want updatedAt
updatedAt: false,
tableName: 'CAS_CASOS_CABECERA'
});
export default Vk;

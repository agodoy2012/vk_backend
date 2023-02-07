import { Request, Response } from "express";
import contratos from "../models/contratos";
import Vk from "../models/vk";
import { QueryTypes } from 'sequelize';
import Factura from "../models/facturacion";


export const getContratos = async (req: Request, res: Response)=>{

    const contrato  = await contratos.sequelize?.query('SELECT ID,Proveedor,FechaVencimiento,Date FROM Cases',{
        type: QueryTypes.SELECT
    });
        res.json(contrato)
}

//para obtener cualquier facturas por tipo
export const getFacturasVk = async (req: Request, res: Response)=>{
    const {id} = req.params;
    const contrato  = await Factura.sequelize?.query("SELECT * FROM facturaciones where tipo = :id and estado = '1'",{
        replacements: {id: `${id}` },
        type: QueryTypes.SELECT
    });
        res.json(contrato)
}
export const getFacturasFechas = async (req: Request, res: Response)=>{
    const {fechin,fechfin,tipo} = req.params;
    const contrato  = await Factura.sequelize?.query("SELECT * FROM facturaciones where fecha > :fechin and fecha < :fechfin and estado = '1' and tipo = :tipo",{
        replacements: {fechin: `${fechin}`,fechfin: `${fechfin}`,tipo: `${tipo}` },
        type: QueryTypes.SELECT
    });
        res.json(contrato)
}
export const getFacturasFechasTotal = async (req: Request, res: Response)=>{
    const {fechin,fechfin,tipo} = req.params;
    const contrato  = await Factura.sequelize?.query("SELECT SUM(valor) as total FROM facturaciones where fecha > :fechin and fecha < :fechfin and estado = '1' and tipo = :tipo",{
        replacements: {fechin: `${fechin}`,fechfin: `${fechfin}`,tipo: `${tipo}` },
        type: QueryTypes.SELECT
    });
        res.json(contrato)
}

export const getFacturasDetalle = async (req: Request, res: Response)=>{
    const {id,tipo} = req.params;
    const contrato  = await Factura.sequelize?.query("SELECT * FROM facturaciones where codigo = :id and estado = '1' and tipo=:tipo",{
        replacements: {id: `${id}`,tipo: `${tipo}` },
        type: QueryTypes.SELECT
    });
        res.json(contrato)
}
export const getFacturasTotal = async (req: Request, res: Response)=>{
    const {id} = req.params;
    const contrato  = await Factura.sequelize?.query("SELECT SUM(valor) AS total FROM facturas where tipo = :id and estado = '1'",{
        replacements: {id: `${id}` },
        type: QueryTypes.SELECT
    });
        res.json(contrato)
}
export const getFacturasTotalDetalle = async (req: Request, res: Response)=>{
    const {id,tipo} = req.params;
   
    const contrato  = await Factura.sequelize?.query("SELECT SUM(valor) AS total FROM facturaciones where codigo = :id and estado = '1' and tipo = :tipo",{
        replacements: {id: `${id}`,tipo: `${tipo}` },
        
        type: QueryTypes.SELECT
    });
        res.json(contrato)
}


export const getContratosid = async (req: Request, res: Response)=>{
    const {id} = req.params;

    const contrato  = await contratos.sequelize?.query('SELECT ID,Proveedor,FechaVencimiento,Date FROM Cases where id = :id',{
        replacements: {id: `${id}` },
        type: QueryTypes.SELECT
    });
        res.json(contrato)
}
export const getContratosVK = async (req: Request, res: Response)=>{
    const contratosVk  = await Vk.sequelize?.query("SELECT CCA_NUMERO_CASO, CCA_FECHA_LIMITE,CCA_FECHA_INICIO,NOMBRE_CLIENTE,CCA_COMENTARIO FROM CAS_CASOS_CABECERA where NOMBRE_CLIENTE <> 'null' and NOMBRE_CLIENTE <> ''",{
        type: QueryTypes.SELECT
    });
        res.json(contratosVk)
    }
    export const getContratosVKid = async (req: Request, res: Response)=>{
        const {id} = req.params;
        const contratosVk  = await Vk.sequelize?.query("SELECT CCA_NUMERO_CASO, CCA_FECHA_LIMITE,CCA_FECHA_INICIO,NOMBRE_CLIENTE,CCA_COMENTARIO FROM CAS_CASOS_CABECERA where NOMBRE_CLIENTE <> 'null' and NOMBRE_CLIENTE <> '' and CCA_NUMERO_CASO= :id",{
            replacements: {id: `${id}` },
            type: QueryTypes.SELECT
        });
            res.json(contratosVk)
        }


    export const getContratosFacturacion = async (req: Request, res: Response)=>{
        const contratosVk  = await Vk.sequelize?.query('SELECT CCA_NUMERO_CASO, CCA_FECHA_LIMITE,CCA_FECHA_INICIO,NOMBRE_CLIENTE,CCA_COMENTARIO FROM CAS_CASOS_CABECERA');
            res.json(contratosVk)
        }
        export const getContratosVKFacturacion = async (req: Request, res: Response)=>{
            const contratosVk  = await Vk.sequelize?.query('SELECT CCA_NUMERO_CASO, CCA_FECHA_LIMITE,CCA_FECHA_INICIO,NOMBRE_CLIENTE,CCA_COMENTARIO FROM CAS_CASOS_CABECERA');
                res.json(contratosVk)
            }


    export const postFacturas = async (req: Request, res: Response)=>{
            const { body } = req;
            try {
              const factura =  Factura.build(body);
                await factura.save()
                res.json(factura)   
            } catch (error) {
                res.json({
                    msg:'Contactar con soporte',body
                })
            }
         
        }
       
            export const deleteContratosFacturacion = async (req: Request, res: Response)=>{
        const {id} = req.params;
        const contrato  = await Factura.sequelize?.query("UPDATE facturaciones SET estado = '0' where id = :id",{
            replacements: {id: `${id}` },
            type: QueryTypes.UPDATE
        });
            res.json(contrato)
            }


            //// ya no se utiliz 
            export const deleteContratosVKFacturacion = (req: Request, res: Response)=>{
        const {id} = req.params;
            res.json({
                msg: 'postusuariosVK'
            })    
            }

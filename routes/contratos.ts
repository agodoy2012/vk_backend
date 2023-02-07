import {Router} from "express"
import { deleteContratosFacturacion, deleteContratosVKFacturacion, getContratos, getContratosid, getContratosVK, getContratosVKid, getFacturasDetalle, getFacturasFechas, getFacturasFechasTotal, getFacturasTotal, getFacturasTotalDetalle, getFacturasVk, postFacturas,  } from '../controllers/contratos';
const router = Router();

router.get('/contratos',                                  getContratos);
router.get('/vk',                                         getContratosVK);
router.get('/contratos/:id',                              getContratosid)
router.get('/vk/:id',                                     getContratosVKid);
router.get('/facturas/vk/:id',                            getFacturasVk);
router.get('/facturas/detalle/:id/:tipo',                 getFacturasDetalle);
router.get('/facturas/total/:id',                         getFacturasTotal);
router.get('/facturas/total/detalle/:id/:tipo',           getFacturasTotalDetalle);
router.get('/facturas/fecha/:fechin/:fechfin/:tipo',      getFacturasFechas);
router.get('/facturas/fecha/total/:fechin/:fechfin/:tipo',getFacturasFechasTotal)
router.post('/facturas',                                  postFacturas);

router.delete('/facturacion/contratos/:id',               deleteContratosFacturacion);
router.delete('/facturacion/vk/:id',                      deleteContratosVKFacturacion);
 


export default router;
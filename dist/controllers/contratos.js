"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteContratosVKFacturacion = exports.deleteContratosFacturacion = exports.postFacturas = exports.getContratosVKFacturacion = exports.getContratosFacturacion = exports.getContratosVKid = exports.getContratosVK = exports.getContratosid = exports.getFacturasTotalDetalle = exports.getFacturasTotal = exports.getFacturasDetalle = exports.getFacturasFechasTotal = exports.getFacturasFechas = exports.getFacturasVk = exports.getContratos = void 0;
const contratos_1 = __importDefault(require("../models/contratos"));
const vk_1 = __importDefault(require("../models/vk"));
const sequelize_1 = require("sequelize");
const facturacion_1 = __importDefault(require("../models/facturacion"));
const getContratos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const contrato = yield ((_a = contratos_1.default.sequelize) === null || _a === void 0 ? void 0 : _a.query('SELECT ID,Proveedor,FechaVencimiento,Date FROM Cases', {
        type: sequelize_1.QueryTypes.SELECT
    }));
    res.json(contrato);
});
exports.getContratos = getContratos;
//para obtener cualquier facturas por tipo
const getFacturasVk = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const { id } = req.params;
    const contrato = yield ((_b = facturacion_1.default.sequelize) === null || _b === void 0 ? void 0 : _b.query("SELECT * FROM facturaciones where tipo = :id and estado = '1'", {
        replacements: { id: `${id}` },
        type: sequelize_1.QueryTypes.SELECT
    }));
    res.json(contrato);
});
exports.getFacturasVk = getFacturasVk;
const getFacturasFechas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    const { fechin, fechfin, tipo } = req.params;
    const contrato = yield ((_c = facturacion_1.default.sequelize) === null || _c === void 0 ? void 0 : _c.query("SELECT * FROM facturaciones where fecha > :fechin and fecha < :fechfin and estado = '1' and tipo = :tipo", {
        replacements: { fechin: `${fechin}`, fechfin: `${fechfin}`, tipo: `${tipo}` },
        type: sequelize_1.QueryTypes.SELECT
    }));
    res.json(contrato);
});
exports.getFacturasFechas = getFacturasFechas;
const getFacturasFechasTotal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _d;
    const { fechin, fechfin, tipo } = req.params;
    const contrato = yield ((_d = facturacion_1.default.sequelize) === null || _d === void 0 ? void 0 : _d.query("SELECT SUM(valor) as total FROM facturaciones where fecha > :fechin and fecha < :fechfin and estado = '1' and tipo = :tipo", {
        replacements: { fechin: `${fechin}`, fechfin: `${fechfin}`, tipo: `${tipo}` },
        type: sequelize_1.QueryTypes.SELECT
    }));
    res.json(contrato);
});
exports.getFacturasFechasTotal = getFacturasFechasTotal;
const getFacturasDetalle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _e;
    const { id, tipo } = req.params;
    const contrato = yield ((_e = facturacion_1.default.sequelize) === null || _e === void 0 ? void 0 : _e.query("SELECT * FROM facturaciones where codigo = :id and estado = '1' and tipo=:tipo", {
        replacements: { id: `${id}`, tipo: `${tipo}` },
        type: sequelize_1.QueryTypes.SELECT
    }));
    res.json(contrato);
});
exports.getFacturasDetalle = getFacturasDetalle;
const getFacturasTotal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _f;
    const { id } = req.params;
    const contrato = yield ((_f = facturacion_1.default.sequelize) === null || _f === void 0 ? void 0 : _f.query("SELECT SUM(valor) AS total FROM facturas where tipo = :id and estado = '1'", {
        replacements: { id: `${id}` },
        type: sequelize_1.QueryTypes.SELECT
    }));
    res.json(contrato);
});
exports.getFacturasTotal = getFacturasTotal;
const getFacturasTotalDetalle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _g;
    const { id, tipo } = req.params;
    const contrato = yield ((_g = facturacion_1.default.sequelize) === null || _g === void 0 ? void 0 : _g.query("SELECT SUM(valor) AS total FROM facturaciones where codigo = :id and estado = '1' and tipo = :tipo", {
        replacements: { id: `${id}`, tipo: `${tipo}` },
        type: sequelize_1.QueryTypes.SELECT
    }));
    res.json(contrato);
});
exports.getFacturasTotalDetalle = getFacturasTotalDetalle;
const getContratosid = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _h;
    const { id } = req.params;
    const contrato = yield ((_h = contratos_1.default.sequelize) === null || _h === void 0 ? void 0 : _h.query('SELECT ID,Proveedor,FechaVencimiento,Date FROM Cases where id = :id', {
        replacements: { id: `${id}` },
        type: sequelize_1.QueryTypes.SELECT
    }));
    res.json(contrato);
});
exports.getContratosid = getContratosid;
const getContratosVK = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _j;
    const contratosVk = yield ((_j = vk_1.default.sequelize) === null || _j === void 0 ? void 0 : _j.query("SELECT CCA_NUMERO_CASO, CCA_FECHA_LIMITE,CCA_FECHA_INICIO,NOMBRE_CLIENTE,CCA_COMENTARIO FROM CAS_CASOS_CABECERA where NOMBRE_CLIENTE <> 'null' and NOMBRE_CLIENTE <> ''", {
        type: sequelize_1.QueryTypes.SELECT
    }));
    res.json(contratosVk);
});
exports.getContratosVK = getContratosVK;
const getContratosVKid = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _k;
    const { id } = req.params;
    const contratosVk = yield ((_k = vk_1.default.sequelize) === null || _k === void 0 ? void 0 : _k.query("SELECT CCA_NUMERO_CASO, CCA_FECHA_LIMITE,CCA_FECHA_INICIO,NOMBRE_CLIENTE,CCA_COMENTARIO FROM CAS_CASOS_CABECERA where NOMBRE_CLIENTE <> 'null' and NOMBRE_CLIENTE <> '' and CCA_NUMERO_CASO= :id", {
        replacements: { id: `${id}` },
        type: sequelize_1.QueryTypes.SELECT
    }));
    res.json(contratosVk);
});
exports.getContratosVKid = getContratosVKid;
const getContratosFacturacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _l;
    const contratosVk = yield ((_l = vk_1.default.sequelize) === null || _l === void 0 ? void 0 : _l.query('SELECT CCA_NUMERO_CASO, CCA_FECHA_LIMITE,CCA_FECHA_INICIO,NOMBRE_CLIENTE,CCA_COMENTARIO FROM CAS_CASOS_CABECERA'));
    res.json(contratosVk);
});
exports.getContratosFacturacion = getContratosFacturacion;
const getContratosVKFacturacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _m;
    const contratosVk = yield ((_m = vk_1.default.sequelize) === null || _m === void 0 ? void 0 : _m.query('SELECT CCA_NUMERO_CASO, CCA_FECHA_LIMITE,CCA_FECHA_INICIO,NOMBRE_CLIENTE,CCA_COMENTARIO FROM CAS_CASOS_CABECERA'));
    res.json(contratosVk);
});
exports.getContratosVKFacturacion = getContratosVKFacturacion;
const postFacturas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const factura = facturacion_1.default.build(body);
        yield factura.save();
        res.json(factura);
    }
    catch (error) {
        res.json({
            msg: 'Contactar con soporte', body
        });
    }
});
exports.postFacturas = postFacturas;
const deleteContratosFacturacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _o;
    const { id } = req.params;
    const contrato = yield ((_o = facturacion_1.default.sequelize) === null || _o === void 0 ? void 0 : _o.query("UPDATE facturaciones SET estado = '0' where id = :id", {
        replacements: { id: `${id}` },
        type: sequelize_1.QueryTypes.UPDATE
    }));
    res.json(contrato);
});
exports.deleteContratosFacturacion = deleteContratosFacturacion;
//// ya no se utiliz 
const deleteContratosVKFacturacion = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'postusuariosVK'
    });
};
exports.deleteContratosVKFacturacion = deleteContratosVKFacturacion;
//# sourceMappingURL=contratos.js.map
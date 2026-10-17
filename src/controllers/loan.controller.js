"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanController = void 0;
class LoanController {
    static getLoansByFilter(_req, res) {
        res.status(501).json({
            status: 'not_implemented',
            message: 'La búsqueda de préstamos está pendiente de implementación.'
        });
    }
    static createLoan(_req, res) {
        res.status(501).json({
            status: 'not_implemented',
            message: 'El registro de préstamos está pendiente de implementación.'
        });
    }
    static acceptLoanInventory(_req, res) {
        res.status(501).json({
            status: 'not_implemented',
            message: 'La aceptación del inventario está pendiente de implementación.'
        });
    }
    static getLoanById(_req, res) {
        res.status(501).json({
            status: 'not_implemented',
            message: 'La consulta del préstamo está pendiente de implementación.'
        });
    }
}
exports.LoanController = LoanController;

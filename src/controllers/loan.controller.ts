
import { Request, Response } from 'express';

export class LoanController {
  static getLoansByFilter(_req: Request, res: Response): void {
    res.status(501).json({
      status: 'not_implemented',
      message: 'La búsqueda de préstamos está pendiente de implementación.'
    });
  }

  static createLoan(_req: Request, res: Response): void {
    res.status(501).json({
      status: 'not_implemented',
      message: 'El registro de préstamos está pendiente de implementación.'
    });
  }

  static acceptLoanInventory(_req: Request, res: Response): void {
    res.status(501).json({
      status: 'not_implemented',
      message: 'La aceptación del inventario está pendiente de implementación.'
    });
  }

  static getLoanById(_req: Request, res: Response): void {
    res.status(501).json({
      status: 'not_implemented',
      message: 'La consulta del préstamo está pendiente de implementación.'
    });
  }
}

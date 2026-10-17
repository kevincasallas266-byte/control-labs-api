import { Request, Response } from 'express';

export class DashboardController {
  public static getSummary = (_req: Request, res: Response): void => {
    res.status(501).json({
      success: true,
      data: {
        usuarios: 0,
        ambientesActivos: 0,
        equiposOperativos: 0,
        novedadesCriticas: 0
      }
    });
  };
}
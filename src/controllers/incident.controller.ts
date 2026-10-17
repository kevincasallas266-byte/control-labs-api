import { Request, Response } from 'express';

export class IncidentController {
  public static getIncidents = (_req: Request, res: Response): void => {
    res.status(501).json({ success: false, message: 'Historial de novedades no implementado.' });
  };

  public static createIncident = (req: Request, res: Response): void => {
    res.status(501).json({
       success: false,
        message: 'Novedad no creada .' 
    });
  };

  public static updateIncident = (req: Request, res: Response): void => {
    const{id} = req.params;
    res.status(501).json({
      success: false,
      message: `Actualización parcial de la novedad no creada ${id}.`,
    });
  };
}
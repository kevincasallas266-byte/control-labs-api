import { Request, Response } from 'express';

export class IncidentController {
  public static getIncidents = (_req: Request, res: Response): void => {
    res.status(200).json({ success: true, message: 'Historial de novedades.' });
  };

  public static createIncident = (req: Request, res: Response): void => {
    res.status(201).json({ success: true, message: 'Novedad creada.', data: req.body });
  };

  public static updateIncident = (req: Request, res: Response): void => {
    res.status(200).json({
      success: true,
      message: `Actualización parcial de la novedad ${req.params.id}.`,
      data: req.body
    });
  };
}
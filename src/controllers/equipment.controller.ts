import { Request, Response } from 'express';

export class EquipmentController {
  public static getEquipment = (req: Request, res: Response): void => {
    res.status(200).json({
      success: true,
      message: 'Listado de equipos.',
      filter: req.query
    });
  };

  public static createEquipment = (req: Request, res: Response): void => {
    res.status(201).json({ success: true, message: 'Equipo registrado.', data: req.body });
  };

  public static updateEquipment = (req: Request, res: Response): void => {
    res.status(200).json({
      success: true,
      message: `Actualización parcial del equipo ${req.params.id}.`,
      data: req.body
    });
  };
}
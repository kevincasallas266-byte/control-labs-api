import { Request, Response } from 'express';

export class EquipmentController {
  public static getEquipment = (req: Request, res: Response): void => {
    res.status(501).json({
      success: false,
      message: 'Listado de equipos.',
      filter: req.query
    });
  };

  public static createEquipment = (req: Request, res: Response): void => {
    res.status(501).json({ success: false, 
      message: 'Equipo registrado.',
    });
  };

  public static updateEquipment = (req: Request, res: Response): void => {
    const{id}=req.params;
    res.status(501).json({
      success: false,
      message: ` LA Actualización parcial del equipo ${id} .`,
      
    });
  };
}
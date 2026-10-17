import { Request, Response } from 'express';

export class EnvironmentController {
  public static getEnvironments = (_req: Request, res: Response): void => {
    res.status(200).json({ success: true, message: 'Listado de ambientes.' });
  };

  public static createEnvironment = (req: Request, res: Response): void => {
    res.status(201).json({ success: true, message: 'Ambiente creado.', data: req.body });
  };

  public static updateEnvironment = (req: Request, res: Response): void => {
    res.status(200).json({
      success: true,
      message: `Actualización parcial del ambiente ${req.params.id}.`,
      data: req.body
    });
  };
}
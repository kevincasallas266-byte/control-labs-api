import { Request, Response } from 'express';

export class EnvironmentController {
  public static getEnvironments = (_req: Request, res: Response): void => {
    res.status(501).json({ success: false, message: 'El registro de ambientr no esta implementado.' });
  };

  public static createEnvironment = (req: Request, res: Response): void => {
    res.status(501).json({ success: true, message: 'Ambiente creado.', data: req.body });
  };

  public static updateEnvironment = (req: Request, res: Response): void => {
    res.status(200).json({
      success: true,
      message: `Actualización parcial del ambiente ${req.params.id}.`,
      data: req.body
    });
  };
}
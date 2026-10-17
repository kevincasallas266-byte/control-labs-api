import { Request, Response } from 'express';

export class EnvironmentController {
  public static getEnvironments = (_req: Request, res: Response): void => {
    res.status(501).json({ 
    success: false, 
    message: 'El registro de ambiente no esta implementado.' });
  };

  public static createEnvironment = (req: Request, res: Response): void => {
    res.status(501).json({ 
      success: false, 
      message: 'La creacion de ambiente ${id} no esta implementada.'
    });
  };


  public static updateEnvironment = (req: Request, res: Response): void => {
    const{id}=req.params;
    res.status(501).json({
      success: false,
      message: `Actualización del ambiente ${id} no esta implementada.`,
      });
  };
}
import { Request, Response } from 'express';

export class UserController {
  public static getUsers = (_req: Request, res: Response): void => {
    res.status(200).json({ success: true, message: 'Listado de usuarios.' });
  };

  public static createUser = (req: Request, res: Response): void => {
    res.status(201).json({ success: true, message: 'Usuario registrado.', data: req.body });
  };

  public static getUserById = (req: Request, res: Response): void => {
    res.status(200).json({ success: true, message: `Usuario ${req.params.id}.` });
  };

  public static updateUser = (req: Request, res: Response): void => {
    res.status(200).json({
      success: true,
      message: `Actualización parcial del usuario ${req.params.id}.`,
      data: req.body
    });
  };

  public static deleteUser = (req: Request, res: Response): void => {
    res.status(200).json({ success: true, message: `Usuario ${req.params.id} eliminado lógicamente.` });
  };
}
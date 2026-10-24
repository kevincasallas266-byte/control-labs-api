import { Request, Response, NextFunction } from 'express';
import { ICreateAmbienteDTO } from '../dtos/ambiente.dto';

const isCreateAmbienteDTO = (value: unknown): value is ICreateAmbienteDTO => {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    return false;
  }

  const ambiente = value as Record<string, unknown>;
  return (
    typeof ambiente.nombre === 'string' && ambiente.nombre.trim() !== '' &&
    typeof ambiente.ubicacion === 'string' && ambiente.ubicacion.trim() !== '' &&
    typeof ambiente.capacidad === 'number' && Number.isInteger(ambiente.capacidad)
  );
};

export const validateAmbientePayload = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const body: unknown = req.body;

  if (!isCreateAmbienteDTO(body)) {
    res.status(400).json({
      success: false,
      error: 'Datos del ambiente inválidos.'
    });
    return;
  }

  next();
};
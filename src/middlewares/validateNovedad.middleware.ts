import { Request, Response, NextFunction } from 'express';
import { ICreateNovedadDTO } from '../dtos/novedad.dto';

const isCreateNovedadDTO = (value: unknown): value is ICreateNovedadDTO => {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    return false;
  }

  const novedad = value as Record<string, unknown>;
  return (
    typeof novedad.descripcion === 'string' && novedad.descripcion.trim() !== '' &&
    typeof novedad.tipo === 'string' && novedad.tipo.trim() !== '' &&
    typeof novedad.ambienteId === 'number' && Number.isInteger(novedad.ambienteId) &&
    typeof novedad.equipoId === 'number' && Number.isInteger(novedad.equipoId)
  );
};

export const validateNovedadPayload = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const body: unknown = req.body;

  if (!isCreateNovedadDTO(body)) {
    res.status(400).json({
      success: false,
      error: 'Datos de la novedad inválidos.'
    });
    return;
  }

  next();
};
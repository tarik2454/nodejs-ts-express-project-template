import { Request, Response } from 'express';
import fs from 'fs/promises';
import path from 'path';

const filePath = path.resolve('db', 'events.json');

export const getAllEvents = async (req: Request, res: Response) => {
  const data = await fs.readFile(filePath, 'utf8');
  return JSON.parse(data);
};

export const getOneEvent = (req: Request, res: Response) => {
  // ваш код
};

export const deleteEvent = (req: Request, res: Response) => {
  // ваш код
};

export const createEvent = (req: Request, res: Response) => {
  // ваш код
};

export const updateEvent = (req: Request, res: Response) => {
  // ваш код
};

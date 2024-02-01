import express, { Request, Response, NextFunction, Application } from 'express';
import path from 'path';

import { recordCollection } from '../mocks/record-mocks';
import { Record } from '../types/types';

const PORT: number = 3000;

const app: Application = express();

app.get('/records', (req: Request, res: Response<Record[]>): void => {
  res.json(recordCollection);
});

app.use(express.static(path.join(__dirname, '../../public'), {index: false}));

app.get('*', (req: Request, res: Response<string>, next: NextFunction): void => {
  try {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  } catch (e) {
    next(e);
  }
});

app.listen(PORT, (): void => {
  console.log(`App listening on port ${PORT}`);
});
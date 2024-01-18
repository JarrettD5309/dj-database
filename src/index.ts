import express, { Request, Response, NextFunction, Application } from 'express';
import path from 'path';

import { recordCollection } from '../mocks/record-mocks';
import { record } from '../types/types';

const PORT: number = 3000;

const app: Application = express();

app.get('/records', (req: Request, res: Response<record[]>): void => {
  res.json(recordCollection);
});

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req: Request, res: Response<string>, next: NextFunction): void => {
  try {
    res.send("index.html");
  } catch (e) {
    next(e);
  }
});

app.listen(PORT, (): void => {
  console.log(`App listening on port ${PORT}`);
});
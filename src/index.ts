import express, { Request, Response, NextFunction, Application } from 'express';
import path from 'path';

import { trackCollection } from '../mocks/record-mocks';
import { Track } from '../types/classes';

const PORT: number = 3000;

const app: Application = express();

app.get('/tracks', (req: Request, res: Response<Track[]>): void => {
  res.json(trackCollection);
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
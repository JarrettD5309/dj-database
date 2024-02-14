import express, { Request, Response, NextFunction, Application } from 'express';
import path from 'path';

import { trackCollection } from '../mocks/record-mocks';
import { Track } from '../shared/classes';
import { DJColumn, Direction } from '../shared/types';

const PORT: number = 3000;

const app: Application = express();

app.get('/tracks', (req: Request, res: Response<Track[]>): void => {
  res.json(trackCollection);
});

app.get('/sort', (req: Request<{column: string, direction: string}>, res: Response<Track[]>): void => {
  const sortColumn = req.query.column;
  const sortDirection = req.query.direction;
  let sortedRes: Track[] = [];

  if(sortColumn === DJColumn.Artist || sortColumn === DJColumn.SongTitle) {
    if(sortDirection === Direction.Acsend) {
      sortedRes = [...trackCollection].sort((a, b) => a[sortColumn].localeCompare(b[sortColumn], 'en', {'sensitivity': 'base'}));
    } else {
      sortedRes = [...trackCollection].sort((a, b) => b[sortColumn].localeCompare(a[sortColumn], 'en', {'sensitivity': 'base'}));
    }
  } else if(sortColumn === DJColumn.BPM) {
    if(sortDirection === Direction.Acsend) {
      sortedRes = [...trackCollection].sort((a, b) => a.bpm-b.bpm);
    } else {
      sortedRes = [...trackCollection].sort((a, b) => b.bpm-a.bpm);
    }
  }

  res.json(sortedRes);
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
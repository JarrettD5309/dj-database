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

app.get('/search', (req: Request<{ genre: string}>, res: Response<Track[]>): void => {
  const searchGenre: string = req.query.genre as string;

  const genreTracks = trackCollection.filter((element: Track) => element.genres.indexOf(searchGenre) !== -1);

  res.json(genreTracks);
});

app.get('/sort', (req: Request<{ column: string, direction: string, genre: string }>, res: Response<Track[]>): void => {
  const sortColumn = req.query.column;
  const sortDirection = req.query.direction;
  const sortGenre = req.query.genre as string;
  let sortedRes: Track[] = [];

  const genreTracks =  
    sortGenre ? 
      trackCollection.filter((element: Track) => element.genres.indexOf(sortGenre) !== -1) :
      [...trackCollection];
 

  if (sortColumn === DJColumn.Artist || sortColumn === DJColumn.SongTitle) {
    if (sortDirection === Direction.Ascend) {
      sortedRes = [...genreTracks].sort((a, b) => a[sortColumn].localeCompare(b[sortColumn], 'en', { 'sensitivity': 'base' }));
    } else {
      sortedRes = [...genreTracks].sort((a, b) => b[sortColumn].localeCompare(a[sortColumn], 'en', { 'sensitivity': 'base' }));
    }
  } else if (sortColumn === DJColumn.BPM) {
    if (sortDirection === Direction.Ascend) {
      sortedRes = [...genreTracks].sort((a, b) => a.bpm - b.bpm);
    } else {
      sortedRes = [...genreTracks].sort((a, b) => b.bpm - a.bpm);
    }
  }

  res.json(sortedRes);
});

app.get('/genres', (req: Request, res: Response<string[]>): void => {
  const genresArr: (string | string[])[] = [];

  trackCollection.forEach((element: Track) => genresArr.push(element.genres));

  const uniqueGenreArr = genresArr.flat()
    .filter((genreElement: string, i: number, array: string[]) => array.indexOf(genreElement) === i);

  res.json(uniqueGenreArr);
});

app.use(express.static(path.join(__dirname, '../../public'), { index: false }));

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
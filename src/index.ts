import express, { Request, Response, NextFunction } from 'express';
import path from 'path';

const PORT = 3000;

const app = express();

app.get('/records', (req: Request, res: Response): void => {
  const recordOne = {
    aritst: 'Joey Beltram',
    songTitle: 'Energy Flash',
    genres: ['house', 'techno'],
    bpm: 126,
    position: 'A1',
    rpm: 45,
    release: 'Vol. 1',
    discogsLink: 'https://www.discogs.com/release/2085-Joey-Beltram-Beltram-Vol-1',
    year: 1990
  };

  const recordTwo = {
    artist: 'Black Riot',
    songTitle: 'A Day In The Life (CLub Mix)',
    genres: ['house'],
    bpm: 122,
    position: 'A1',
    rpm: 45,
    release: 'A Day In The Life',
    discogsLink: 'https://www.discogs.com/release/8843-Black-Riot-A-Day-In-The-Life',
    year: 1988
  };

  const recordCollection = [recordOne, recordTwo];

  res.json(recordCollection);
});

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req: Request, res: Response, next: NextFunction): void => {
  try {
    res.send("index.html");
  } catch (e) {
    next(e);
  }
});

app.listen(PORT, (): void => {
  console.log(`App listening on port ${PORT}`);
});
import express, { Request, Response, NextFunction } from 'express';
import path from 'path';

const PORT = 3000;

const app = express();

app.get('/test', (req: Request, res: Response): void => {
  const testObj = {
    name: 'Jarrett',
    age: 40,
    male: true
  };

  res.json(testObj);
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
import { Application, Request, Response } from "express";
import { DiscogsRes } from "../shared/types";

export const discogsApi = (app: Application) => {
  app.get('/discogs', (req: Request, res: Response<DiscogsRes>) => {
    const releaseNum = req.query.releaseNum;

    console.log('releaseNum', releaseNum);

    fetch(`https://api.discogs.com/releases/${releaseNum}`
    , 
    {
      headers: {
        'User-Agent': 'DjDatabase/1.0.0 (jarrettdougherty@gmail.com)'
      }
    }
    )
      .then((discogsRes) => discogsRes.json())
      .then((json: DiscogsRes) => res.json(json))
      .catch((e) => console.log(e));
  });
};
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.discogsApi = void 0;
const discogsApi = (app) => {
    app.get('/discogs', (req, res) => {
        const releaseNum = req.query.releaseNum;
        console.log('releaseNum', releaseNum);
        fetch(`https://api.discogs.com/releases/${releaseNum}`, {
            headers: {
                'User-Agent': 'DjDatabase/1.0.0 (jarrettdougherty@gmail.com)'
            }
        })
            .then((discogsRes) => discogsRes.json())
            .then((json) => res.json(json))
            .catch((e) => console.log(e));
    });
};
exports.discogsApi = discogsApi;

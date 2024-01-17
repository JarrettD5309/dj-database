"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const PORT = 3000;
const app = (0, express_1.default)();
app.get('/records', (req, res) => {
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
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
app.get('/', (req, res, next) => {
    try {
        res.send("index.html");
    }
    catch (e) {
        next(e);
    }
});
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
